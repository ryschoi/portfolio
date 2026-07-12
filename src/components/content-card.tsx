import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

export default function ContentCard({
  children,
  active = true,
  first = false,
  last = false,
  onClick,
}: {
  children: ReactNode;
  active?: boolean;
  first?: boolean;
  last?: boolean;
  onClick?: () => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hasMore, setHasMore] = useState(false);

  const update = () => {
    const el = scrollRef.current;
    if (!el) return;
    setHasMore(el.scrollHeight - el.scrollTop - el.clientHeight > 8);
  };

  useEffect(update, [children]);

  const fade = "linear-gradient(to bottom, black 78%, transparent 100%)";

  // Desktop snap alignment: first at the left edge, last at the right edge,
  // middle cards just left of center (via scroll-margin). Mobile is always start.
  const snap = first
    ? "md:snap-start"
    : last
      ? "snap-start md:snap-end"
      : "snap-start md:snap-center md:scroll-mr-[6rem]";

  return (
    <div
      onClick={onClick}
      className={`${snap} relative shrink-0 w-full md:w-[36rem] md:aspect-[5/4] rounded-[1.5rem] border border-white/40 img-bg backdrop-blur-md overflow-hidden transition-opacity duration-300 [&_img]:transition-[filter] [&_img]:duration-300 ${
        active ? "opacity-100" : "opacity-50 cursor-pointer [&_img]:grayscale"
      }`}
    >
      <div
        ref={scrollRef}
        onScroll={update}
        style={hasMore ? { maskImage: fade, WebkitMaskImage: fade } : undefined}
        className="p-[2rem] overflow-visible md:h-full md:overflow-y-auto"
      >
        {children}
      </div>
    </div>
  );
}
