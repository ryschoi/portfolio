import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { craftItems, CraftItem } from "./database/craft";

// Giant pannable photo map of the images listed in src/database/craft.ts, with a
// minimap showing where the view is. Placements are re-randomized on each visit:
// the canvas is a grid of cells sized to the screen, and each image lands at a
// random size and spot inside its own cell, so it looks scattered without images
// piling on top of each other. Image sizes aren't needed up front: each image
// gets a random width and a max height that keeps it (plus its hover caption)
// inside its cell.

const CELL_W = 400; // base cell shape, used to pick the grid's columns and rows
const CELL_H = CELL_W * (4 / 5);
const CELL_W_RANGE = [300, 600]; // cells stretch within these to fill the map
const CELL_H_RANGE = [240, 480];
const MAP_FILL = 1.5; // the map aims for this many times the visible width
const DESKTOP_ASPECT = 16 / 10; // map shape on landscape screens, like a laptop/desktop display
const SPARE_CELL_COST = 0.15; // how much an empty cell counts against a grid shape when picking one
const GUTTER = 24; // minimum breathing room inside each cell
const CAPTION_H = 56; // room reserved under each image for the hover caption
const MINIMAP_W = 50;
const DOT_INSET = 6; // px between the minimap border and the dot's center at the edges
const ZOOM_FILL = 0.8; // a zoomed image fills this much of the view
const ZOOM_MS = 450;
const MAX_SCALE = 8;
const PINCH_SPEED = 0.01; // trackpad pinch sensitivity
const DRAG_THRESHOLD = 4; // px of movement before a press counts as a drag, not a click

const isVideo = (src: string) => /\.(mov|mp4|webm)$/i.test(src);
// How far along a scrollable range we are, 0–1 (0.5 when there's nothing to scroll).
const scrollProgress = (pos: number, max: number) => (max > 0 ? Math.min(1, Math.max(0, pos / max)) : 0.5);
const clamp = (v: number, [min, max]: number[]) => Math.min(max, Math.max(min, v));

type Placed = CraftItem & { x: number; y: number; w: number; maxH: number };

// 1. Shape: on landscape screens the map is 16:10, like a desktop display; on
//    portrait screens (phones) it takes the view's shape.
// 2. Grid: the columns × rows with about one cell per image whose shape best
//    matches that, with few empty cells.
// 3. Cells stretch so the map is about MAP_FILL times the view's width.
// 4. Images take the cells closest to the middle (with some randomness), so any
//    empty cells end up near the edges instead of in the first view.
function layout(viewW: number, viewH: number): { items: Placed[]; width: number; height: number } {
  const shuffled = [...craftItems].sort(() => Math.random() - 0.5);
  const n = shuffled.length;
  const aspect = viewW >= viewH ? DESKTOP_ASPECT : viewW / viewH;

  let cols = 1;
  let best = Infinity;
  for (let c = 1; c <= n; c++) {
    const r = Math.ceil(n / c);
    const shapeMiss = Math.abs(Math.log((c * CELL_W) / (r * CELL_H) / aspect));
    const score = shapeMiss + (c * r - n) * SPARE_CELL_COST;
    if (score < best) [best, cols] = [score, c];
  }
  const rows = Math.ceil(n / cols);

  const cellW = clamp((viewW * MAP_FILL) / cols, CELL_W_RANGE);
  const cellH = clamp((cols * cellW) / aspect / rows, CELL_H_RANGE);
  const width = cols * cellW;
  const height = rows * cellH;

  // Distance from the map's center (as a fraction of the map), plus jitter.
  const centerScore = (i: number) => {
    const dx = ((i % cols) + 0.5) / cols - 0.5;
    const dy = (Math.floor(i / cols) + 0.5) / rows - 0.5;
    return Math.hypot(dx, dy) + Math.random() * 0.2;
  };
  const cells = Array.from({ length: cols * rows }, (_, i) => ({ i, d: centerScore(i) }))
    .sort((a, b) => a.d - b.d)
    .slice(0, n)
    .map((c) => c.i);
  const innerW = cellW - GUTTER;
  const innerH = cellH - GUTTER - CAPTION_H;

  const items = shuffled.map((item, i) => {
    const w = innerW * (0.5 + Math.random() * 0.5);
    const yOffset = Math.random() * innerH * 0.35;
    const col = cells[i] % cols;
    const row = Math.floor(cells[i] / cols);
    return {
      ...item,
      w,
      maxH: innerH - yOffset,
      x: col * cellW + GUTTER / 2 + Math.random() * (innerW - w),
      y: row * cellH + GUTTER / 2 + yOffset,
    };
  });

  return { items, width, height };
}

