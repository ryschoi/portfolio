import { section } from "../projects/section";
import { useEffect, useRef, useState } from "react";

export default function FloatingNav({ sections }: { sections: section[] }) {
    const handleScroll = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top, behavior: "smooth" });
    };

    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sections]);

    // The nav lines up with the first section's top edge and scrolls up with it, then stops
    // TOP_GAP from the top of the screen and stays there for the rest of the page. Before the
    // first section scrolls into view, the nav is below the screen along with it. Set straight
    // on the element (not through state) so scrolling doesn't re-render the nav.
    const TOP_GAP = 76; // 6rem
    const navRef = useRef<HTMLDivElement>(null);
    const firstId = sections[0]?.id;

    useEffect(() => {
        const update = () => {
            const nav = navRef.current;
            const first = firstId ? document.getElementById(firstId) : null;
            if (!nav || !first) return;
            nav.style.top = `${Math.max(TOP_GAP, first.getBoundingClientRect().top)}px`;
        };
        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        // Images above the first section load in after mount and push it down without a
        // scroll, so re-measure whenever the page's size changes too.
        const resizeObserver = new ResizeObserver(update);
        resizeObserver.observe(document.body);
        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
            resizeObserver.disconnect();
        };
    }, [firstId]);

    // Flag titles that wrap past one line so their dot sits at the top instead of the
    // middle (see .nav-dot[data-multiline] in index.css). Re-checked when a label's size
    // changes, e.g. once the web font loads or the nav goes from hidden to shown.
    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;
        const labels = Array.from(nav.querySelectorAll<HTMLElement>(".label"));
        const check = () => {
            labels.forEach((label) => {
                const lineHeight = parseFloat(getComputedStyle(label).lineHeight);
                const button = label.parentElement;
                if (!button || !lineHeight) return;
                button.toggleAttribute("data-multiline", label.offsetHeight > lineHeight * 1.5);
            });
        };
        check();
        const resizeObserver = new ResizeObserver(check);
        labels.forEach((label) => resizeObserver.observe(label));
        return () => resizeObserver.disconnect();
    }, [sections]);

    return (
        <div ref={navRef} className="floating-nav group hidden lg:block">
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => handleScroll(section.id)}
                    className={`nav-dot ${section.id === activeSection ? "active" : ""}`}
                >
                    <span className="dot" />
                    <span className="label p-style">{section.header}</span>
                </button>
            ))}
        </div>
    );
}