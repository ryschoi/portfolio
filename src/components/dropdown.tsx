import { useEffect, useId, useRef, useState } from "react";
import { useDropdownGroup } from "./dropdown-group";

interface DropdownProps {
    title: string;
    content: React.ReactNode;
    classes?: string;
    defaultOpen?: boolean;
}

export default function Dropdown({ title, content, classes, defaultOpen = false }: DropdownProps) {
    const id = useId();
    const group = useDropdownGroup();
    const [localOpen, setLocalOpen] = useState(defaultOpen);
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);

    // Claim the group's initially-open slot, if requested and nothing else
    // has already taken it (e.g. a different Dropdown further up the tree).
    useEffect(() => {
        if (defaultOpen) group?.openDefault(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Track the content's real height continuously rather than snapshotting
    // it once on mount — a later layout shift (a font swapping in, an image
    // loading, an inner carousel changing) would otherwise leave `max-height`
    // stale and clip whatever sits at the bottom of the panel.
    useEffect(() => {
        const el = contentRef.current;
        if (!el) return;
        const observer = new ResizeObserver(() => setContentHeight(el.scrollHeight));
        observer.observe(el);
        return () => observer.disconnect();
    }, [content]);

    const open = group ? group.openId === id : localOpen;
    const handleToggle = () => {
        if (group) {
            group.toggle(id);
        } else {
            setLocalOpen(!localOpen);
        }
    };

    return (
        <div className={`dropdown-item ${classes || ""}`} data-open={open}>
            <button
                className="relative flex items-start w-full cursor-pointer text-left"
                onClick={handleToggle}
                aria-expanded={open}
            >
                {/* Docked to the right edge of the row on mobile - the page's
                    outer gutter is too narrow there to sit fully outside the
                    content column without risking clipping. At md+ it moves
                    out into that gutter, to the left, so the title/content
                    stay flush with the section header at every breakpoint.
                    items-start (rather than items-center) + the small mt- nudge
                    keeps it pinned level with the title's first line instead of
                    drifting to the vertical center of a multi-line title. */}
                <svg
                    className={`mt-[0.35rem] md:mt-0 ml-auto md:ml-0 md:mr-[0.75rem] md:absolute md:right-full md:top-1/2 md:-translate-y-1/2 transition-transform duration-300 shrink-0 ${open ? "rotate-0" : "-rotate-90"}`}
                    width="14" height="14" viewBox="0 0 16 16" fill="none"
                >
                    <path d="M4 6L8 10L12 6" stroke="#A0A0A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {/* min-w-0 lets the title actually shrink/wrap within the row
                    instead of a flex item's default min-width:auto pushing the
                    (mobile, in-row) chevron out past the row's right edge. */}
                <h2 className="serif transition-[font-weight] duration-300 min-w-0">{title}</h2>
            </button>
            <div
                className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                style={{ maxHeight: open ? `${contentHeight}px` : "0px" }}
            >
                <div ref={contentRef} className="gray pt-[1rem]">{content}</div>
            </div>
        </div>
    );
}
