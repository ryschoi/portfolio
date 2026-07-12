import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { projects } from "../database";
import "../index.css";
import "./work.css";
import WorkCard from "./work-card";
import Pill from "../components/pill";

export default function Work() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "filters") {
      const section = document.getElementById("filters");
      if (section) {
        const offset = 64;
        const y =
          section.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location.state]);

  // Enable scroll-snapping on the page (only while Work is mounted) so scrolling
  // down from the top settles on the filters. `proximity` keeps it from trapping
  // the scroll once you're past the filters into the work cards.
  useEffect(() => {
    const html = document.documentElement;
    const prevBehavior = html.style.scrollBehavior;
    html.classList.add("snap-y", "snap-proximity");
    html.style.scrollBehavior = "smooth";
    return () => {
      html.classList.remove("snap-y", "snap-proximity");
      html.style.scrollBehavior = prevBehavior;
    };
  }, []);

  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(
    new Set(
      projects
        .filter((proj) => proj.active === true)
        .flatMap((proj) => proj.tags)
    )
  );

  const filteredProjects = projects.filter((proj) => {
    const isActive = proj.active === true;
    const hasTag = selectedTag ? proj.tags.includes(selectedTag) : true;
    return isActive && hasTag;
  });

  return (
    <div className="flex flex-col">
      {/* GREETING */}
      <div className="flex gap-[2.75rem] items-center mt-[7.5rem] mb-[12rem] self-center">
        <img
          className="hidden md:block w-[8rem] object-contain"
          src="images/website-assets/notion_face.png"
        />
        <div className="w-slim md:w-[42rem] flex flex-col gap-[2rem] md:gap-[1.75rem]">
          <p className="green caption tracking-[-0.25px] mb-[-0.75rem]"><span className="live-pulse caption green">●</span> Design Intern @ Apple, cs & Design @ Northeastern</p>
          <h1 className="nanum leading-[1.3]">Hi, I'm Rebecca, a designer blending thorough product thinking with visual craft</h1>
          <div className="flex flex-wrap gap-[0.5rem] mt-[-0.5rem]">
            <Pill
              hover={true}
              clicked={false}
              path="/background"
              tooltip="What are my design principles? Why tech + design? How did I get here??"
            >
              <span className="hidden md:inline">Read about my work background</span>
              <span className="md:hidden">Work background</span>
            </Pill>
            <Pill
              hover={true}
              clicked={false}
              path="/about#contacts"
              text="Contact me"
              tooltip="Email, phone, LinkedIn..."
            />
          </div>
        </div>
      </div>
      {/* FILTERS */}
      <div className="flex flex-wrap gap-[0.5rem] mb-[1.5rem] snap-start scroll-mt-[6rem]" id="filters">
        {allTags.map((tag) => {
          const isSelected = selectedTag === tag;
          const count = projects.filter(
            (p) => p.active === true && p.tags.includes(tag)
          ).length;

          return (
            <div
              key={tag}
              onClick={() =>
                setSelectedTag((prev) => (prev === tag ? null : tag))
              }
              className="flex items-center gap-[0.5rem]"
            >
              <Pill hover={true} clicked={isSelected}>
                {tag}{" "}
                <span
                  className={`text-[0.85rem] ${isSelected ? "light-gray" : "gray"
                    }`}
                >
                  {count}
                </span>
              </Pill>
            </div>
          );
        })}
        <button
          onClick={() => setSelectedTag(null)}
          id="clear-filters"
          className="ml-[0.5rem] gray hover-underline"
        >
          Clear filters
        </button>
      </div>
      {/* WORK CARDS */}
      <div className="flex flex-col gap-[4rem]">
        {filteredProjects.map((proj) => (
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
                  <Pill key={tag} text={tag} hover={true} clicked={isSelected} />
                );
              })
          )}
        </div>
        <p className="gray inline">work →</p>
      </Link> */}
    </div>
  );
}