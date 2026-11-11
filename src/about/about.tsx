import "./about.css";
import LinkHover from "../components/link-hover";

export default function About() {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col gap-[2rem] w-slim">
        <div className="flex flex-col gap-[1rem]">
          <h2>Rebecca Choi</h2>
          <p>
            I'm a product designer building scalable systems and invisible
            interfaces.
          </p>
          <p className="gray">
            I recently got my degree in Computer Science and Design from Northeastern
            University and was a Human Interface Design Intern at Apple last summer.
          </p>
        </div>

        <div className="flex flex-col gap-[0.5rem]">
          <h4 className="serif">Experience</h4>
          <div className="flex flex-col gap-[0.25rem]">
            <LinkHover
              href="../apple"
              label="go to case study"
              children={
                <div className="flex flex-col md:flex-row justify-between md:gap-[1rem] hover:italic">
                  <p className="gray">
                    <span className="black">Apple, </span>Human Interface Design
                    Intern
                  </p>
                  <p className="caption color-[#999999] text-[0.8rem] md:text-[0.85rem]">
                    May - Aug 2026
                  </p>
                </div>
              }
            />
            <hr />
            <LinkHover
              href="../cooper"
              label="go to case study"
              children={
                <div className="flex flex-col md:flex-row justify-between md:gap-[1rem] hover:italic">
                  <p className="gray">
                    <span className="black">Sandbox, </span>Design Lead for
                    Cooper
                  </p>
                  <p className="caption color-[#999999] text-[0.8rem] md:text-[0.85rem]">
                    Jan 2025 - Present
                  </p>
                </div>
              }
            />
            <hr />
            <LinkHover
              label="coming soon"
              children={
                <div className="flex flex-col md:flex-row justify-between md:gap-[1rem] hover:italic">
                  <p className="gray">
                    <span className="black">Boston Beer Company, </span>
                    Marketing Analytics Co-op
                  </p>
                  <p className="caption color-[#999999] text-[0.8rem] md:text-[0.85rem]">
                    Jul - Dec 2025
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
