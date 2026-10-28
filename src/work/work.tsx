import { useState, useEffect, useLayoutEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { projects } from "../database";
import "../index.css";
import "./work.css";
import WorkCard from "./work-card";
import Pill from "../components/pill";
import Greeting from "./greeting";

// `hero` is the landing section above the filters; swap it to try out new versions.
// Without filters, the cards become the scroll/snap target the nav's "Work" jumps to.
export default function Work({
  hero = <Greeting />,
  showFilters = true,
}: {
  hero?: ReactNode;
  showFilters?: boolean;
}) {
  const location = useLocation();

  // Arriving from another page: jump straight to the filters (before paint) —
  // smooth scrolling is only for scrolls within a page.
  useLayoutEffect(() => {
    if (location.state?.scrollTo === "filters") {
      const section = document.getElementById("filters");
      if (section) {
        const offset = 64;
        const y =
          section.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({ top: y, behavior: "instant" });
      }
    }
  }, [location.state]);

  // Enable scroll-snapping on the page (only while Work is mounted) so scrolling
  // down from the top settles on the filters. `proximity` keeps it from trapping
  // the scroll once you're past the filters into the work cards.
  // Skipped when there's no hero, since there's nothing to scroll past.
  useEffect(() => {
    if (!hero) return;
    const html = document.documentElement;
    html.classList.add("snap-y", "snap-proximity");
    return () => {
      html.classList.remove("snap-y", "snap-proximity");
    };
  }, [hero]);

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
      {hero}
      {/* FILTERS */}
      {showFilters && <div className="flex flex-wrap gap-[0.5rem] mb-[1.5rem] snap-start scroll-mt-[6rem]" id="filters">
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
      </div>}
      {/* WORK CARDS */}
      <div
        className={`flex flex-col gap-[4rem] ${showFilters ? "" : "snap-start scroll-mt-[6rem]"}`}
        id={showFilters ? undefined : "filters"}
      >
        {filteredProjects.map((proj) => (
          <WorkCard key={proj.id} project={proj} showTags={showFilters} />
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