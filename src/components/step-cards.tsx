import { useEffect, useRef, useState } from "react";
import CardNav from "./card-nav";

export interface Step {
    icon: string;
    title?: string;
    description: string;
}

interface StepCardsProps {
    steps: Step[];
}

export default function StepCards({ steps }: StepCardsProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const settleTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    // True while a click-triggered smooth scroll is in flight, so handleScroll
    // doesn't briefly report an intermediate card mid-animation and flicker
    // the last button's icon before it settles on the real destination.
    const navigating = useRef(false);
    const [index, setIndex] = useState(0);

    useEffect(() => () => clearTimeout(settleTimeout.current), []);

    // Scroll target for card `i`: first flush against the container's left
    // edge, last flush against the right edge, and everything in between
    // centered in the viewport (mirrors Background's ContentCard/CardNav
    // treatment).
    const snapLeft = (container: HTMLDivElement, i: number) => {
        const card = container.children[i] as HTMLElement;
        const cardRect = card.getBoundingClientRect();
        const view = container.getBoundingClientRect();
        if (i === 0) {
            return Math.max(0, container.scrollLeft + (cardRect.left - view.left));
        }
        if (i === container.children.length - 1) {
            return Math.max(0, container.scrollLeft + (cardRect.right - view.right));
        }
        const cardCenter = cardRect.left + card.offsetWidth / 2;
        const viewCenter = view.left + container.clientWidth / 2;
        return Math.max(0, container.scrollLeft + (cardCenter - viewCenter));
    };

    const focusCard = (i: number) => {
        setIndex(i);
        const container = containerRef.current;
        if (!container) return;
        navigating.current = true;
        container.scrollTo({ left: snapLeft(container, i), behavior: "smooth" });
        const stopNavigating = () => { navigating.current = false; };
        container.addEventListener("scrollend", stopNavigating, { once: true });
        // Fallback for browsers without `scrollend` support, so the flag can't get stuck.
        setTimeout(stopNavigating, 600);
    };

    // Keep `index` in sync when the user swipes/scrolls the track directly
    // instead of using the arrow or dots, and — since we don't rely on CSS
    // scroll-snap (it would snap flush instead of centering) — settle on the
    // nearest card's exact centered position once scrolling stops.
    const handleScroll = () => {
        // While a focusCard()-triggered scroll is animating, `index` is already
        // correct - skip recomputing it from the in-between scroll position.
        if (navigating.current) return;
        const container = containerRef.current;
        if (!container) return;
        let nearest = 0;
        let min = Infinity;
        Array.from(container.children).forEach((_, i) => {
            const d = Math.abs(snapLeft(container, i) - container.scrollLeft);
            if (d < min) {
                min = d;
                nearest = i;
            }
        });
        setIndex(nearest);

        clearTimeout(settleTimeout.current);
        settleTimeout.current = setTimeout(() => {
            const c = containerRef.current;
            if (!c) return;
            const target = snapLeft(c, nearest);
            if (Math.abs(c.scrollLeft - target) > 1) {
                c.scrollTo({ left: target, behavior: "smooth" });
            }
        }, 120);
    };

    const next = () => focusCard((index + 1) % steps.length);
    const isLast = index === steps.length - 1;

    return (
        <div className="flex flex-col gap-[1.25rem] w-full">
            <div className="relative">
                <div
                    ref={containerRef}
                    onScroll={handleScroll}
                    className="flex gap-[1rem] w-full overflow-x-auto no-scrollbar"
                >
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            onClick={i === index ? undefined : () => focusCard(i)}
                            className={`shrink-0 w-[calc(100%-4rem)] max-w-[21rem] aspect-[3/4] rounded-[1.5rem] border border-white/40 img-bg backdrop-blur-md overflow-hidden transition-opacity duration-300 [&_img]:transition-[filter] [&_img]:duration-300 ${i === index ? "opacity-100" : "opacity-50 cursor-pointer [&_img]:grayscale"
                                }`}
                        >
                            <div className="flex flex-col h-full p-[2rem]">
                                <img src={step.icon} className="w-[12rem] aspect-square mx-auto mt-[1rem] mb-auto dark:invert" alt="" />
                                <div className="flex flex-col gap-[0.25rem] h-1/3">
                                    {step.title && <h4 className="">{step.title}</h4>}
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={next}
                    aria-label={isLast ? "Restart from the first step" : "Next step"}
                    className="absolute right-[1rem] top-1/2 -translate-y-1/2 flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-full border border-white/40 img-bg backdrop-blur-md cursor-pointer hover:opacity-80 transition-opacity"
                >
                    {isLast ? (
                        <svg width="12" height="16.2" viewBox="0 0 172.461 232.715" fill="currentColor">
                            <path d="M86.2305 209.766C133.887 209.766 172.461 171.191 172.461 123.535C172.461 75.8789 133.887 37.3047 86.2305 37.3047C75.8789 37.3047 65.8203 39.1602 56.8359 42.5781C54.1992 43.5547 50.4883 45.4102 50.5859 50.3906C50.6836 56.4453 56.6406 59.2773 61.6211 57.3242C69.3359 54.4922 77.6367 52.9297 86.2305 52.9297C125.195 52.9297 156.738 84.4727 156.738 123.438C156.738 162.402 125.195 193.945 86.2305 193.945C47.2656 193.945 15.7227 162.402 15.7227 123.438C15.7227 119.141 12.207 115.625 7.8125 115.625C3.51562 115.625 0 119.141 0 123.438C0 171.191 38.5742 209.766 86.2305 209.766ZM59.7656 49.0234L95.4102 13.6719C96.875 12.207 97.5586 10.0586 97.5586 8.00781C97.5586 3.61328 94.2383 0 89.8438 0C87.5 0 85.6445 0.976562 84.1797 2.44141L43.9453 43.2617C42.3828 44.8242 41.5039 46.9727 41.5039 49.1211C41.5039 51.2695 42.1875 53.2227 43.9453 54.9805L84.1797 95.4102C85.6445 96.7773 87.4023 97.6562 89.8438 97.6562C94.2383 97.6562 97.5586 94.2383 97.5586 89.7461C97.5586 87.6953 96.875 85.7422 95.3125 84.2773Z" />
                        </svg>
                    ) : (
                        <svg className="-rotate-90" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
                </button>
            </div>

            <CardNav
                labels={steps.map((step, i) => step.title ?? `Step ${i + 1}`)}
                active={index}
                onSelect={focusCard}
                inline
                showLabels={false}
            />
            {/* <p className="caption">Step {index + 1} of {steps.length}</p> */}
        </div>
    );
}
