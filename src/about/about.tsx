import "./about.css";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import TagCursor from "../components/tag-cursor";
import SlideImg from "../components/slide-img";
import Pill from "../components/pill";
import HoverTag, { useTagCursor } from "../components/hover-tag";
import LinkHover from "../components/link-hover";

export default function About() {
  const { hash } = useLocation();
  interface CopyButtonProps { text: string; }

  const { cursorState, containerProps } = useTagCursor();

  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });

  const handleMove = (e: React.MouseEvent<HTMLImageElement>) => {
    setCursor({ x: e.clientX, y: e.clientY, visible: true });
  };

  const hideCursor = (e: React.MouseEvent<HTMLImageElement>) => {
    setCursor(prev => ({ ...prev, visible: false }));
  };

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
          className="tag py-[6px] px-[16px] round transition">{text}
        </button>
        <div className="absolute bottom-full mb-[0.5rem] left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.88rem] round opacity-0 group-hover:opacity-100 transition-opacity duration-200 gray">
          {tooltip}
        </div>
      </div>
    );
  };

  const handleScroll = (item: string) => {
    const id = item.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const section = document.getElementById(id);
    if (section) {
      const offset = 64;
      const y = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleWorkClick = () => {
    if (pathname !== "/") {
      navigate("/", { state: { scrollTo: "filters" } });
    } else {
      const section = document.getElementById("filters");
      if (section) {
        const offset = 200;
        const y =
          section.getBoundingClientRect().top +
          window.pageYOffset -
          offset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col gap-[2rem] w-slim">
        <div>
          <h2 className="mb-[1rem]">
            About me
            <br />
            <span className="gray p-style">
              Apart from my <Pill path="/" text="Work" tooltip="Collection of projects that captures the full breadth of my interests" onClick={handleWorkClick} hover={true} clicked={false} /> and <Pill path="/background" text="Work background / philosophy" tooltip="What are my design principles? Why CS & Design? How did I get here??" hover={true} clicked={false} />
            </span>
          </h2>

          <div className="relative round flex align-center justify-center overflow-hidden">
            <div className="my-[3vw]">
              <img src="images/website-assets/denby_headshot copy.jpg"
                alt=""
                className="round w-[20rem] max-w-[85vw] smaller-shadow object-cover"
              />
            </div>
          </div>

          {/* <br /> */}
          {/* <Pill hover={true} clicked={false} text="↓ Contact & links" onClick={() => handleScroll("contacts")} /> */}
        </div>

        {/* <hr /> */}

        {/* CURRENTLY */}
        <div className="thing">
          <p className="gray">I was born and raised in the temperate Bay Area, and now I'm in Boston, MA studying Computer Science and Design at Northeastern University.</p>
          <br />
          <h4 className="serif">Experience</h4>
          <div className="flex flex-col gap-[0.25rem]">
            <div className="flex flex-col md:flex-row justify-between">
              <p className="gray"><span className="black">Apple, </span>Human Interface Design Intern</p>
              <p className="caption color-[#999999] text-[0.8rem] md:text-[0.85rem]">Incoming Summer 2026</p>
            </div>
            <hr />
            <LinkHover href="../cooper" label="go to case study" children={
              <div className="flex flex-col md:flex-row justify-between hover:italic">
                <p className="gray"><span className="black">Sandbox, </span>Design Lead for <a className="underline" href="/cooper">Cooper</a></p>
                <p className="caption color-[#999999] text-[0.8rem] md:text-[0.85rem]">Since Jan 2025</p>
              </div>
            } />
            <hr />
            <LinkHover label="case study coming soon" children={
              <div className="flex flex-col md:flex-row justify-between hover:italic">
                <p className="gray"><span className="black">Boston Beer Company, </span>Marketing Analytics Co-op</p>
                <p className="caption color-[#999999] text-[0.8rem] md:text-[0.85rem]">Jul - Dec 2025</p>
              </div>
            } />
          </div>
        </div>

        <div className="thing mt-[1.5rem]">
          <h4 className="serif">Outside of design and coding this portfolio,</h4>
          <p className="gray">you can find me experimenting with new baking and cooking recipes, playing the bass guitar, and exploring different parts of Boston.</p>
        </div>

        {/* OTHER THINGS */}
        <div className="flex flex-col gap-[1.5rem]">
          <div className="carousel-container">
            <div className="carousel-viewport">
              <div className="slides-wrapper">
                <SlideImg src="images/nara.png" caption="My dog Nara" vert={false} />
                <SlideImg src="images/cooper hangout.PNG" caption="The Cooper team!" vert={false} />
                <SlideImg src="images/cookies.png" caption="Holiday cookie boxes" vert={false} />
                <SlideImg src="images/carrotCake.png" caption="Fall baking" vert={false} />
                <SlideImg src="images/polaroid.png" caption="" vert={true} />
                <SlideImg src="images/cooking.png" caption="Cooking with friends" vert={true} />
                <SlideImg src="images/northeastern_campus.png" caption="Campus in the fall" vert={true} />
                <SlideImg src="images/arboretum wide.jpg" caption="Trees" vert={false} />
                <SlideImg src="images/nara.png" caption="My dog Nara" vert={false} />
                <SlideImg src="images/cooper hangout.PNG" caption="The Cooper team!" vert={false} />
                <SlideImg src="images/cookies.png" caption="Holiday cookie boxes" vert={false} />
                <SlideImg src="images/carrotCake.png" caption="Fall baking" vert={false} />
                <SlideImg src="images/polaroid.png" caption="" vert={true} />
                <SlideImg src="images/cooking.png" caption="Cooking with friends" vert={true} />
                <SlideImg src="images/northeastern_campus.png" caption="Campus in the fall" vert={true} />
                <SlideImg src="images/arboretum wide.jpg" caption="Trees" vert={false} />
              </div>
            </div>
          </div>
        </div>

        <hr />

        {/* TAGS */}
        <div className="w-full flex flex-col gap-[1rem]" id="contacts">
          {/* CONTACT */}
          <div className="flex gap-[1rem] items-center">
            <p className="caption">Contact</p>
            <div className="flex flex-wrap gap-[0.6rem]">
              <Pill copyText="rebecca.choi05@gmail.com" hover={true} clicked={false} />
              <Pill copyText="(510) 682-0020" hover={true} clicked={false} />
            </div>
          </div>
          {/* LINKS */}
          <div className="flex gap-[1rem] items-center">
            <p className="caption">Links</p>
            <div className="flex flex-wrap gap-[0.6rem]">
              <Pill path="https://www.linkedin.com/in/ryschoi/" text="LinkedIn" hover={true} clicked={false} />
              <Pill path="https://github.com/ryschoi" text="GitHub" hover={true} clicked={false} />
              <Pill path="/images/Rebecca_Choi_Resume.pdf" text="Resume" hover={true} clicked={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
