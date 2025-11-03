import { useEffect } from "react";
import { useLocation, Link } from "react-router";

export default function HoverButton({ text, hoverText, path }: { text: string; hoverText: string, path: string }) {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <Link key='/' to={path}>
      <div className="relative inline">
        <button className="hover-tag peer" data-full-text={hoverText}>
          {text}
        </button>
        <p className="tooltip opacity-0 peer-hover:opacity-100 gray">
          {hoverText}
        </p>
      </div>
    </Link>
  );
}