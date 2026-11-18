import { Project } from "../projects/project";
import ProcessBox from "./process";
import { section } from "../projects/section";

export default function ProjectHeader({
  project,
  sections,
}: {
  project: Project;
  sections: section[];
}) {
  return (
    <div className="flex flex-col items-center mb-[6rem] w-full gap-[2rem]">
      {/* IMAGE */}
      {project.id === 5 ? (
        // Cooper: the box keeps the height the regular 44rem image gives it (cooper.png is
        // 2880×1908, plus 3vw padding top and bottom), but the image is blown up and pinned
        // 7vw down and 9vw in from the top left, so only its top-left corner shows.
        <div className="round cooper-bg border border-black/[0.01] dark:border-white/[0.08] w-full overflow-hidden h-[calc(min(44rem,85vw)*0.6625_+_6vw)] pt-[4vw] pl-[7vw]">
          <img
            src={project.frontImage}
            alt=""
            className="w-[110rem] max-w-none subtle-shadow round"
          />
        </div>
      ) : (
        <div className="round img-bg w-full flex align-center justify-center py-[3vw]">
          <img
            src={project.frontImage}
            alt=""
            className={
              project.vertical === true
                ? "w-[26rem] max-w-[85vw] subtle-shadow"
                : "w-[44rem] max-w-[85vw] subtle-shadow"
            }
          />
        </div>
      )}
      {/* Two columns on desktop (stacked on mobile): the project's name and year on the
          left, formatted like the top bar (name, then the year in gray), and the
          overview and details on the right. */}
      <div className="mob-mid-w grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-[2rem] gap-y-[0.75rem] mb-[3rem]">
        <h3 className="tracking-[-0.3px]">
          {project.name}
          <span className="gray ml-[0.25rem]">{project.year}</span>
        </h3>
        <div className="flex flex-col gap-[0.75rem]">
          {/* <h3 className="tracking-[-0.3px]">{project.summary}</h3> */}
          <h3 className="tracking-[-0.3px]">{project.overview}</h3>
          {project.id === 5 && (
            <h3>
              Made with{" "}
              <a
                href="https://www.sandboxnu.com"
                target="_blank"
                rel="noreferrer"
                className="underline h3"
              >
                Sandbox NU
              </a>
            </h3>
          )}
          {project.id === 12 && (
            <h3>
              Semester-long group project for Human-Computer Interaction.
            </h3>
          )}
          {project.id === 13 && (
            <p className="gray">
              I was reached out to by one of my friends to complete some quick
              design work for this hackathon. I did the UI for the internal
              admission portal along with the design for the sponsorship
              package, resulting in partnerships with companies like Vercel and
              Anthropic.
            </p>
          )}
        </div>
      </div>
      <hr className="w-full" />
    </div>
  );
}