export default function Craft() {
  // Laid out once the map's visible size is known (before the first paint).
  const [map, setMap] = useState<ReturnType<typeof layout> | null>(null);
  const { items, width, height } = map ?? { items: [], width: 0, height: 0 };
  const scrollerRef = useRef<HTMLDivElement>(null);
  const sizerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const scale = useRef(1);
  const anim = useRef<number | null>(null);
  const drag = useRef<{ x: number; y: number; left: number; top: number; moved: boolean } | null>(null);
  // Set while an image is click-zoomed: which image, and the view from just
  // before the click, so the next tap can go back to it. Cleared by pinching.
  const [zoomed, setZoomed] = useState<number | null>(null);
  const preZoom = useRef<{ s: number; cx: number; cy: number } | null>(null);

  const minimapH = width ? (MINIMAP_W * height) / width : 0;

  // Map point currently at viewport position (vx, vy) — defaults to the view's
  // center. The sizer is centered when it's smaller than the view, hence offsetLeft/Top.
  const mapPointAt = (vx?: number, vy?: number) => {
    const el = scrollerRef.current!;
    const sz = sizerRef.current!;
    const s = scale.current;
    return {
      x: (el.scrollLeft + (vx ?? el.clientWidth / 2) - sz.offsetLeft) / s,
      y: (el.scrollTop + (vy ?? el.clientHeight / 2) - sz.offsetTop) / s,
    };
  };

  // Move the minimap dot to match how far the view is scrolled: at the far
  // left/top edge of the map the dot is at the minimap's left/top edge, and so
  // on. When the map fits in the view in a direction, the dot sits centered.
  // Mutates the dot directly so scrolling doesn't re-render all the images.
  const syncDot = () => {
    const el = scrollerRef.current;
    const dot = dotRef.current;
    if (!el || !dot) return;
    const fx = scrollProgress(el.scrollLeft, el.scrollWidth - el.clientWidth);
    const fy = scrollProgress(el.scrollTop, el.scrollHeight - el.clientHeight);
    // Inset so the dot stays inside the minimap's border at the edges.
    dot.style.left = `calc(${DOT_INSET}px + ${fx} * (100% - ${2 * DOT_INSET}px))`;
    dot.style.top = `calc(${DOT_INSET}px + ${fy} * (100% - ${2 * DOT_INSET}px))`;
  };

  // Smallest zoom: the whole map fits in the view (or 1×, if it already fits).
  const minScale = () => {
    const el = scrollerRef.current!;
    return Math.min(1, el.clientWidth / width, el.clientHeight / height);
  };

  // Apply zoom level s, putting map point (mx, my) at viewport position
  // (vx, vy) — the view's center by default. The sizer sets the scrollable
  // area; the canvas is scaled inside it.
  const applyView = (s: number, mx: number, my: number, vx?: number, vy?: number) => {
    const el = scrollerRef.current;
    const sz = sizerRef.current;
    if (!el || !sz || !canvasRef.current) return;
    scale.current = s;
    sz.style.width = `${width * s}px`;
    sz.style.height = `${height * s}px`;
    canvasRef.current.style.transform = `scale(${s})`;
    el.scrollLeft = mx * s + sz.offsetLeft - (vx ?? el.clientWidth / 2);
    el.scrollTop = my * s + sz.offsetTop - (vy ?? el.clientHeight / 2);
    syncDot();
  };

  const stopAnim = () => {
    if (anim.current) cancelAnimationFrame(anim.current);
    anim.current = null;
  };

  // Smoothly animate zoom level and center together.
  const animateTo = (toScale: number, toCx: number, toCy: number) => {
    if (!scrollerRef.current) return;
    stopAnim();
    const from = scale.current;
    const c = mapPointAt();
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / ZOOM_MS);
      const e = 1 - Math.pow(1 - t, 3); // ease-out cubic
      applyView(from + (toScale - from) * e, c.x + (toCx - c.x) * e, c.y + (toCy - c.y) * e);
      anim.current = t < 1 ? requestAnimationFrame(step) : null;
    };
    anim.current = requestAnimationFrame(step);
  };

  // Back to the view from before the image was clicked.
  const restore = () => {
    const prev = preZoom.current;
    if (!prev) return;
    preZoom.current = null;
    setZoomed(null);
    animateTo(prev.s, prev.cx, prev.cy);
  };

  // Tapping an image zooms in so it fills most of the view. While zoomed, the
  // next tap anywhere (or Esc) goes back to the pre-tap view, unless the zoom
  // was adjusted by pinching in the meantime.
  const onItemClick = (i: number, e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (drag.current?.moved) return;
    if (preZoom.current) return restore();
    const el = scrollerRef.current;
    if (!el) return;
    const item = items[i];
    const box = e.currentTarget; // unscaled size via offsetWidth/Height
    const w = box.offsetWidth;
    const h = (box.firstElementChild as HTMLElement).offsetHeight;
    const s = Math.min(MAX_SCALE, (el.clientWidth * ZOOM_FILL) / w, (el.clientHeight * ZOOM_FILL) / h);
    const c = mapPointAt();
    preZoom.current = { s: scale.current, cx: c.x, cy: c.y };
    setZoomed(i);
    animateTo(s, item.x + w / 2, item.y + h / 2);
  };

  // Pinch zoom around the given screen point. Pinching counts as adjusting the
  // zoom, so it drops the click-zoom's "tap to go back" state.
  const zoomAround = (s: number, clientX: number, clientY: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    stopAnim();
    if (preZoom.current) {
      preZoom.current = null;
      setZoomed(null);
    }
    const rect = el.getBoundingClientRect();
    const vx = clientX - rect.left;
    const vy = clientY - rect.top;
    const m = mapPointAt(vx, vy);
    applyView(Math.min(MAX_SCALE, Math.max(minScale(), s)), m.x, m.y, vx, vy);
  };

  // Trackpad pinch. Chrome/Firefox/Edge send it as ctrl+wheel; Safari sends
  // gesture events. Both need non-passive listeners to stop the browser from
  // zooming the whole page instead. Plain two-finger scrolling still pans.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (!e.ctrlKey) return;
      e.preventDefault();
      zoomAround(scale.current * Math.exp(-e.deltaY * PINCH_SPEED), e.clientX, e.clientY);
    };
    let gestureStart = 1;
    const onGestureStart = (e: Event) => { e.preventDefault(); gestureStart = scale.current; };
    const onGestureChange = (e: Event) => {
      e.preventDefault();
      const g = e as Event & { scale: number; clientX: number; clientY: number };
      zoomAround(gestureStart * g.scale, g.clientX, g.clientY);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("gesturestart", onGestureStart);
    el.addEventListener("gesturechange", onGestureChange);
    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("gesturestart", onGestureStart);
      el.removeEventListener("gesturechange", onGestureChange);
    };
  });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") restore(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  useEffect(() => stopAnim, []);

  useLayoutEffect(() => {
    const el = scrollerRef.current!;
    setMap(layout(el.clientWidth, el.clientHeight));
  }, []);

  // Start in the middle of the map.
  useLayoutEffect(() => {
    applyView(1, width / 2, height / 2);
  }, [width, height]);

  // Click-and-drag panning for mouse users (trackpads and touch scroll natively).
  // The pointer is only captured once it actually moves, so plain clicks still
  // reach the images.
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    const el = scrollerRef.current!;
    drag.current = { x: e.clientX, y: e.clientY, left: el.scrollLeft, top: el.scrollTop, moved: false };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d) return;
    const el = scrollerRef.current!;
    const dx = e.clientX - d.x;
    const dy = e.clientY - d.y;
    if (!d.moved) {
      if (Math.hypot(dx, dy) < DRAG_THRESHOLD) return;
      d.moved = true;
      stopAnim();
      el.setPointerCapture(e.pointerId);
    }
    el.scrollLeft = d.left - dx;
    el.scrollTop = d.top - dy;
  };
  // Cleared after the click event fires, so the click handlers can see `moved`.
  const endDrag = () => { setTimeout(() => { drag.current = null; }); };

  // Clicking a spot on the minimap scrolls to the matching point (same mapping as the dot).
  const onMinimapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const fx = Math.min(1, Math.max(0, (e.clientX - rect.left - DOT_INSET) / (rect.width - 2 * DOT_INSET)));
    const fy = Math.min(1, Math.max(0, (e.clientY - rect.top - DOT_INSET) / (rect.height - 2 * DOT_INSET)));
    el.scrollTo({
      left: fx * (el.scrollWidth - el.clientWidth),
      top: fy * (el.scrollHeight - el.clientHeight),
      behavior: "smooth",
    });
  };

  const zoomedItem = zoomed === null ? null : items[zoomed];

  return (
    <div className="relative w-full flex-1 min-h-0">
      <div
        ref={scrollerRef}
        onScroll={syncDot}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClick={() => { if (!drag.current?.moved) restore(); }}
        className="flex w-full h-full overflow-scroll cursor-grab active:cursor-grabbing select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div ref={sizerRef} className="relative shrink-0 m-auto" style={{ width, height }}>
          <div
            ref={canvasRef}
            className="absolute top-0 left-0 origin-top-left"
            style={{ width, height }}
          >
            {items.map((item, i) => (
              <div
                key={`${item.src}-${i}`}
                onClick={(e) => onItemClick(i, e)}
                className={`group absolute flex flex-col items-start ${zoomed !== null ? "cursor-zoom-out" : "cursor-zoom-in"}`}
                style={{ left: item.x, top: item.y, width: item.w }}
              >
                {isVideo(item.src) ? (
                  // Muted autoplaying loop, like the videos on the project pages.
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    aria-label={item.title}
                    className="max-w-full w-auto object-contain"
                    style={{ maxHeight: item.maxH }}
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="max-w-full w-auto object-contain"
                    style={{ maxHeight: item.maxH }}
                  />
                )}
                {/* Caption: hidden until the image is hovered (and while zoomed,
                    where the caption shows unscaled at the bottom instead) */}
                {zoomed === null && (
                  <div className="absolute top-full left-0 w-full pt-[0.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <p>{item.title}</p>
                    {item.description && <p className="gray">{item.description}</p>}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ZOOMED CAPTION */}
      {zoomedItem && (
        <div className="absolute bottom-[1rem] left-1/2 -translate-x-1/2 max-w-[60%] text-center pointer-events-none">
          <p>{zoomedItem.title}</p>
          {zoomedItem.description && <p className="gray">{zoomedItem.description}</p>}
        </div>
      )}

      {/* MINIMAP */}
      <div
        onClick={onMinimapClick}
        className="absolute bottom-[-0.5rem] left-0 rounded-[0.6rem] border-[1.5px] border-gray-stroke bg-[color-mix(in_srgb,var(--bg)_80%,transparent)] cursor-pointer"
        style={{ width: MINIMAP_W, height: minimapH }}
        aria-hidden="true"
      >
        <div
          ref={dotRef}
          className="absolute w-[6px] h-[6px] rounded-full bg-black -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />
      </div>
    </div>
  );
}
