import HoverTag, {useTagCursor} from "./hover-tag";

type inputs = {
  src: string;
  caption?: string;
  vert: boolean;
}

export default function SlideImg({ src, caption, vert }: inputs) {
  const { cursorState, containerProps } = useTagCursor();
  const hasCaption = Boolean(caption);

  return (
    <div
      className="slide relative inline-block"
      {...(hasCaption ? containerProps : {})}
    >
      <img
        src={src}
        alt=""
        className={`
          ${vert ? "vert-slide-img" : "slide-img"}
          ${src === "images/work/alihacks/sp6.png" ? "mr-[2.5rem]" : ""}
        `}
      />

      {hasCaption && (
        <HoverTag
          asCursor
          text={caption}
          cursorX={cursorState.x}
          cursorY={cursorState.y}
          visible={cursorState.visible}
        />
      )}
    </div>
  );
}
