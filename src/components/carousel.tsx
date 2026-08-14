import { useRef } from "react";

export default function Carousel({ children }: { children: React.ReactNode }) {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const setSpeed = (rate: number) => {
        wrapperRef.current?.getAnimations().forEach((animation) => {
            animation.playbackRate = rate;
        });
    };

    return (
        <div
            className="carousel-container"
            onMouseEnter={() => setSpeed(0.3)}
            onMouseLeave={() => setSpeed(1)}
        >
            <div className="carousel-viewport">
                <div ref={wrapperRef} className="slides-wrapper">
                    {children}
                </div>
            </div>
        </div>
    );
}
