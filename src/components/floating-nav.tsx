import { section } from "../projects/section";
import { useEffect, useState } from "react";

export default function FloatingNav({ sections }: { sections: section[] }) {
    const handleScroll = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top, behavior: "smooth" });
    };

    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sections]);

    return (
        <div className="floating-nav group hidden md:block">
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => handleScroll(section.id)}
                    className={`nav-dot ${section.id === activeSection ? "active" : ""}`}
                >
                    <span className="dot" />
                    <span className="label caption">{section.header}</span>
                </button>
            ))}
        </div>
    );
}