import "./about.css";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import TagCursor from "components/tag-cursor";
import SlideImg from "components/slide-img";
import Pill from "components/pill";

export default function About() {
  const { hash } = useLocation();
  interface CopyButtonProps { text: string; }

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
        const offset = 64;
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
            <span className="gray h3">
              Apart from my <Pill path="/" text="Work" tooltip="Collection of projects that captures the full breadth of my interests" onClick={handleWorkClick} hover={true} clicked={false} /> and <Pill path="/background" text="Work background / philosophy" tooltip="What are my design principles? Why CS & Design? How did I get here??" hover={true} clicked={false} />
            </span>
          </h2>

          <div className="relative round flex align-center justify-center overflow-hidden">
            <div className="my-[3vw]">
              <img src="images/website-assets/denby_headshot_cropped.jpg"
                alt=""
                className="round w-[20rem] max-w-[85vw] smaller-shadow object-cover"
              />
            </div>
          </div>

          <br />
          <Pill hover={true} clicked={false} text="↓ Contact & links" onClick={() => handleScroll("contacts")} />
        </div>

        <hr />

        {/* CURRENTLY */}
        <div className="thing">
          <h3 className="tracking-[-0.25px] serif">Born and raised in the temperate Bay Area, and now in Boston, MA.</h3>
          <br />
          <h3 className="tracking-[-0.25px] serif">Currently...</h3>
          <ul className="gray">
            <li className="h4">Third-year Computer Science and Design student at Northeastern University</li>
            <li className="h4">Design lead at <a href="https://www.sandboxnu.com/" className="h4 underline">Sandbox NU</a> for <a className="h4 underline" href="/cooper">Cooper</a>, creating a job experience review platform to help Northeastern students make more informed co-op decisions</li>
          </ul>
          <br />
          <h3 className="serif">Incoming Human Interface Design Intern @ Apple, Summer 2026</h3>
        </div>

        <hr />

        {/* OTHER THINGS */}
        <div className="flex flex-col gap-[1.5rem]">
          <h4 className="">
            <span className="font-[400]">Some things that keep me going:</span> walks around the city, baking & recipe testing, bass guitar, kombucha, spontaneous changes to this website, and my dog<br />
            {/* Pet peeves: custom cursors, inefficiency */}
            {/* Dislikes: custom cursors */}
          </h4>
          {/* IMAGES */}
          {/* <div className="work-img-group-col">
            <div className="flex flex-col">
              <img className="w-full h-[15vw] min-h-[25vh] object-cover round" src="images/nara.png" />
              <p className="caption cap-top">My dog, Nara</p>
            </div>
            <div className="flex flex-col">
              <img className="w-full h-[15vw] min-h-[25vh] object-cover round" src="images/arboretum wide.jpg" />
              <p className="caption cap-top">Trees!</p>
            </div>
          </div> */}
          {/* <>
            <img className="tag-img round" src="images/nara.png"
              style={{ cursor: "none" }}
              onMouseMove={(e: React.MouseEvent<HTMLImageElement>) => handleMove(e)}
              onMouseEnter={(e: React.MouseEvent<HTMLImageElement>) => handleMove(e)}
              onMouseLeave={(e: React.MouseEvent<HTMLImageElement>) => hideCursor(e)} />
            <TagCursor text="My dog, Nara" x={cursor.x} y={cursor.y} visible={cursor.visible} />
          </> */}
          <div className="carousel-container">
            <div className="carousel-viewport">
              <div className="slides-wrapper">
                <SlideImg src="images/nara.png" caption="my dog nara" vert={false} />
                <SlideImg src="images/sandbox group.JPG" caption="sandbox" vert={false} />
                <SlideImg src="images/cooper hangout.PNG" caption="the cooper team" vert={false} />
                <SlideImg src="images/cookies.png" caption="cookie boxes for my team" vert={false} />
                <SlideImg src="images/carrotCake.png" caption="Fall baking" vert={false} />
                <SlideImg src="images/northeastern_campus.png" caption="campus in the fall" vert={true} />
                <SlideImg src="images/arboretum wide.jpg" caption="trees!" vert={false} />
                <SlideImg src="images/nara.png" caption="my dog nara" vert={false} />
                <SlideImg src="images/sandbox group.JPG" caption="sandbox" vert={false} />
                <SlideImg src="images/cooper hangout.PNG" caption="the cooper team" vert={false} />
                <SlideImg src="images/cookies.png" caption="cookie boxes for my team" vert={false} />
                <SlideImg src="images/carrotCake.png" caption="Fall baking" vert={false} />
                <SlideImg src="images/northeastern_campus.png" caption="campus in the fall" vert={true} />
                <SlideImg src="images/arboretum wide.jpg" caption="trees!" vert={false} />
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
            <div className="flex flex-wrap gap-[0.8rem]">
              <Pill copyText="rebecca.choi05@gmail.com" hover={true} clicked={false} />
              <Pill copyText="(510) 682-0020" hover={true} clicked={false} />
            </div>
          </div>
          {/* LINKS */}
          <div className="flex gap-[1rem] items-center">
            <p className="caption">Links</p>
            <div className="flex flex-wrap gap-[0.8rem]">
              <Pill path="https://www.linkedin.com/in/ryschoi/" text="LinkedIn" hover={true} clicked={false} />
              <Pill path="https://github.com/ryschoi" text="GitHub" hover={true} clicked={false} />
              <Pill path="../../public/images/Rebecca_Choi_Resume.pdf" text="Resume" hover={true} clicked={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
