import "./about.css";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Tag from "../components/tag";
import HoverButton from "components/hover-button";

export default function About() {
  const { hash } = useLocation();
  interface CopyButtonProps { text: string; }

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

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
      <div className="flex flex-col gap-[2rem] w-(--mob-page-w) max-w-[41rem]">
        {/* IMAGE */}
        <div className="overflow-hidden w-full">
          <img id="headshot" className="w-full h-auto object-cover rounded" src="images/wide.png" />
        </div>

        {/* GREETING */}
        <h2 className="mb-[1rem]">
          About me
          <br />
          <span className="gray h3">Apart from my <Link key='/' to='/' className=""><HoverButton text="Work" hoverText="Collection of some projects that shows the full breadth of my interests" /></Link> and <Link key='/' to='/background' className=""><HoverButton text="Work background / philosophy" hoverText="What are my design principles? Why CS & Design? How did I end up here??" /></Link>
          </span>
        </h2>

        <hr />

        {/* SUMMARY */}
          <div className="thing">
            {/* <img src="/images/code_icon.png" className="w-[4rem] mb-[0.75rem] aspect-square" /> */}
            <h3 className="tracking-[-0.25px]">Currently...</h3>
            <ul>
              <li className="h3">Third-year Computer Science and Design student at Northeastern University</li>
              <li className="h3">Doing my co-op at The Boston Beer Company on the Marketing Analytics team, using my design thinking to make our dashboards and one-sheeters more user-friendly and accessible</li>
              <li className="h3">Design lead at at <a href="https://www.sandboxnu.com/" className="h3 underline">Sandbox NU</a> for <a className="h3 underline" href="/cooper">Cooper</a>, creating a job experience review platform to help Northeastern students make more informed co-op decisions</li>
            </ul>
          </div>

        <hr />

        <div className="flex flex-col gap-[1.5rem]">
          <h3 className="">
            <span className="font-[400]">Some things that keep me going:</span> long walks around the city, baking (& thinking about my someday-bakery), bass guitar / music, kombucha, spontaneous changes to this website, and my dog<br />
            {/* Pet peeves: custom cursors, inefficiency */}
            {/* Dislikes: custom cursors */}
          </h3>
          {/* IMAGES */}
          <div className="work-img-group-col">
            <div className="flex flex-col">
              <img id="headshot" className="w-full h-[15vw] min-h-[25vh] object-cover rounded" src="images/nara.png" />
              <p className="caption cap-top">My dog, Nara</p>
            </div>
            <div className="flex flex-col">
              <img id="headshot" className="w-full h-[15vw] min-h-[25vh] object-cover rounded" src="images/arboretum wide.jpg" />
              <p className="caption cap-top">from one of my walks!</p>
            </div>
          </div>
        </div>

        <hr />

        {/* TAGS */}
        <div className="w-full flex flex-col gap-[1rem]" id="contacts">
          {/* CONTACT */}
          <div className="flex gap-[1rem] items-center">
            <p className="caption">Contact</p>
            <div className="flex flex-wrap gap-[0.8rem]">
              <CopyButton text="rebecca.choi05@gmail.com" />
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
