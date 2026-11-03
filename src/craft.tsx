import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { craftItems, CraftItem } from "./database/craft";

// Giant pannable photo map of the images listed in src/database/craft.ts, with a
// minimap showing where the view is. Placements are re-randomized on each visit:
// the canvas is a grid of cells, and each image lands at a random size and spot
// inside its own cell, so it looks scattered without images piling on top of
// each other. Image sizes aren't needed up front: each image gets a random
// width and a max height that keeps it (plus its hover caption) inside its cell.

const CELL_W = 400;
const CELL_H = CELL_W * (4 / 5); // N×N grid of these makes the whole map 5:4
const GUTTER = 24; // minimum breathing room inside each cell
const CAPTION_H = 56; // room reserved under each image for the hover caption
const MINIMAP_W = 50;
const ZOOM_FILL = 0.8; // a zoomed image fills this much of the view
const ZOOM_MS = 450;
const MAX_SCALE = 8;
const PINCH_SPEED = 0.01; // trackpad pinch sensitivity
const DRAG_THRESHOLD = 4; // px of movement before a press counts as a drag, not a click

const isVideo = (src: string) => /\.(mov|mp4|webm)$/i.test(src);

type Placed = CraftItem & { x: number; y: number; w: number; maxH: number };

function layout(): { items: Placed[]; width: number; height: number } {
  const shuffled = [...craftItems].sort(() => Math.random() - 0.5);
  // 5:4 map (wider than tall): an N×N grid of 5:4 cells with at least one cell per image. When there are
  // spare cells, images go into a random subset of them, so the gaps are random too.
  const n = Math.max(1, Math.ceil(Math.sqrt(shuffled.length)));
  const cells = Array.from({ length: n * n }, (_, i) => i)
    .sort(() => Math.random() - 0.5)
    .slice(0, shuffled.length);
  const innerW = CELL_W - GUTTER;
  const innerH = CELL_H - GUTTER - CAPTION_H;

  const items = shuffled.map((item, i) => {
    const w = 160 + Math.random() * (innerW - 160);
    const yOffset = Math.random() * innerH * 0.35;
    const col = cells[i] % n;
    const row = Math.floor(cells[i] / n);
    return {
      ...item,
      w,
      maxH: innerH - yOffset,
      x: col * CELL_W + GUTTER / 2 + Math.random() * (innerW - w),
      y: row * CELL_H + GUTTER / 2 + yOffset,
    };
  });

  return { items, width: n * CELL_W, height: n * CELL_H };
}

export default function Craft() {
  const { items, width, height } = useMemo(layout, []);
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

  const minimapH = (MINIMAP_W * height) / width;

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

  // Move the minimap dot to the center of the current view. Mutates the dot
  // directly so scrolling doesn't re-render all the images.
  const syncDot = () => {
    const dot = dotRef.current;
    if (!scrollerRef.current || !sizerRef.current || !dot) return;
    const c = mapPointAt();
    dot.style.left = `${Math.min(1, Math.max(0, c.x / width)) * 100}%`;
    dot.style.top = `${Math.min(1, Math.max(0, c.y / height)) * 100}%`;
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

  // Clicking the minimap jumps the view there.
  const onMinimapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    const sz = sizerRef.current;
    if (!el || !sz) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const s = scale.current;
    const fx = (e.clientX - rect.left) / rect.width;
    const fy = (e.clientY - rect.top) / rect.height;
    el.scrollTo({
      left: fx * width * s + sz.offsetLeft - el.clientWidth / 2,
      top: fy * height * s + sz.offsetTop - el.clientHeight / 2,
      behavior: "smooth",
    });
  };

  const zoomedItem = zoomed === null ? null : items[zoomed];

  return (
    <div className="relative w-full h-[75svh] md:h-[calc(100svh-5rem)]">
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
                    <p className="">{item.title}</p>
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
        className="absolute bottom-[1rem] left-[1rem] rounded-[0.6rem] border-[1.5px] border-gray-stroke bg-[var(--bg)] cursor-pointer"
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
