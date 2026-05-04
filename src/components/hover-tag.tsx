import { useState, useCallback, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface TagProps {
  text?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  /** When true the tag acts as a floating cursor overlay */
  asCursor?: boolean;
  cursorX?: number;
  cursorY?: number;
  visible?: boolean;
  className?: string;
}

interface TagCursorState {
  x: number;
  y: number;
  visible: boolean;
}

interface UseTagCursorReturn {
  cursorState: TagCursorState;
  containerProps: {
    onMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    style: React.CSSProperties;
  };
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

/**
 * Attach `containerProps` to the element you want to track (e.g. an <img>
 * wrapper), then pass `cursorState` into <Tag asCursor … />.
 */
export function useTagCursor(): UseTagCursorReturn {
  const [cursorState, setCursorState] = useState<TagCursorState>({
    x: 0,
    y: 0,
    visible: false,
  });

  const containerRef = useRef<DOMRect | null>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    containerRef.current = rect;
    setCursorState({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      visible: true,
    });
  }, []);

  const onMouseEnter = useCallback(() => {
    setCursorState((s) => ({ ...s, visible: true }));
  }, []);

  const onMouseLeave = useCallback(() => {
    setCursorState((s) => ({ ...s, visible: false }));
  }, []);

  return {
    cursorState,
    containerProps: {
      onMouseMove,
      onMouseEnter,
      onMouseLeave,
      // Hide the real cursor while inside the container
      style: { cursor: "none" },
    },
  };
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function HoverTag({
  text,
  children,
  onClick,
  asCursor = false,
  cursorX = 0,
  cursorY = 0,
  visible = true,
  className = "",
}: TagProps) {
  const label = text ?? children;

  const pillBase =
    "inline-flex items-center gap-1.5 text-sm font-medium " +
    "transition-all duration-150 select-none whitespace-nowrap";


  if (asCursor) {
    return (
      <span
        aria-hidden
        style={{
          position: "absolute",
          left: cursorX,
          top: cursorY,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 50,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.15s ease",
        }}
      >
        <span className={`${pillBase} green-tag ${className}`}>
          {label}
        </span>
      </span>
    );
  }

  return (
    <button
      className={`${pillBase} pillText cursor-pointer active:scale-95`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}