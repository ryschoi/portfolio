import { Routes, Route, Navigate } from "react-router";
import { Link } from "react-router-dom";
import "./work.css";
export default function Work() {
  return (
    <div id="port-work">
      <p id="port-home-blurb">
        Graphic & information design, UI, UX, data visualization, etc. I thrive at the
        intersection of design and technology and create solutions that strike the balance
        between systematic order and creative freedom.
      </p>

      <div id="port-work-content">


        <div className="column">
          <div className="work-image">
            <Link to="/Portfolio/Work/Projects/rockumentary" id="port-work-link-rockumentary"><img src="images/work/rockumentary.png" width="100%"/></Link>
          </div>
          <div className="work-image">
            <Link to="/Portfolio/Work/Projects/Morningtide" id="port-work-link-morningtide"><img src="images/work/morningtide.png" width="100%"/></Link>
          </div>
        </div>


        <div className="column">
          <div className="work-image">
            <Link to="/Portfolio/Work/Projects/TextDiagram" id="port-work-link-textdiagram"><img src="images/work/TextDiagramColor.png" width="100%"/></Link>
          </div>
          <div className="work-image">
            <Link to="/Portfolio/Work/Projects/DissonantHarmony" id="port-work-link-calder"><img src="images/work/calder.png" width="100%"/></Link>
          </div>
          <div className="work-image">
            <Link to="/Portfolio/Work/Projects/SunFall" id="port-work-link-sunfall"><img src="images/work/sunfall.jpg" width="100%"/></Link>
          </div>
        </div>


        <div className="column" id="last-column">
          <div className="work-image">
            <Link to="/Portfolio/Work/Projects/BasicsOfTypography" id="port-work-link-typography"><img src="images/work/typography.jpg" width="100%"/></Link>
          </div>
          <div className="work-image">
            <Link to="/Portfolio/Work/Projects/MyFavoriteThings" id="port-work-link-ue"><img src="images/work/page 3.jpg" width="100%"/></Link>
          </div>
          <div className="work-image">
            <Link to="/Portfolio/Work/Projects/DesignPhilosophy" id="port-work-link-designphilosophy"><img src="images/work/quote1.png" width="100%"/></Link>
          </div>
        </div>


      </div>
    </div>
  );
}

{/* <img class="work-image" src="images/work/rockumentary.png" width="50%"/>
      <img class="work-image" src="images/work/morningtide sped ad different image.png" width="50%"/>
      <img class="work-image" src="images/work/TextDiagramColor.png" width="50%"/>
      <img class="work-image" src="images/work/sun fall book cover.jpg" width="50%"/>
      <img class="work-image" src="images/work/design influences.jpg" width="50%"/> */}