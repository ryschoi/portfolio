import "./about.css";
import { useState } from "react";
import Tag from "../components/tag";

export default function About() {
  interface CopyButtonProps { text: string; }

  const CopyButton: React.FC<CopyButtonProps> = ({ text }) => {
    const [tooltip, setTooltip] = useState('Copy');

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(text);
        setTooltip('Copied 📋');
        setTimeout(() => setTooltip('Copy'), 1500);
      } catch (err) {
        setTooltip('Failed to copy');
      }
    };

    return (
      <div className="relative group">
        <button onClick={handleCopy}
          className="tag py-[6px] px-[16px] rounded-[0.5rem] bg-gray-100 hover:bg-gray-200 transition">{text}
        </button>
        <div className="absolute bottom-full mb-[0.5rem] left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-[0.88rem] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 gray">
          {tooltip}
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col gap-[2.5rem] w-(--mob-page-w) max-w-[41rem]">
        {/* IMAGE */}
        <div className="overflow-hidden w-full">
          <img id="headshot" className="w-full h-auto object-cover rounded-[0.5rem]" src="images/wide.png" />
        </div>

        {/* GREETING */}
        <div className="flex flex-col gap-[0.5rem]">
          <h2>Hi, I'm Rebecca.</h2>
          <h3 className="gray">I'm a third-year Computer Science and Design student at <a href="https://www.northeastern.edu/" className="h3 underline gray">Northeastern University</a> and a UI/UX designer at <a href="https://www.sandboxnu.com/" className=" h3 underline gray">Sandbox NU</a>.</h3>
           {/* Incoming marketing analytics co-op at <a className="h3 gray underline" href="https://www.bostonbeer.com/">Boston Beer Company</a>. */}
        </div>

        {/* <h3 className="gray">I have an interdisciplinary skillset across tech, design, and data, and am passionate about creating meaningful and well-crafted products and experiences.</h3> */}

        {/* WORK */}
        <div>
          <p className="caption">Work and design philosophy</p>
          <p>
            As someone who is both visionary and rational, I navigate complex problems with discernment and find ways to turn solutions into reality.
            <br /><br />
            It's important to me that the projects I work on are meaningful to their users and in the way that they are created. As a designer, this means that I am intentional with all my choices, making sure that whatever I design is easy on the eyes, easy to use, and delivers what the user needs out of the product. As a developer, I focus on scalability, efficiency, and writing clean and maintainable code.
          </p>
        </div>

        {/* OUTSIDE OF WORK */}
        <div className="w-full">
          <p className="caption">Outside of work</p>
          <p>
            I love photography, bass guitar, and kombucha.</p>
        </div>

        {/* TAGS */}
        <div className="w-full flex flex-col gap-[1rem]">
          <div className="flex gap-[1rem]">
            <p className="caption">Contact</p>
            <div className="flex flex-wrap gap-[0.8rem]">
              <CopyButton text="choi.re@northeastern.edu" />
              <CopyButton text="(510) 682-0020" />
            </div>
          </div>
          <div className="flex gap-[1rem]">
            <p className="caption">Links</p>
            <div className="flex flex-wrap gap-[0.8rem]">
              <a href="https://www.linkedin.com/in/ryschoi/"><Tag text="LinkedIn" hover={true} clicked={false} /></a>
              <a href="https://github.com/ryschoi"><Tag text="GitHub" hover={true} clicked={false} /></a>
              <a href="../public/images/Rebecca_Choi_Resume.pdf"><Tag text="Resume" hover={true} clicked={false} /></a>
            </div>
          </div>
        </div>

        {/* <hr /> */}
        {/* SKILLS */}
        {/* <div className="flex justify-between w-full">
          <div className="flex flex-col gap-[0.5rem] w-[20vw]">
            <p className="caption">Tech & development</p>
            <div>
              <p>Front-end development</p>
              <p>Web design</p>
              <p>Design-developer handoff</p>
            </div>
            <p>Languages: HTML, CSS, Typescript, Java, Python</p>
            <p>Frameworks & tools: React, Tailwind, Git, VS Code, IntelliJ, Eclipse</p>
          </div>
          <div className="flex flex-col gap-[0.5rem] w-[20vw]">
            <p className="caption">Design</p>
            <div>
              <p>UI/UX design</p>
              <p>Web design</p>
              <p>Data visualization</p>
              <p>Information design</p>
              <p>Prototyping (low, medium, and high fidelity)</p>
              <p>Usability testing</p>
              <p>User research, interviews, personas, affinity diagrams, thematic analysis</p>
              <p>Information architecture</p>
              <p>Design system and brand creation</p>
              <p>Design-developer handoff</p>
            </div>
            <p>Tools: Figma, Adobe Illustrator, Adobe InDesign</p>
          </div>
          <div className="flex flex-col gap-[0.5rem] w-[20vw]">
            <p className="caption">Data</p>
            <div>
              <p>Data visualization</p>
              <p>Data analysis</p>
            </div>
            <p>Tools: Python, R, RStudio, Microsoft Excel</p>
          </div>
        </div> */}
      </div>
    </div >
  );
}
