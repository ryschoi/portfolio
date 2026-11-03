import { useState } from "react";

// Plain text that copies itself on click, with the same "Copy" hover tooltip as Pill's copyText.
export default function CopyText({ text }: { text: string }) {
    const [isHovering, setIsHovering] = useState(false);
    const [tooltip, setTooltip] = useState("Copy");

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setTooltip("Copied");
            setTimeout(() => setTooltip("Copy"), 1500);
        } catch {
            setTooltip("Copy failed");
        }
    };

    return (
        <div className="relative w-fit">
            <button
                className="bg-transparent p-[0px] p-style green-hover cursor-pointer"
                onClick={handleCopy}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {text}
            </button>
            {isHovering && <p className="copyTooltip gray" style={{ bottom: "55%", left: -8, transform: "none" }}>{tooltip}</p>}
        </div>
    );
}
