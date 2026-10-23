import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ResetScroll() {
    const { pathname } = useLocation();

    // Layout effect so the jump happens before paint, and "instant" so it
    // never animates even if a smooth scroll-behavior is set on <html>.
    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [pathname]);

    return null;
}
