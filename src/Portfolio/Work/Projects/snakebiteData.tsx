import "./projects.css";
import { Link } from "react-router-dom";

export default function SnakebiteData() {
    return (
        <div className="project-content" id="project-content-rockumentary">
            <div className="project-heading">
                <div className="project-heading-left">
                    <h1 className="project-heading-title">
                        Snakebite Data Story Poster
                    </h1>
                    <p className="project-heading-details gray">
                        Dec 2024<br />Information Design  |  Data analysis  |  Data visualization
                    </p>
                </div>
                <p className="description">
                    Analyzed over seven data sets to construct a story behind the link between 
                    certain climate conditions and countries with high rates of snakebite. <br /><br />
                    This is the second project of my Information Design studio class in Fall 2024. 
                    See the first project, a <Link to="/Portfolio/Work/Projects/snakebiteResponse" className="underline">"Snakebite Prevention in Botswana"</Link> project.
                </p>

            </div>

            <div className="project-content-rest">
                <div className="basic-container">
                    <p className="section-titles">Snakebite Data Story<br />
                        <span className="italic">A2 size</span>
                    </p>
                    <div className="basic-items">
                        <img src="images/work/snakebiteData.png" alt="" width="100%" />
                    </div>
                    <div className="basic-items">
                        <img className="crop-image" src="images/work/snakebiteData1.png" alt="" height="250px" width="32%"/>
                        <img className="crop-image" src="images/work/snakebiteData2.png" alt="" height="250px" width="32%"/>
                        <img className="crop-image" src="images/work/snakebiteData3.png" alt="" height="250px" width="32%" />
                    </div>
                </div>
            </div>
        </div>
    );
}
