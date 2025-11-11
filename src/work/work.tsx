import { useState, useEffect } from "react";
import { projects } from "../database";
import "../index.css";
import "../navigation/nav.css";
import "./work.css";
import WorkCard from "./work-card";
import Tag from "../components/tag";
import { Link, useLocation } from "react-router";
import HoverButton from "components/hover-button";

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
    <div className="flex flex-col">
      {/* GREETING */}
      <div className="flex flex-wrap gap-[3rem] items-start mt-[9rem] mb-[13rem] self-center">
        <img src="images/notion_face.png" className="w-[8rem] object-contain" />
        <div className="flex flex-col">
          {/* OLD HEADER (CENTERED TEXT) mt-9rem, mb-13rem */}
          {/* <h1 className="text-red-500 text-center w-[39rem] max-w-[80vw]">
            <span className="gray">Hi, I'm Rebecca.<br /></span>A designer and developer who is using tech, design, and data to create intentionally and meaningfully.
          </h1> */}
          {/* NEW HEADER BELOW */}
          <div className="w-[39rem] max-w-[80vw] flex flex-col gap-[3vh]">
            <h1>Hi, I'm Rebecca.<br />
              <span className="gray">A designer and developer who is using tech, design, and data to create intentionally and meaningfully.</span>
            </h1>
            <div className="flex flex-wrap gap-[0.5rem]">
              <HoverButton path="/background" text="Read about my work background" hoverText="What are my design principles? Why CS & Design? How did I get here??" />
              <HoverButton path="/about#contacts" text="Contact me" hoverText="Email, phone, LinkedIn..." />
            </div>
          </div>
        </div>
      </div>

      {/* FILTERS */}
      <div className="flex flex-wrap gap-[0.5rem] mb-[1.5rem]" id="">
        {allTags.map((tag) => {
          const isSelected = selectedTag === tag;
          const count = projects.filter((p) => p.active === true && p.tags.includes(tag)).length;

          return (
            <div
              key={tag}
              onClick={() => setSelectedTag((prev) => (prev === tag ? null : tag))}
              className="flex items-center gap-[0.5rem]">
              <Tag hover={true} clicked={isSelected}>
                {tag} <span className="gray text-[0.85rem]">{count}</span>
              </Tag>
            </div>
          );
        })}
        <button onClick={() => setSelectedTag(null)} id="clear-filters" className="gray underline">Clear filters</button>
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
