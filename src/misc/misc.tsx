import { misc } from "../database";
import MiscCard from "../components/misc-card";
import { useState } from "react";
import Tag from "components/tag";

export default function Misc() {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const allTags = Array.from(
        new Set(misc
            .filter((proj) => proj.active === true)
            .flatMap((proj) => proj.tags))
    );

    const filteredProjects = misc.filter((proj) => {
        const isActive = proj.active === true;
        const hasTag = selectedTag ? proj.tags.includes(selectedTag) : true;
        return isActive && hasTag;
    });

    return (
        <div className="flex flex-col place-content-center items-center gap-[2rem]">
            <div className="flex flex-col gap-[1rem]">
                {/* TITLE */}
                <h2>Miscellaneous work from over the years</h2>

                {/* FILTERS */}
                <div className="flex flex-wrap gap-[0.5rem] mb-[2rem]">
                    {allTags.map((tag) => {
                        const isSelected = selectedTag === tag;

                        return (
                            <div
                                key={tag}
                                onClick={() => setSelectedTag((prev) => (prev === tag ? null : tag))}>
                                <Tag text={tag} hover={true} clicked={isSelected} />
                            </div>
                        );
                    })}
                    <button onClick={() => setSelectedTag(null)} id="clear-filters" className="gray underline">
                        Clear filters
                    </button>
                </div>
            </div>

            {/* CARDS */}
            <div
                className="grid gap-[2rem] w-full"
                style={{
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 30rem), 1fr))',
                }}
            >
                {filteredProjects
                    .map((proj) => (
                        <MiscCard project={proj} />
                    ))}
            </div>
        </div>
    );
}