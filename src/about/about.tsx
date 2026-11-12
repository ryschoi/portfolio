import "./about.css";
import CopyText from "../components/copy-text";
import { useRef } from "react";
import { useTagCursor } from "../components/hover-tag";

const photos = {
  headshot: {
    src: "images/website-assets/denby_headshot copy.jpg",
    alt: "Rebecca Choi",
    caption: "That's me :>",
  },
  trees: {
    src: "images/tree.jpeg",
    alt: "A fluffy white dog in a red harness",
    caption: "",
  },
  cake: {
    src: "images/cake.png",
    alt: "A cake topped with chamomile flowers",
    caption: "Fun fact: The Common App essay that got me into Northeastern was about baking",
  },
  lamp: {
    src: "images/lamp.jpeg",
    alt: "A folded paper lantern lit up at night",
    caption: "DIY paper lamp",
  },
  nara: {
    src: "images/nara6.jpeg",
    alt: "A fluffy white dog in a red harness",
    caption: "My dog Nara",
  },
  drive: {
    src: "images/drive.png",
    alt: "A fluffy white dog in a red harness",
    caption: "",
  },
  beach: {
    src: "images/beachwide.jpeg",
    alt: "A fluffy white dog in a red harness",
    caption: "Bay Area🤍",
  },
};

type PhotoKey = keyof typeof photos;

// Photo columns, left to right (three on every screen size). The headshot
// stays first in the first column; move photos between columns to even out
// the heights. Captions follow the cursor instead of taking up space, so only
// the image heights matter.
const photoColumns: PhotoKey[][] = [
  ["headshot", "trees"],
  ["cake", "lamp"],
  ["nara", "drive", "beach"],
];

const TAG_OFFSET_X = 14; // px from the cursor to the caption tag; matches .photo-caption-tag in about.css
const PAGE_EDGE_MARGIN = 8; // px the tag keeps clear of the page's right edge

function Photo({ photo }: { photo: (typeof photos)[PhotoKey] }) {
  const { cursorState, containerProps } = useTagCursor();
  const figureRef = useRef<HTMLElement>(null);
  const tagRef = useRef<HTMLSpanElement>(null);
  const img = <img src={photo.src} alt={photo.alt} className="w-full object-cover" />;

  if (!photo.caption) return <figure className="m-0">{img}</figure>;

  // The caption follows the cursor, just below it and to the right, while
  // hovering the image (hidden on touch screens in about.css). It only flips to
  // the cursor's left when it wouldn't fit before the right edge of the page.
  // The hook hides the real cursor by default; keep it visible here.
  const fitsRight = () => {
    const fig = figureRef.current;
    const tag = tagRef.current;
    if (!fig || !tag) return true;
    const right = fig.getBoundingClientRect().left + cursorState.x + TAG_OFFSET_X + tag.offsetWidth;
    return right <= document.documentElement.clientWidth - PAGE_EDGE_MARGIN;
  };
  const flip = !fitsRight();
  return (
    <figure ref={figureRef} className="relative m-0" {...containerProps} style={{ cursor: "default" }}>
      {img}
      <span
        ref={tagRef}
        aria-hidden
        className={`pill photo-caption-tag ${flip ? "flip" : ""}`}
        style={{ left: cursorState.x, top: cursorState.y, opacity: cursorState.visible ? 1 : 0 }}
      >
        {photo.caption}
      </span>
    </figure>
  );
}

export default function About() {
  return (
    <div className="flex flex-col gap-[2rem] w-full mt-[2rem] md:mt-[5rem] md:w-auto md:max-w-[34rem] md:ml-[50%]">
      <div className="flex flex-col gap-[2rem] flex-1 min-w-0 w-[75%] md:w-auto">
        <div className="flex flex-col gap-[1rem]">
          <p className="gray">
            <span className="black">Hi, I'm Rebecca</span>
            <br />
            <br />I love the problem solving and creativity building things
            calls for, and design is just one of the ways I get to do that. I
            recently got my degree in Computer Science and Design from
            Northeastern University.
          </p>
          <div className="flex flex-wrap gap-x-[0.75rem] gap-y-[0.25rem] mt-[0.75rem]">
            <CopyText text="rebecca.choi05@gmail.com" followCursor className="gray" />
            <p className="light-gray">•</p>
            <a className="gray green-hover" href="https://www.linkedin.com/in/ryschoi/">LinkedIn</a>
            <p className="light-gray">•</p>
            <a
              className="gray green-hover"
              href="/images/Rebecca_Choi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
      <div className="flex gap-[0.5rem] md:gap-[1rem]">
        {photoColumns.map((column, i) => (
          <div key={i} className="flex flex-col gap-[0.5rem] md:gap-[1rem] flex-1 min-w-0">
            {column.map((key) => (
              <Photo key={key} photo={photos[key]} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
