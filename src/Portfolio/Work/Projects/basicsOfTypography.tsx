import { Routes, Route, Navigate } from "react-router";
import { Link } from "react-router-dom";
import "./projects.css";

export default function BasicsOfTypography() {
    return (
        <div className="project-content">
            <div className="project-heading">
                <div className="project-heading-left">
                    <h1 className="project-heading-title">Basics of Typography</h1>
                    <p className="project-heading-details gray">
                        June 2024<br />Information design  |  Typography
                    </p>
                </div>
                <p className="project-heading-des">
                    As someone who starts many more projects than I complete, this 24-hour
                    challenge was the perfect way to give myself practice in making and
                    committing to creative decisions, which is where I most often get
                    stuck in the design process. During this one day, I successfully
                    gathered and categorized all the information, drafted, and brought
                    to life this poster that you see below. Along with getting lots and
                    lots of practice with the Pathfinder tool in Illustrator.
                </p>
            </div>

            <div className="project-content-rest">
                <div className="type-container">
                    <img src="images/work/typography.jpg" width="48.84%" />
                    <div className="type-column-right">
                        <img className="crop-image" src="images/work/type_defg.jpg" width="100%" height="310px"/>
                        <img className="crop-image" src="images/work/type_serif.jpg" width="100%" height="310px"/>
                    </div>
                </div>
            </div>


            {/* <div className="project-content-rest">
                <div className="type-container">
                    <div className="column-half">
                        <img src="images/work/typography.jpg" width="100%" />
                    </div>
                    <div className="column-half last-column">
                        <img src="images/work/type_defg.jpg" width="100%" />
                        <img src="images/work/type_serif.jpg" width="100%" />
                    </div>
                </div>
            </div> */}
        </div>
    );
}