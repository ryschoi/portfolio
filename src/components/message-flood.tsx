import { useEffect, useRef, useState } from "react";
import "./message-flood.css";

// iMessage "Echo"-style effect: when the box scrolls into view, the real question bubbles float
// up one by one to their places in the layout, while extra copies stream up through the box
// behind them and out the top. Like a balloon tapped upward, each real bubble rises, hangs
// there for a moment, then sinks slowly back out the bottom, and the whole thing replays,
// looping while the box is on screen. With reduced motion it's a still layout of the real bubbles.

const dir = "/images/work/cooper/messages";

// The real bubbles, positioned as percentages of a 2000×570 layout frame.
const bubbles = [
  { src: `${dir}/pay.png`, alt: "How much does it pay?", left: 35.7, top: 37.7, width: 26.9 },
  { src: `${dir}/kind-of-work.png`, alt: "What kind of work do you do?", left: 8.5, top: 9.6, width: 26.9 },
  { src: `${dir}/company-culture.png`, alt: "What's the company culture like?", left: 46.7, top: 67.9, width: 44.4 },
  { src: `${dir}/interview.png`, alt: "What's the interview like?", left: 0, top: 39.1, width: 32 },
  { src: `${dir}/software.png`, alt: "What software do you use?", left: 45.2, top: 8.4, width: 33.9 },
  { src: `${dir}/co-op-program.png`, alt: "Is there a co-op program?", left: 11, top: 72.8, width: 26.7 },
  { src: `${dir}/other-co-ops.png`, alt: "Were there other co-ops?", left: 70.7, top: 37.2, width: 29.3 },
];

const MAIN_STAGGER = 140; // ms between the real bubbles
const ECHO_COUNT = 20;
const ECHO_START = 150;
const ECHO_STAGGER = 65;
const MAIN_DURATION = 5000; // rise + hang + fall; keep in sync with .message-flood-main in the CSS
const CYCLE_END = (bubbles.length - 1) * MAIN_STAGGER + MAIN_DURATION; // last bubble gone
const RESTART_PAUSE = 500; // empty box before the next round

// Seeded random so the flood looks the same on every visit.
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(7);
// Echo positions are percentages of the whole box, and some run off its edges.
const echoes = Array.from({ length: ECHO_COUNT }, (_, i) => ({
  src: bubbles[Math.floor(rand() * bubbles.length)].src,
  left: rand() * 100 - 15,
  top: rand() * 100 - 15,
  width: 18 + rand() * 22,
  delay: ECHO_START + i * ECHO_STAGGER,
}));

export default function MessageFlood({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [cycle, setCycle] = useState(0);
  const visible = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      visible.current = true;
      setPlaying(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible.current = entry.isIntersecting;
        if (entry.isIntersecting) setPlaying(true);
      },
      // Start once about a third of the box has come up past the bottom tenth of the window:
      // early enough that it's already going as the reader arrives, but not the instant it
      // peeks in.
      { threshold: 0.35, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Loop: once every bubble has fallen away, bump the cycle, which remounts the images (they're
  // keyed on it) and so restarts their animations. If the box has scrolled away by then, stop
  // and wait for the observer to start it again when it's back on screen.
  useEffect(() => {
    if (!playing) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => {
      if (visible.current) setCycle((c) => c + 1);
      else setPlaying(false);
    }, CYCLE_END + RESTART_PAUSE);
    return () => clearTimeout(t);
  }, [playing, cycle]);

  return (
    <div
      ref={ref}
      className={`message-flood relative overflow-hidden p-[1.5rem] ${playing ? "is-playing" : ""} ${className}`}
    >
      {echoes.map((e, i) => (
        <img
          key={`${cycle}-${i}`}
          src={e.src}
          alt=""
          aria-hidden="true"
          className="message-flood-echo"
          style={
            {
              left: `${e.left}%`,
              top: `${e.top}%`,
              width: `${e.width}%`,
              "--delay": `${e.delay}ms`,
            } as React.CSSProperties
          }
        />
      ))}
      <div className="relative w-full aspect-[2000/570]">
        {bubbles.map((b, i) => (
          <img
            key={`${cycle}-${b.src}`}
            src={b.src}
            alt={b.alt}
            className="message-flood-main"
            style={
              {
                left: `${b.left}%`,
                top: `${b.top}%`,
                width: `${b.width}%`,
                "--delay": `${i * MAIN_STAGGER}ms`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
