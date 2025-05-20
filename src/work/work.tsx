import { projects } from "../database";
import "../index.css";
import "../navigation/nav.css";
import "./work.css";
import WorkCard from "./work-card";
export default function Work() {
  return (
    <div>
      {/* GREETING */}
      <div className="flex flex-col gap-[0.5rem] mt-[8rem] mb-[12rem] items-center place-content-center">
        <h2 className="text-red-500 text-center max-w-tablet">
          <span className="gray">🌚<br />UX Designer, coder, kombucha drinker.</span><br />
          Using tech, design, and data to create intentionally and meaningfully.
        </h2>
      </div>

      {/* WORK CARDS */}
      <div className="flex flex-col gap-[4rem]">
        {projects
          .filter((proj) => proj.active === true)
          .map((proj) => (
            <WorkCard project={proj} />
          ))}
      </div>
    </div>
  );
}
