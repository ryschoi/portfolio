import { useEffect } from "react";
import { useLocation } from "react-router";

export default function HoverButton({ text, hoverText }: { text: string; hoverText: string }) {
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
    <div className="relative group">
      <button className="work-tag">
        {text}
      </button>
      <div className="tooltip opacity-0 group-hover:opacity-100 gray">
        {hoverText}
      </div>
    </div>
  );
}