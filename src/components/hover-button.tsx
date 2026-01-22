import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router";

type HoverButtonProps = {
  buttonText: string;
  hoverText: string;
  path?: string;
  onClick?: () => void;
};

export default function HoverButton({ buttonText, hoverText, path, onClick }: HoverButtonProps) {
  const { hash } = useLocation();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const content = (
    <div className="relative inline">
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="hover-tag peer"
        data-full-text={hoverText}
        type="button"
      >
        {buttonText}
      </button>

      {isHovering && <p className="tooltip gray">{hoverText}</p>}
    </div>
  );

  if (path && !onClick) {
    return (
      <Link className="inline" to={path}>
        {content}
      </Link>
    );
  }

  return content;
}