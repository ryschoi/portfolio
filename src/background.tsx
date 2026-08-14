import { useEffect, useRef, useState } from "react";
import ContentCard from "./components/content-card";
import CardNav from "./components/card-nav";

// Non-first cards land slightly left of center by this many px (desktop only).
const SHIFT = 48;
// Mobile: how much of the previous card peeks above the focused card.
const PEEK = 96;

// Below the `md` breakpoint the cards flow in the page and the window scrolls
// vertically; at/above `md` they live in a horizontal scroll container.
const isVertical = () =>
    typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;

export default function Background() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(0);
    // Hide the progress indicator once the cards are scrolled out of view.
    const [navVisible, setNavVisible] = useState(true);

    // Desktop horizontal scroll target for card `i`: first at the left edge, last
    // at the right edge, others just left of center. Measured via bounding rects
    // so it's independent of the container's offset parent.
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
        return Math.max(0, container.scrollLeft + (cardCenter - viewCenter) + SHIFT);
    };

    const focusCard = (i: number) => {
        setActive(i);
        const container = containerRef.current;
        if (!container) return;
        const card = container.children[i] as HTMLElement;
        if (isVertical()) {
            // Window is the scroller on mobile — bring the card top just below the top.
            const y = card.getBoundingClientRect().top + window.scrollY - PEEK;
            window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
        } else {
            container.scrollTo({ left: snapLeft(container, i), behavior: "smooth" });
        }
    };

    // Desktop: keep `active` in sync when the user scrolls the horizontal track.
    const handleScroll = () => {
        if (isVertical()) return;
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
        setActive(nearest);
    };

    // Mobile: the window scrolls, so track the card nearest the top of the viewport
    // and enable page-level scroll snapping only while the mobile layout is active.
    useEffect(() => {
        const html = document.documentElement;
        const mql = window.matchMedia("(max-width: 767px)");
        const snapClasses = ["snap-y", "snap-proximity", "scroll-pt-24"];

        const onScroll = () => {
            const container = containerRef.current;
            if (!container || !mql.matches) return;
            let nearest = 0;
            let min = Infinity;
            Array.from(container.children).forEach((child, i) => {
                const d = Math.abs((child as HTMLElement).getBoundingClientRect().top - PEEK);
                if (d < min) {
                    min = d;
                    nearest = i;
                }
            });
            setActive(nearest);
        };

        const applySnap = () => {
            if (mql.matches) html.classList.add(...snapClasses);
            else html.classList.remove(...snapClasses);
        };

        applySnap();
        window.addEventListener("scroll", onScroll, { passive: true });
        mql.addEventListener("change", applySnap);
        return () => {
            window.removeEventListener("scroll", onScroll);
            mql.removeEventListener("change", applySnap);
            html.classList.remove(...snapClasses);
        };
    }, []);

    // Hide the indicator once the footer starts to come into view.
    useEffect(() => {
        const footer = document.getElementById("footer");
        if (!footer) return;
        const observer = new IntersectionObserver(
            ([entry]) => setNavVisible(!entry.isIntersecting),
            { threshold: 0 }
        );
        observer.observe(footer);
        return () => observer.disconnect();
    }, []);

    const navLabels = [
        "[2018] Learned to code",
        "[2021] Design ≠ art ??",
        "[2023] Designing experiences",
        "[2026] AI meets designing",
    ];

    const sections = [
        <div className="thing" key="code">
            <img src="/images/icons/code_icon.png" className="w-[4rem] mb-[1rem] aspect-square" />
            <h3 className="serif font-[700]">[2018] Learned to code</h3>
            <p className="">I first learned to code in middle school, at a summer web development bootcamp. I fell in love with the freedom to code whatever I wanted, but quickly realized that freedom came with many decisions surrounding usability and intent: <span className="italic">What exactly was I to code?</span> This is when I discovered the importance of design.</p>
        </div>,
        <div className="thing" key="design">
            <img src="/images/icons/shapes_icon.png" className="w-[4rem] mb-[1rem] aspect-square" />
            <h3 className="serif font-[700]">[2021] Design ≠ art ??</h3>
            <p>In junior year of high school, I went into my first graphic design class thinking that design was just about making things look aesthetic. That understanding was quickly shaken when I was continually challenged to think about how other people might interpret my designs, and if they clearly communicated the intended message. This kickstarted my practice of being intentional with each design detail I made.</p>
        </div>,
        <div className="thing" key="data">
            <img src="/images/icons/design_icon.png" className="w-[4rem] mb-[1rem] aspect-square" />
            <h3 className="serif font-[700]">[2023] Designing experiences</h3>
            <p>In college, I started UI/UX design, expanding my focus from static visual
                communication to interactive digital experiences.
                I enjoy designing digital products because of the challenge of
                finding solutions that balance the many constraints: business goals,
                user needs, technical limitations, aesthetics, time, etc. It keeps things exciting!
                <br /><br />
                <span className="caption gray">Key aspects of my design approach:</span>
                <ul className="mt-[0.5rem]">
                    <li>Being <span className="bold">curious and asking lots of questions</span> (about the problem, about the visual language, and about the products that I use and think work really well, etc.). <span className="italic">
                        What might the user be feeling when first opening this tool? Which microinteractions are
                        making the experience feel more seamless?</span></li>
                    <li><span className="bold">Sorting through vague problem spaces</span> and <span className="bold">using research</span> to hone in on concrete and effective solutions</li>
                    <li>Paying <span className="bold">close attention to every detail</span> for visual craft and a seamless user experience</li>
                </ul>
            </p>
        </div>,
        <div className="thing" key="ai">
            <img src="/images/icons/ai_icon2.png" className="w-[4rem] mb-[1rem] aspect-square" />
            <h3 className="serif font-[700]">[2025] AI meets design</h3>
            <p>With AI, I combine my designs and coding background to create something greater than the sum of their parts!
                <br /><br />
                In my experience of using AI to prototype an interaction or implement my designs, I found that so much of "successfully using AI" to move from design to implementation comes from knowing how to describe what you want. 
                I'm currently exploring how to create better approaches and tools to help AI more accurately implement designs and to make it easier for even non-coders to be able to describe how the product should look and behave.
            </p>
        </div>,
    ];

    const next = () => focusCard((active + 1) % sections.length);
    const isLast = active === sections.length - 1;

    return (
        <div className="flex justify-center w-full">
            <div className="flex flex-col gap-[1.5rem] mod-mid-w">
                <h1 className="md:w-9.5/10 w-9/10 mob-mid-w serif">From code, to design, to code + design</h1>
                <div className="relative w-full">
                    <div
                        ref={containerRef}
                        onScroll={handleScroll}
                        className="flex flex-col items-center gap-[1rem] w-full min-w-0 no-scrollbar md:flex-row md:items-start md:overflow-x-auto md:snap-x md:snap-mandatory"
                    >
                        {sections.map((content, i) => (
                            <ContentCard
                                key={i}
                                active={i === active}
                                first={i === 0}
                                last={i === sections.length - 1}
                                onClick={i === active ? undefined : () => focusCard(i)}
                            >
                                {content}
                            </ContentCard>
                        ))}
                    </div>

                    <button
                        onClick={next}
                        aria-label={isLast ? "Restart from the first section" : "Next section"}
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
                <CardNav labels={navLabels} active={active} onSelect={focusCard} visible={navVisible} />
            </div>
        </div>
    );
}
