import { useState } from "react";

// One step of the carousel: a stage name and sentence above a box, with a caption under
// it. The box is an empty placeholder until the step has a `src` (and `alt`).
export type Safeguard = {
  stage: string;
  text: string;
  caption: string;
  src?: string;
  alt?: string;
};

// Manual carousel for the safeguards: the active step's counter and stage name, its
// sentence, box and caption, with prev/next arrows.
// Every step's sentence and box share one grid cell and fade between each other, so the
// carousel is always as tall as its tallest step and nothing below it jumps.
export default function SafeguardCarousel({
  safeguards,
}: {
  safeguards: Safeguard[];
}) {
  const [active, setActive] = useState(0);
  const last = safeguards.length - 1;
  const fade = (i: number) =>
    `[grid-area:1/1] transition-opacity duration-300 ${
      i === active ? "opacity-100" : "opacity-0 pointer-events-none"
    }`;

  return (
    <div className="flex flex-col">
      <div className="grid">
        {safeguards.map((safeguard, i) => (
          <p
            key={safeguard.stage}
            className={`flex items-baseline gap-[0.6rem] ${fade(i)}`}
            aria-hidden={i !== active}
          >
            <span className="gray">
              {i + 1}/{safeguards.length}
            </span>
            <span className="font-[400] gray">{safeguard.stage}</span>
          </p>
        ))}
      </div>

      <div className="grid mt-[0.5rem]">
        {safeguards.map((safeguard, i) => (
          <p
            key={safeguard.stage}
            className={`dark-gray ${fade(i)}`}
            aria-hidden={i !== active}
          >
            {safeguard.text}
          </p>
        ))}
      </div>

      <div className="grid">
        {safeguards.map((safeguard, i) => (
          <div
            key={safeguard.stage}
            className={`round img-bg w-full overflow-hidden ${fade(i)}`}
            aria-hidden={i !== active}
          >
            {safeguard.src ? (
              <img
                src={safeguard.src}
                alt={safeguard.alt ?? ""}
                className="w-full"
              />
            ) : (
              // Same size as the Overview boxes: 1.5rem padding around a 2000×570 frame.
              <div className="p-[1.5rem]">
                <div className="w-full aspect-[2000/570]" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-[0.6rem]">
        <p className="sp gray">{safeguards[active].caption}</p>
        <div className="flex gap-[0.25rem] mr-[-0.5rem]">
          <button
            type="button"
            onClick={() => setActive((a) => Math.max(0, a - 1))}
            disabled={active === 0}
            aria-label="Previous safeguard"
            className="crossfade-toggle disabled:opacity-30 disabled:pointer-events-none"
          >
            <svg
              viewBox="0 0 16 16"
              width="15"
              height="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M10 3 5 8l5 5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setActive((a) => Math.min(last, a + 1))}
            disabled={active === last}
            aria-label="Next safeguard"
            className="crossfade-toggle disabled:opacity-30 disabled:pointer-events-none"
          >
            <svg
              viewBox="0 0 16 16"
              width="15"
              height="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m6 3 5 5-5 5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
