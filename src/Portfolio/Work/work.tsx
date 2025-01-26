import { Link } from "react-router-dom";
// import Filters from "./Filters";
import "./work.css";
// import * as projectsDB from "../Database";
export default function Work() {
  return (
    <div id="port-work">
      <h1 id="port-home-blurb">
        {/* 
        Experienced in...<br />
        conducting user research,<br />
        designing clean and user-friendly interfaces,<br />
        crafting compelling data stories,<br />
        and writing efficient and maintainable code.<br />*/}

        Experienced in UI/UX, information design, web development, and
        data analysis & visualization.
        Eager to combine tech, design, and data to create something novel and meaningful.
        {/* Designing with the intention to ensure quality, functional products and satisfied users. */}

        {/* Old blurb */}
        {/* Graphic & information design, UI, UX, data visualization, etc. I thrive at the
        intersection of design and technology and create solutions that strike the balance
        between systematic order and creative freedom. */}
      </h1>

      {/* <Filters /> */}

      <div id="port-work-content">
        <div className="work-images-columns">
          <Link to="/Portfolio/Work/Projects/rockumentary">
            <img src="images/work/rockumentary.png" alt="" width="100%" />
            <p className="project-name">Rockumentary</p>
            <p className="description">2024 • Graphic Design</p>
          </Link>
          <Link to="/Portfolio/Work/Projects/dissonantHarmony">
            <img className="" src="images/work/calder.png" alt="" width="100%" />
            <p className="project-name">Dissonant Harmony</p>
            <p className="description">2024 • Graphic Design</p>
          </Link>
          <Link to="/Portfolio/Work/Projects/textDiagram">
            <img src="images/work/textDiagramColor.png" alt="" width="100%" />
            <p className="project-name">Text Diagram</p>
            <p className="description">2024 • Information Design</p>
          </Link>
          <Link to="/Portfolio/Work/Projects/myFavoriteThings">
            <img src="images/work/page 3.jpg" alt="" width="100%" />
            <p className="project-name">"My Favorite Things" Research Dossier</p>
            <p className="description">2024 • Information Design</p>
          </Link>
        </div>

        <div className="work-images-columns">
          <Link to="/Portfolio/Work/Projects/snakebiteResponse">
            <img src="images/work/snakebitePrevention.png" alt="" width="100%" />
            <p className="project-name">Snakebite Response Poster</p>
            <p className="description">2024 • Information Design</p>
          </Link>
          <Link to="/Portfolio/Work/Projects/snakebiteData">
            <img src="images/work/snakebiteData.png" alt="" width="100%" />
            <p className="project-name">Snakebite Data Story Poster</p>
            <p className="description">2024 • Information Design  |  Data analysis  |  Data visualization</p>
          </Link>
          <Link to="/Portfolio/Work/Projects/basicsOfTypography">
            <img className="" src="images/work/typography.jpg" alt="" width="100%" />
            <p className="project-name">Basics of Typography</p>
            <p className="description">2024 • Graphic Design</p>
          </Link>
          <Link to="/Portfolio/Work/Projects/designPhilosophy">
            <img className="border" src="images/work/quote1.png" alt="" width="100%" />
            <p className="project-name">Design Philosophy</p>
            <p className="description">2024 • Typography</p>
          </Link>
        </div>
      </div >
    </div >
  );
}
