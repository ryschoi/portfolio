import { useState } from "react";
import { Link } from "react-router";

type PillProps = {
    hover: boolean;
    clicked: boolean;
    text?: string;
    children?: React.ReactNode;
    tooltip?: string;
    path?: string;
    onClick?: () => void;
    copyText?: string;
};

export default function Pill({ hover, clicked, text, children, tooltip, path, onClick, copyText }: PillProps) {
    const [isHovering, setIsHovering] = useState(false);
    const [copyTooltip, setCopyTooltip] = useState("Copy");

    const basePadding = "py-[6px] px-[16px]";

    const pillClass = [
        clicked ? "tag-clicked" : hover ? "tag" : "tag-no-hover",
        basePadding,
        "w-fit h-fit",
    ].join(" ");

    const isExternal = path?.startsWith("http");
    const isFile = path?.match(/\.(pdf|docx|png|jpg|zip)$/i);

    const hoverHandlers = hover || copyText
        ? {
            onMouseEnter: () => setIsHovering(true),
            onMouseLeave: () => setIsHovering(false),
        }
        : {};

    const handleClick = copyText
        ? async () => {
            try {
                await navigator.clipboard.writeText(copyText);
                setCopyTooltip("Copied 📋");
                setTimeout(() => setCopyTooltip("Copy"), 1500);
            } catch {
                setCopyTooltip("Copy failed");
            }
        }
        : onClick;

    const activeTooltip = copyText ? copyTooltip : tooltip;

    const content = (
        <div className="relative inline-flex h-fit">
            <button className={`${pillClass} pillText`} onClick={handleClick} {...hoverHandlers}>
                {(text || copyText) ?? children}
            </button>
            {activeTooltip && isHovering && <p className={copyText ? "copyTooltip gray" : "tooltip gray"}>{activeTooltip}</p>}
        </div>
    );

    if (path && !onClick && !copyText) {
        return (isExternal || isFile)
            ? <a className="inline-flex leading-none h-fit" href={path} target="_blank" rel="noopener noreferrer">{content}</a>
            : <Link className="inline-flex leading-none h-fit" to={path}>{content}</Link>;
    }

    return content;
}