import "./about.css";
import { useState } from "react";

export default function About() {
  interface CopyButtonProps { text: string; }

  const CopyButton: React.FC<CopyButtonProps> = ({ text }) => {
    const [tooltip, setTooltip] = useState('Copy to clipboard');

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(text);
        setTooltip('Copied!');
        setTimeout(() => setTooltip('Copy to clipboard'), 1500);
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
    <div className="flex justify-center">
      <div className="flex flex-row justify-between w-[63vw]">
        {/* IMAGE */}
        <div className="overflow-hidden w-[11rem] h-[11rem] rounded-[50%]">
          <img id="headshot" className="w-full h-auto object-cover" src="images/headshot-square.png" />
        </div>


        {/* TEXT */}
        <div className="w-7/10 flex flex-col gap-[1rem]">
          <div className="flex flex-col gap-[1rem]">
            <h3 className="">Hi, I'm Rebecca.<br /><span className="gray">A second-year Computer Science and Design student at Northeastern University and a UI/UX designer at Sandbox NU.</span></h3>

          </div>

          <p>
            I'm passionate about understanding how people think and behave. In design, I have found a discipline where I can apply my insights and fuel my passion.
            Whether it's in coding or visual design, I work with the human nature in mind,
            aiming to create quality products that new users can interact with in a familiar way.
            <br /><br />
            Outside of work I love full bleed designs, trees, playing the bass, long silent train rides, and kombucha.
          </p>

          <div id="contacts" className="flex flex-row gap-[12px] mt-[1rem]">
            <CopyButton text="choi.re@northeastern.edu" />
            <CopyButton text="(510) 682-0020" />
            <a href="https://www.linkedin.com/in/ryschoi/"><button className="tag py-[6px] px-[16px] rounded-[0.5rem]">LinkedIn</button></a>
            <a href="../public/images/Rebecca_Choi_Resume.pdf"><button className="tag py-[6px] px-[16px] rounded-[0.5rem]">Resume</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}
