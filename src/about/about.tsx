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
          className="tag py-[6px] px-[16px] rounded bg-gray-100 hover:bg-gray-200 transition">{text}
        </button>
        <div className="absolute bottom-full mb-[0.5rem] left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-[0.88rem] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 gray">
          {tooltip}
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col gap-[4rem] w-(--mob-page-w) max-w-[41rem]">
        {/* IMAGE */}
        <div className="overflow-hidden w-full">
          <img id="headshot" className="w-full h-auto object-cover rounded" src="images/wide.png" />
        </div>

        {/* GREETING */}
        <h2 className="dark-gray">Hi, I'm Rebecca. <span className="gray">I'm a third-year Computer Science and Design student at Northeastern University.</span></h2>

        {/* SUMMARY */}
        <div className="flex flex-col gap-[1.5rem]">
          <h2 className="dark-gray">I'm currently doing my co-op at The Boston Beer Company on the Marketing Analytics team, <span className="gray">using my design thinking to make our dashboards and one-sheeters more user-friendly and accessible.</span> I'm also a UI/UX design lead at <a href="https://www.sandboxnu.com/" className=" h2 underline dark-gray">Sandbox NU</a> for <a className="h2 underline dark-gray" href="/cooper">Cooper</a>, <span className="gray">helping Northeastern students make more informed co-op decisions.</span></h2>
          {/* IMAGES */}
          <div className="work-img-group-col">
            <div className="flex flex-col">
              <img id="headshot" className="w-full h-[15vw] min-h-[25vh] object-cover rounded" src="images/cooper hangout.PNG" />
              <p className="caption cap-top">The Cooper team!</p>
            </div>
            <div className="flex flex-col">
              <img id="headshot" className="w-full h-[15vw] min-h-[25vh] object-cover rounded" src="images/sandbox group.JPG" />
              <p className="caption cap-top">sandbox spr '25</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[1.5rem]">
          <h2 className="gray">I love photography, taking long walks around the city, teaching my dog new tricks, and cooking and baking new things. I also come from a very musical family, and have been teaching myself the bass guitar since middle school.</h2>
          {/* IMAGES */}
          <div className="work-img-group-col">
            <div className="flex flex-col">
              <img id="headshot" className="w-full h-[15vw] min-h-[25vh] object-cover rounded" src="images/nara.png" />
              <p className="caption cap-top">My dog, Nara</p>
            </div>
            <div className="flex flex-col">
              <img id="headshot" className="w-full h-[15vw] min-h-[25vh] object-cover rounded" src="images/arboretum wide.jpg" />
              <p className="caption cap-top">arnold arboretum (highly recommend for a quiet, scenic walk)</p>
            </div>
          </div>
          <br />
          <h2 className="gray">Read about my <a className="gray h2 underline" href="/background">work background & philosophy here</a>.</h2>
        </div>

        <hr />

        {/* TAGS */}
        <div className="w-full flex flex-col gap-[1rem]">
          {/* CONTACT */}
          <div className="flex gap-[1rem] items-center">
            <p className="caption">Contact</p>
            <div className="flex flex-wrap gap-[0.8rem]">
              <CopyButton text="choi.re@northeastern.edu" />
              <CopyButton text="(510) 682-0020" />
            </div>
          </div>
          {/* LINKS */}
          <div className="flex gap-[1rem] items-center">
            <p className="caption">Links</p>
            <div className="flex flex-wrap gap-[0.8rem]">
              <a href="https://www.linkedin.com/in/ryschoi/"><Tag text="LinkedIn" hover={true} clicked={false} /></a>
              <a href="https://github.com/ryschoi"><Tag text="GitHub" hover={true} clicked={false} /></a>
              <a href="images/Rebecca_Choi_Resume.pdf"><Tag text="Resume" hover={true} clicked={false} /></a>
            </div>
          </div>
        </div>

        {/* <p>
          As someone who is both visionary and rational, I navigate complex problems with discernment and find ways to turn solutions into reality.
          <br /><br />
          It's important to me that the projects I work on are meaningful to their users and in the way that they are created. As a designer, this means that I am intentional with all my choices, making sure that whatever I design is easy on the eyes, easy to use, and delivers what the user needs out of the product. As a developer, I focus on scalability, efficiency, and writing clean and maintainable code.
        </p> */}

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
    </div>
  );
}
