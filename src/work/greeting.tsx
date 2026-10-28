import Pill from "../components/pill";

export default function Greeting() {
  return (
    <div className="flex gap-[2.75rem] items-center mt-[7.5rem] mb-[12rem] self-center">
      <img
        className="hidden md:block w-[8rem] object-contain"
        src="images/website-assets/notion_face.png"
      />
      <div className="w-slim md:w-[42rem] flex flex-col gap-[2rem] md:gap-[1.75rem]">
        <p className="green caption tracking-[-0.25px] mb-[-0.75rem]"><span className="live-pulse caption green">●</span> Prev. Design Intern @ Apple, cs & Design @ Northeastern</p>
        <h1 className="nanum leading-[1.3]">Hi, I'm Rebecca. Product designer building scalable and invisible systems.</h1>
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
            tooltip="Email, resume, LinkedIn..."
          />
        </div>
      </div>
    </div>
  );
}
