import { useEffect, useRef } from "react";

export function usePauseOnScroll() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    let timeout: number;

    const onScroll = () => {
      track.classList.add("paused");

      window.clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        track.classList.remove("paused");
      }, 1200);
    };

    viewport.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      viewport.removeEventListener("scroll", onScroll);
      window.clearTimeout(timeout);
    };
  }, []);

  return { viewportRef, trackRef };
}