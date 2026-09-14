interface GenieWindowProps {
    /** The illustration behind the window — figures only, with the window removed. */
    backdrop: string;
}

/**
 * A hand-drawn window unfurling out of a point, like a Dock minimise played in
 * reverse.
 *
 * The window lives inline as SVG rather than in a linked file, because CSS can
 * only reach into an inline document — an <img src="window.svg"> is opaque to
 * the animation. To drop in a real export, replace the `d` on WINDOW_PATH and
 * the dot positions below, keeping the 2048 viewBox so Figma coordinates carry
 * over unchanged.
 */

// PLACEHOLDER — a rough stand-in for the wobbly window in the illustration.
// Swap for the exported path.
const WINDOW_PATH =
    "M 385 560 Q 380 505 442 500 L 1238 481 Q 1300 478 1361 490 L 1428 501 Q 1469 508 1467 561 L 1471 1292 L 361 1301 Z";
const DOTS = [
    { cx: 432, cy: 601 },
    { cx: 490, cy: 596 },
    { cx: 545, cy: 591 },
];

export default function GenieWindow({ backdrop }: GenieWindowProps) {
    return (
        <div className="relative w-full h-full">
            <svg
                viewBox="0 0 2048 2048"
                className="absolute inset-0 w-full h-full"
                aria-hidden="true"
            >
                {/* One group so the outline and its dots unfurl together. */}
                <g className="genie-out" fill="none" stroke="currentColor" strokeWidth="9">
                    <path
                        d={WINDOW_PATH}
                        vectorEffect="non-scaling-stroke"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    {DOTS.map((dot) => (
                        <circle key={dot.cx} cx={dot.cx} cy={dot.cy} r="17" fill="currentColor" />
                    ))}
                </g>
            </svg>
            {/* Figures sit above, so the window reads as emerging from behind them. */}
            <img src={backdrop} className="relative w-full h-full object-contain" alt="" />
        </div>
    );
}
