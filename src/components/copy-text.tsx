import { useState } from "react";

// Plain text that copies itself on click, with the same "Copy" hover tooltip as Pill's copyText.
// With followCursor, the tooltip tracks the mouse instead of sitting at a fixed spot above the text.
export default function CopyText({ text, followCursor = false, className = "" }: { text: string; followCursor?: boolean; className?: string }) {
    const [isHovering, setIsHovering] = useState(false);
    const [tooltip, setTooltip] = useState("Copy");
    const [cursor, setCursor] = useState({ x: 0, y: 0 });

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setTooltip("Copied");
            setTimeout(() => setTooltip("Copy"), 1500);
        } catch {
            setTooltip("Copy failed");
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!followCursor) return;
        const rect = e.currentTarget.parentElement!.getBoundingClientRect();
        setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const tooltipStyle: React.CSSProperties = followCursor
        ? { left: cursor.x + 12, top: cursor.y - 28, bottom: "auto", margin: 0, transform: "none", pointerEvents: "none" }
        : { bottom: "55%", left: -8, transform: "none" };

    return (
        <div className="relative w-fit">
            <button
                className={`bg-transparent p-[0px] p-style green-hover cursor-pointer ${className}`}
                onClick={handleCopy}
                onMouseEnter={(e) => { handleMouseMove(e); setIsHovering(true); }}
                onMouseLeave={() => setIsHovering(false)}
                onMouseMove={handleMouseMove}
            >
                {text}
            </button>
            {isHovering && <p className="copyTooltip gray" style={tooltipStyle}>{tooltip}</p>}
        </div>
    );
}
