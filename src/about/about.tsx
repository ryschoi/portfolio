import "./about.css";
import { useState } from "react";

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
        <div className="absolute top-full mt-[0.5rem] left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-[0.88rem] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 gray">
          {tooltip}
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col gap-[3rem] w-[85vw] max-w-[41rem] items-center">
        <div className="overflow-hidden w-full">
          <img id="headshot" className="w-full h-auto object-cover rounded-[0.5rem]" src="images/wide.png" />
        </div>

        <div className="flex flex-col gap-[1rem]">
          <h2>Hi, I'm Rebecca Choi</h2>
          <p className="caption">A third-year Computer Science and Design student at <a href="https://www.northeastern.edu/" className="caption underline">Northeastern University</a> and a UI/UX designer at <a href="https://www.sandboxnu.com/" className="caption underline">Sandbox NU.</a></p>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <h3 className="gray">A designer and developer who is using tech, design, and data to create intentionally and meaningfully.</h3>
          <p>
            I'm passionate about understanding how people think and behave. In design, I have found a discipline where I can apply my insights and fuel my passion.
            Whether it's in coding or visual design, I work with the future users in mind,
            aiming to create quality products that users can interact with in a familiar way.
            <br /><br />
            It's important to me that the projects I work on are meaningful in themselves and in the way that they are created. As a designer, this means that I am intentional with all my choices, making sure that whatever I design is easy on the eyes, easy to use, and delivers what the user needs out of the product. As a developer, I focus on scalability, efficiency, and writing clean and maintainable code.
            <br /><br />
            My goal is that it will always be clear that my work is crafted with care and intention.
            <br /><br />
            Outside of work I love trees, photography, playing the bass, and kombucha.
          </p>
        </div>

        {/* TAGS */}
        <div id="contacts" className="w-full flex flex-wrap gap-[12px]">
          <CopyButton text="choi.re@northeastern.edu" />
          <CopyButton text="(510) 682-0020" />
          <a href="https://www.linkedin.com/in/ryschoi/"><button className="tag py-[6px] px-[16px] rounded-[0.5rem]">LinkedIn</button></a>
          <a href="../public/images/Rebecca_Choi_Resume.pdf"><button className="tag py-[6px] px-[16px] rounded-[0.5rem]">Resume</button></a>
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
