import { useState } from "react";

interface CollapsibleProps {
  classes?: string;
  closedText: string;
  content: React.ReactNode;
}

export default function Collapsible({ classes, closedText, content }: CollapsibleProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`card ${classes || ""} ${open ? "open" : ""}`}>
      <button
        className="card-header"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="plus-minus">{open ? "−" : "+"}</span>
        {closedText}
      </button>

      <div className="card-content">
        <div className="content">{content}</div>
      </div>
    </div>
  );
}