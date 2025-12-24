import { useEffect, useState } from "react";

export function useScrollUp(threshold = 200) {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      // scrolling up AND past threshold
      if (currentY < lastScrollY && currentY > threshold) {
        setShow(true);
      } else {
        setShow(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY, threshold]);

  return show;
}
