import "./about.css";
import LinkHover from "../components/link-hover";

export default function About() {
  return (
    <div className="w-full">
      {/* Text first, photo underneath. Full width on mobile; on desktop a narrow
          column whose left edge starts at the middle of the page. */}
      <div className="flex flex-col gap-[2rem] w-full md:w-auto md:max-w-[34rem] md:ml-[50%]">
        <div className="flex flex-col gap-[2rem] flex-1 min-w-0">
        <div className="flex flex-col gap-[1rem]">
          {/* <h2>Rebecca Choi</h2> */}
          {/* <p>
            I'm a product designer building scalable systems and invisible
            interfaces.
          </p> */}
          <p className="gray">
            Hi, I'm Rebecca!
            <br />
            <br />
            I recently got my degree in Computer Science and Design from Northeastern
            University and was a Human Interface Design Intern at Apple last summer.
          </p>
        </div>

        {/* <div className="flex flex-col gap-[0.5rem]">
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
        </div> */}
        </div>
        <img
          src="images/website-assets/denby_headshot copy.jpg"
          alt="Rebecca Choi"
          className="round w-[12rem] shrink-0 smaller-shadow object-cover"
        />
      </div>
    </div>
  );
}
