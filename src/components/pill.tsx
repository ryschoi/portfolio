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
};

export default function Pill({ hover, clicked, text, children, tooltip, path, onClick }: PillProps) {
    const [isHovering, setIsHovering] = useState(false);

    const basePadding = "py-[6px] px-[16px]";

    const pillClass = [
        clicked ? "tag-clicked" : hover ? "tag" : "tag-no-hover",
        basePadding,
        "w-fit h-fit",
    ].join(" ");

    const isExternal = path?.startsWith("http");

    const hoverHandlers = hover
        ? {
            onMouseEnter: () => setIsHovering(true),
            onMouseLeave: () => setIsHovering(false),
        }
        : {};

    const content = (
        <div className="relative inline-flex h-fit">
            <button className={`${pillClass} pillText`} onClick={onClick} {...hoverHandlers}>
                {text ?? children}
            </button>
            {tooltip && isHovering && <p className="tooltip gray">{tooltip}</p>}
        </div>
    );

    if (path && !onClick) {
        return isExternal
            ? <a className="inline-flex leading-none h-fit" href={path} target="_blank" rel="noreferrer">{content}</a>
            : <Link className="inline-flex leading-none h-fit" to={path}>{content}</Link>;
    }

    return content;
}