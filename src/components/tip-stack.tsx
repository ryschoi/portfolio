import { useState, type CSSProperties } from "react";

export interface TipGroup {
    header: string;
    description: string;
    tips: string[];
}

interface TipStackProps {
    groups: TipGroup[];
    scale?: number;
    cardScale?: number;
    seed?: number;
}

// Base card width (px) before scaling; height is derived from the tip
// images' own aspect ratio so they never look stretched.
const BASE_CARD_WIDTH = 555;
const IMAGE_ASPECT = 570 / 1644;

// Cards beyond this depth from the front render at the same offset as the
// deepest visible one, so the pile always just reads as "a stack of cards"
// (a couple peeking out behind the front one) instead of growing with however
// many tips there are.
const MAX_VISIBLE_DEPTH = 2;

const PILE_MAX_ROTATE = 3; // deg
const PILE_MAX_OFFSET = 4; // px
// Guaranteed minimum per-card separation in the pile, on top of the random
// jitter below - without this, independent random draws can occasionally
// land close together and nearly hide the card(s) underneath.
const PILE_BASE_STEP = 5; // px, per card depth
const PILE_BASE_ROTATE_STEP = 2; // deg, per card depth

// Worst-case magnitude a card can be pushed from center, so the reserved box
// around the pile always fully contains it regardless of tip count.
const MAX_PILE_REACH = MAX_VISIBLE_DEPTH * PILE_BASE_STEP + PILE_MAX_OFFSET;

// Deterministic pseudo-random in [0, 1), seeded by index so the "random"
// pile look is stable across renders instead of reshuffling every time.
function seededRandom(seed: number) {
    const x = Math.sin(seed * 12.9898) * 43758.5453;
    return x - Math.floor(x);
}

// Which group a flattened tip index falls into, so the header/description
// shown below the stack can track whichever tip is currently on top.
function groupIndexForTip(groups: TipGroup[], flatIndex: number) {
    let cursor = 0;
    for (let g = 0; g < groups.length; g++) {
        cursor += groups[g].tips.length;
        if (flatIndex < cursor) return g;
    }
    return groups.length - 1;
}

function ShuffleIcon() {
    return (
        <svg width="16" height="13.4" viewBox="0 0 238.308 199.316" fill="currentColor" stroke="currentColor" strokeWidth="6" strokeLinejoin="round">
            <path d="M6.94677 83.3984C-0.0844799 83.3984-1.84229 88.0859 1.9663 93.5547L23.8413 124.609C27.064 129.199 31.7515 129.102 34.8765 124.609L56.7515 93.457C60.4624 88.0859 58.7046 83.3984 51.771 83.3984ZM119.154 16.6016C143.568 16.6016 165.541 27.0508 180.775 43.9453C184.876 48.3398 189.076 48.1445 192.201 45.8008C195.912 43.2617 197.279 37.5 193.275 33.1055C175.013 12.6953 148.451 0 119.154 0C64.1733 0 19.6421 44.5312 19.5444 99.707C19.6421 104.199 23.2554 107.812 27.7476 107.812C32.3374 107.812 36.146 104.102 36.146 99.6094C36.146 53.7109 73.2554 16.6016 119.154 16.6016ZM231.361 115.82C238.294 115.82 240.15 111.035 236.341 105.664L214.466 74.5117C211.244 70.0195 206.556 70.1172 203.431 74.5117L181.556 105.762C177.845 111.035 179.603 115.82 186.537 115.82ZM119.154 182.617C94.7397 182.617 72.7671 172.07 57.5327 155.176C53.4311 150.879 49.2319 151.074 46.1069 153.32C42.396 155.957 41.0288 161.621 45.0327 166.113C63.2944 186.523 89.8569 199.219 119.154 199.219C174.134 199.219 218.666 154.688 218.763 99.5117C218.666 95.0195 215.052 91.3086 210.56 91.3086C205.873 91.3086 202.162 95.1172 202.162 99.6094C202.162 145.508 165.052 182.617 119.154 182.617Z" />
        </svg>
    );
}

