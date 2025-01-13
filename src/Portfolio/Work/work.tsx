import { Link } from "react-router-dom";
// import Filters from "./Filters";
import "./work.css";
// import * as projectsDB from "../Database";
export default function Work() {
  return (
    <div id="port-work">
      <p id="port-home-blurb">
        {/* Lover of tech, design, and data. */}


        {/* Experienced in UI/UX, information design, web development, and data analysis & visualization. */}

        Experienced in UI/UX, information design, web development, and
        data analysis & visualization.
        Eager to combine tech, design, and data to create something novel and meaningful.
        {/* Designing with the intention to ensure quality, functional products and satisfied users. */}


        {/* Old blurb */}
        {/* Graphic & information design, UI, UX, data visualization, etc. I thrive at the
        intersection of design and technology and create solutions that strike the balance
        between systematic order and creative freedom. */}
      </p>

      {/* <Filters /> */}
      <div id="port-work-content">
        <div className="work-images-columns">

          <div className="hover-container">
            <Link to="/Portfolio/Work/Projects/rockumentary">
              <img className="hover-img" src="images/work/rockumentary.png" alt="" />
              <div className="hover-overlay">
                <p className="hover-text">Rockumentary<br />
                  {/* ---<br />
                  Senior recital poster for a Berklee College of Music student */}
                </p>
              </div>
            </Link>
          </div>
          <div className="hover-container">
            <Link to="/Portfolio/Work/Projects/textDiagram">
              <img className="hover-img" src="images/work/textDiagramColor.png" alt="" />
              <div className="hover-overlay">
                <p className="hover-text">Text Diagram</p>
              </div>
            </Link>
          </div>
          <div className="hover-container">
            <Link to="/Portfolio/Work/Projects/myFavoriteThings">
              <img className="hover-img" src="images/work/page 3.jpg" alt="" />
              <div className="hover-overlay">
                <p className="hover-text">My Favorite Things Dossier</p>
              </div>
            </Link>
          </div>
          {/* <div className="hover-container">
            <Link to="/Portfolio/Work/Projects/sunFall">
              <img className="hover-img" src="images/work/sunfall.jpg" alt="" />
              <div className="hover-overlay">
                <p className="hover-text">sun fall</p>
              </div>
            </Link>
          </div> */}
        </div>

        <div className="work-images-columns">
          <div className="hover-container">
            <Link to="/Portfolio/Work/Projects/snakebiteProject">
              <img className="hover-img" src="images/work/snakebitePrevention.png" alt="" />
              <div className="hover-overlay">
                <p className="hover-text">Snakebite Response Poster<br />
                </p>
              </div>
            </Link>
          </div>
          <div className="hover-container">
            <Link to="/Portfolio/Work/Projects/snakebiteData">
              <img className="hover-img" src="images/work/snakebiteData.png" alt="" />
              <div className="hover-overlay">
                <p className="hover-text">Snakebite Data Story Poster</p>
              </div>
            </Link>
          </div>
          <div className="hover-container">
            <Link to="/Portfolio/Work/Projects/designPhilosophy">
              <img className="border hover-img" src="images/work/quote1.png" alt="" />
              <div className="hover-overlay">
                <p className="hover-text">Design Philosophy</p>
              </div>
            </Link>
          </div>
          {/* <div className="hover-container">
            <Link to="/Portfolio/Work/Projects/morningtide">
              <img className="hover-img" src="images/work/morningtide.png" alt="" />
              <div className="hover-overlay">
                <p className="hover-text">Morningtide</p>
              </div>
            </Link>
          </div> */}
        </div>

        <div className="work-images-columns">
          <div className="hover-container">
            <Link to="/Portfolio/Work/Projects/dissonantHarmony">
              <img className="hover-img" src="images/work/calder.png" alt="" />
              <div className="hover-overlay">
                <p className="hover-text">Dissonant Harmony</p>
              </div>
            </Link>
          </div>
          <div className="hover-container">
            <Link to="/Portfolio/Work/Projects/basicsOfTypography">
              <img className="hover-img" src="images/work/typography.jpg" alt="" />
              <div className="hover-overlay">
                <p className="hover-text">Basics of Typography</p>
              </div>
            </Link>
          </div>
        </div>
      </div >
    </div >
  );
}