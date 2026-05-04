import HoverTag, { useTagCursor } from "./hover-tag";

type HoverLinkProps = {
  href?: string;
  label?: string;
  children: React.ReactNode;
};

export default function LinkHover({ href, label, children }: HoverLinkProps) {
  const { cursorState, containerProps } = useTagCursor();

  const resolvedLabel = label ?? (href ? "Go to case study" : "Case study coming soon");

  return (
    <div
      className="relative inline-block"
      {...containerProps}
      onClick={() => href && (window.location.href = href)}
    >
      {children}
      <HoverTag
        asCursor
        text={resolvedLabel}
        cursorX={cursorState.x}
        cursorY={cursorState.y}
        visible={cursorState.visible}
        className="caption text-[0.8rem] bold"
      />
    </div>
  );
}