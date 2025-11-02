import { useState } from "react";
import { projects } from "../database";
import "../index.css";
import "../navigation/nav.css";
import "./work.css";
import WorkCard from "./work-card";
import Tag from "../components/tag";
import { Link } from "react-router";
import ProjectHeader from "components/project-header";

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
      <div className="flex flex-col mt-[9rem] mb-[13rem] items-center">
        {/* OLD HEADER (CENTERED TEXT) mt-9rem, mb-13rem */}
        {/* <h1 className="text-red-500 text-center w-[39rem] max-w-[80vw]">
          <span className="gray">Hi, I'm Rebecca.<br /></span>A designer and developer who is using tech, design, and data to create intentionally and meaningfully.
        </h1> */}
        {/* NEW HEADER BELOW */}
        <div className="w-[39rem] max-w-[80vw] flex flex-col gap-[4vh]">
          <h1>Hi, I'm Rebecca.<br /><span className="gray">A designer and developer who is using tech, design, and data to create intentionally and meaningfully.</span></h1>

          <div className="flex flex-row gap-[0.5rem]">
            <Link key='/' to='/background' className=""><Tag text="Read about my work background" hover={true} clicked={false} /></Link>
            {/* <Link key='/' to='/about' className=""><Tag text="Learn about me" hover={true} clicked={false} /></Link> */}
            <Link key='/' to='/about#contacts' className=""><button className="work-tag">Contact me</button></Link>
          </div>
        </div>
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
