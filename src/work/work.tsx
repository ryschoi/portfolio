import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { projects } from "../database";
import "../index.css";
import "./work.css";
import WorkCard from "./work-card";
import Tag from "../components/tag";
import HoverButton from "components/hover-button";

export default function Work() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "filters") {
      const section = document.getElementById("filters");
      if (section) {
        const offset = 64;
        const y =
          section.getBoundingClientRect().top +
          window.pageYOffset -
          offset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location.state]);

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
    <div className="flex flex-col">
      {/* GREETING */}
      <div className="flex flex-wrap gap-[2.5rem] items-start mt-[7.5rem] mb-[12rem] self-center">
        <img src="images/website-assets/notion_face.png" className="mt-[1.5rem] w-[8rem] object-contain" />
        <div className="w-[42rem] mx-[1rem] max-w-[80vw] flex flex-col gap-[1.5rem]">
          <p className="green caption tracking-[-0.25px] mb-[-0.5rem]">● Incoming @ Apple, summer 2026  |  seeking fall 2026 co-op opportunity</p>
          <div className="flex flex-col gap-[0.25rem]">
            <h1 className="tracking-[-0.3px]">Hi, I'm Rebecca.</h1>
            <h3 className="tracking-[-0.2px] gray">A developer-turned designer shaping digital experiences with clarity and craft.
            </h3>
          </div>
          <div className="flex flex-wrap gap-[0.5rem] mt-[-0.5rem]">
            <HoverButton path="/background" buttonText="Read about my work background" hoverText="What are my design principles? Why tech + design? How did I get here??" />
            <HoverButton path="/about#contacts" buttonText="Contact me" hoverText="Email, phone, LinkedIn..." />
          </div>
        </div>
      </div>

      {/* FILTERS */}
      <div className="flex flex-wrap gap-[0.5rem] mb-[1.5rem]" id="filters">
        {allTags.map((tag) => {
          const isSelected = selectedTag === tag;
          const count = projects.filter((p) => p.active === true && p.tags.includes(tag)).length;

          return (
            <div
              key={tag}
              onClick={() => setSelectedTag((prev) => (prev === tag ? null : tag))}
              className="flex items-center gap-[0.5rem]">
              <Tag hover={true} clicked={isSelected}>
                {tag} <span className={`text-[0.85rem] ${isSelected ? "light-gray" : "gray"}`}>{count}</span>
              </Tag>
            </div>
          );
        })}
        <button onClick={() => setSelectedTag(null)} id="clear-filters" className="gray hover-underline">Clear filters</button>
      </div>

      {/* WORK CARDS */}
      <div className="flex flex-col gap-[4rem]">
        {filteredProjects
          .map((proj) => (
            <WorkCard key={proj.id} project={proj} />
          ))}
      </div>

      {/* SEE MORE */}
      {/* <Link className="self-center mt-[6rem] gray" to={"../misc"}>
        <p className="gray inline">See more</p>
        <div className="inline mx-[0.5rem]">
          {selectedTag === null ? (
            <p className="inline gray">misc</p>
          ) : (
            allTags
              .filter((tag) => tag === selectedTag)
              .map((tag) => {
                const isSelected = selectedTag === tag;
                return (
                  <Tag key={tag} text={tag} hover={true} clicked={isSelected} />
                );
              })
          )}
        </div>
        <p className="gray inline">work →</p>
      </Link> */}
    </div >
  );
}
