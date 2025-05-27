import { projects } from "../database";
import "../index.css";
import "../navigation/nav.css";
import "./work.css";
import WorkCard from "./work-card";
export default function Work() {
  return (
    <div>
      {/* GREETING */}
      <div className="flex flex-col gap-[0.5rem] mt-[10rem] mb-[14rem] items-center place-content-center">
        <h2 className="text-red-500 text-center w-[39rem] max-w-[80vw]">
          <span className="gray">Hi, I'm Rebecca. 🌚<br /></span>A designer and developer who is using tech, design, and data to create intentionally and meaningfully.
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
