import "./projects.css";
import { Link } from "react-router-dom";

export default function SnakebiteData() {
    return (
        <div className="project-content" id="project-content-rockumentary">
            <div className="row-space-between">
                <div className="col-space-between">
                    <h1 className="project-heading-title">
                        Snakebite Data Story Poster
                    </h1>
                    <p className="project-heading-details gray">
                        Dec 2024<br />Information Design  |  Data analysis  |  Data visualization
                    </p>
                </div>
                <p className="description">
                    Through this family of visualizations, I crafted a story of the link between 
                    certain climate conditions and countries with high rates of snakebite. I was lucky
                    to have had the opportunity to learn about the global snakebite crisis through this
                    project and to get to put my design skills to use to bring about more awareness for both those
                    affected and not. While this poster only covers climate conditions, I can see it becoming a much
                    fuller and more compelling story with the incorporation of data on patterns in wealth, hospital accessibility and funding, and much more. 
                    <br /><br />
                    This is the second project of my Information Design studio class in Fall 2024. 
                    See the first project, a <Link to="/snakebiteResponse" className="underline">"Snakebite Prevention in Botswana"</Link> project.
                </p>

            </div>

            <div className="project-content-rest">
                <div className="col22">
                    <p className="section-titles">Snakebite Data Story<br />
                        <span className="italic">A2 size</span>
                    </p>
                    <div className="row22">
                        <img src="images/work/snakebiteData.png" alt="" width="100%" />
                    </div>
                    <div className="row22">
                        <img className="crop-image" src="images/work/snakebiteData1.png" alt="" height="250px" width="32%"/>
                        <img className="crop-image" src="images/work/snakebiteData2.png" alt="" height="250px" width="32%"/>
                        <img className="crop-image" src="images/work/snakebiteData3.png" alt="" height="250px" width="32%" />
                    </div>
                </div>
            </div>
        </div>
    );
}
