import { useState } from "react";
import { projects } from "../database";
import "../index.css";
import "../navigation/nav.css";
import "./work.css";
import WorkCard from "./work-card";
import Tag from "../components/tag";

export default function Work() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(
    new Set(projects
      .filter((proj) => proj.active === true)
      .flatMap((proj) => proj.tags))
  );

  const filteredProjects = projects.filter((proj) => {
    const isActive = proj.active === true;
    const hasTag = selectedTag ? proj.tags.includes(selectedTag) : true;
    return isActive && hasTag;
  });

  return (
    <div>
      {/* GREETING */}
      <div className="flex flex-col mt-[10rem] mb-[14rem] items-center">
        <h2 className="text-red-500 text-center w-[39rem] max-w-[80vw]">
          <span className="gray">Hi, I'm Rebecca. 🌚<br /></span>A designer and developer who is using tech, design, and data to create intentionally and meaningfully.
        </h2>
      </div>

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

      {/* WORK CARDS */}
      <div className="flex flex-col gap-[4rem]">
        {filteredProjects
          .map((proj) => (
            <WorkCard key={proj.id} project={proj} />
          ))}
      </div>

      {/* <div className="flex flex-col gap-[4rem]">
        {projects
          .filter((proj) => proj.active === true)
          .map((proj) => (
            <WorkCard project={proj} />
          ))}
      </div> */}
    </div >
  );
}
