import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router";

export default function HoverButton({ buttonText, hoverText, path }: { buttonText: string; hoverText: string, path: string }) {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Link key='/' to={path}>
      <div className="relative inline">
        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover-tag peer" data-full-text={hoverText}>
          {buttonText}
        </button>
        <p className="">
          {isHovering ? <p className="tooltip gray">{hoverText}</p> : <></>}
        </p>
      </div>
    </Link>
  );
}