export default function TipStack({ groups, scale = 0.8, cardScale = scale, seed = 0 }: TipStackProps) {
    const [active, setActive] = useState(0);

    const tips = groups.flatMap((g) => g.tips);
    const activeGroup = groups[groupIndexForTip(groups, active)];
    // Sends the current front card to the back of the stack, revealing the next one.
    const shuffle = () => setActive((a) => (a + 1) % tips.length);

    const cardWidth = BASE_CARD_WIDTH * cardScale;
    const cardHeight = cardWidth * IMAGE_ASPECT;
    const maxReach = MAX_PILE_REACH * cardScale;

    // Spaced well clear of the internal 0-30 offsets below, so each
    // instance's "randomness" diverges instead of just shifting in step.
    const seedOffset = seed * 97;

    // Reserved box fits the piled look exactly - capped depth means this
    // never grows with tip count, so the pile can't bleed into the text below.
    const stackWidth = cardWidth + maxReach * 2;
    const stackHeight = cardHeight + maxReach * 2;

    // Card size as a percentage of the pile box, so on narrow viewports the
    // whole pile (and the peeking gap around it) shrinks fluidly together
    // instead of the fixed pixel card overflowing its container.
    const cardWidthPct = (cardWidth / stackWidth) * 100;
    const cardHeightPct = (cardHeight / stackHeight) * 100;
    // The front card sits centered in the reserved box, so this is (half of)
    // the gap between its edge and the box edge on each axis - i.e. exactly
    // where its bottom-right corner falls.
    const cardInsetXPct = (100 - cardWidthPct) / 2;
    const cardInsetYPct = (100 - cardHeightPct) / 2;

    const shuffleButton = (
        <button
            onClick={(e) => {
                // Stop the click from also bubbling to the stack's own
                // onClick below, which would otherwise double-advance.
                e.stopPropagation();
                shuffle();
            }}
            aria-label="Shuffle to next tip"
            className="absolute z-[9999] flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-full border border-white/40 img-bg backdrop-blur-md cursor-pointer hover:opacity-80 transition-opacity shrink-0"
            style={{
                right: `${cardInsetXPct}%`,
                bottom: `${cardInsetYPct}%`,
                transform: "translate(calc(50% + 6px), calc(50% + 6px))",
            }}
        >
            <ShuffleIcon />
        </button>
    );

    return (
        <div className="flex flex-col mt-[-2rem] gap-[1rem] w-slim items-start md:flex-row md:mt-[0rem] md:gap-[2.5rem]">
            <p
                className="cursor-default text-black w-full mt-[1.5rem] md:max-w-[var(--tip-caption-w)] leading-[1.55]"
                style={{ "--tip-caption-w": `${420 * scale}px` } as CSSProperties}
            >
                <span className="ps-size font-[600]">{activeGroup.header}</span>
                <br />
                <span className="ps-size gray">{activeGroup.description}</span>
            </p>
            <div className="flex flex-col items-center gap-[2rem] w-full mt-[0.8rem]">
                {/* Cards stay piled on every breakpoint - click the stack or the
                shuffle button to send the front card to the back and reveal
                the next one. */}
                <div
                    className="relative cursor-pointer w-full"
                    onClick={shuffle}
                    style={{ maxWidth: stackWidth, aspectRatio: `${stackWidth} / ${stackHeight}` }}
                >
                    {tips.map((tip, index) => {
                        // Depth from the active card (0 = front of the pile), clamped so
                        // cards beyond MAX_VISIBLE_DEPTH sit exactly behind the deepest
                        // visible one instead of fanning further out.
                        const rawDepth = (index - active + tips.length) % tips.length;
                        const depth = Math.min(rawDepth, MAX_VISIBLE_DEPTH);
                        const pileBaseSign = depth % 2 === 0 ? 1 : -1;
                        const rotate = depth * PILE_BASE_ROTATE_STEP * pileBaseSign + (seededRandom(index + seedOffset) - 0.5) * 2 * PILE_MAX_ROTATE;
                        const x = depth * PILE_BASE_STEP + (seededRandom(index + 10 + seedOffset) - 0.5) * 2 * PILE_MAX_OFFSET;
                        const y = depth * PILE_BASE_STEP + (seededRandom(index + 20 + seedOffset) - 0.5) * 2 * PILE_MAX_OFFSET;

                        return (
                            <div
                                key={index}
                                className="absolute left-1/2 top-1/2 transition-transform duration-[400ms] ease-in-out"
                                style={{
                                    width: `${cardWidthPct}%`,
                                    aspectRatio: `${cardWidth} / ${cardHeight}`,
                                    borderRadius: 42 * cardScale,
                                    zIndex: tips.length - rawDepth,
                                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rotate}deg)`,
                                    boxShadow: "0 8px 18px rgba(0, 0, 0, 0.1)",
                                }}
                            >
                                <div className="w-full h-full overflow-hidden" style={{ borderRadius: 42 * cardScale }}>
                                    <img src={tip} alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        );
                    })}
                    {shuffleButton}
                </div>
            </div>
        </div>
    );
}
