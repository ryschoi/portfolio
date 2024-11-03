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
        <div className="work-images-columns">
          <Link to="/Portfolio/Work/Projects/rockumentary"><img src="images/work/rockumentary.png" width="100%" /></Link>
          <Link to="/Portfolio/Work/Projects/morningtide"><img src="images/work/morningtide.png" width="100%" /></Link>
        </div>

        <div className="work-images-columns">
          <Link to="/Portfolio/Work/Projects/textDiagram"><img src="images/work/TextDiagramColor.png" width="100%" /></Link>
          <Link to="/Portfolio/Work/Projects/dissonantHarmony"><img src="images/work/calder.png" width="100%" /></Link>
          <Link to="/Portfolio/Work/Projects/sunFall"><img src="images/work/sunfall.jpg" width="100%" /></Link>
        </div>

        <div className="work-images-columns">
          <Link to="/Portfolio/Work/Projects/basicsOfTypography"><img src="images/work/typography.jpg" width="100%" /></Link>
          <Link to="/Portfolio/Work/Projects/myFavoriteThings"><img src="images/work/page 3.jpg" width="100%" /></Link>
          <Link to="/Portfolio/Work/Projects/designPhilosophy"><img src="images/work/quote1.png" width="100%" /></Link>
        </div>
      </div>
    </div>
  );
}