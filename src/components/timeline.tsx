import { useState } from "react";

export interface TimelineMilestone {
    label?: string;
    text: string;
}

interface TimelineProps {
    milestones: TimelineMilestone[];
    classes?: string;
}

export default function Timeline({ milestones, classes }: TimelineProps) {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className={`relative flex items-center justify-between w-full ${classes || ""}`}>
            <div className="absolute left-0 right-0 border-t-[1.5px] border-dashed border-[var(--light-gray)]" />
            {milestones.map((milestone, index) => (
                <div key={index} className="relative flex flex-col items-center gap-[0.75rem] z-10">
                    <button
                        className={`w-[8px] h-[8px] rounded-full transition-all duration-200 cursor-pointer bg-[var(--light-gray)] ${hovered === index ? "outline outline-2 outline-dashed outline-offset-2 outline-[var(--color-green)]" : ""}`}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                        onFocus={() => setHovered(index)}
                        onBlur={() => setHovered(null)}
                        aria-label={milestone.label ?? milestone.text}
                    >
                        {hovered === index && (
                            <p className="timeline-tooltip gray">{milestone.text}</p>
                        )}
                    </button>
                    {milestone.label && <p className="caption gray whitespace-nowrap">{milestone.label}</p>}
                </div>
            ))}
        </div>
    );
}
