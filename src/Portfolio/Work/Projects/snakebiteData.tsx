import "./projects.css";
import { projects } from "../../Database";
import ProjectHeader from "./projectHeader";
import { Project } from "./Project";

export default function SnakebiteData() {
    const thisProject = projects.find(p => p.path === "/snakebite-data");
    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} />

            <div className="project-content-rest">
                <div className="col22">
                    <p className="section-titles">Snakebite Data Story<br />
                        <span className="italic">A2 size</span>
                    </p>
                    <div className="row22">
                        <img src="images/work/snakebiteData.png" alt="" width="100%" />
                    </div>
                    <div className="row22">
                        <img className="crop-image" src="images/work/snakebiteData1.png" alt="" height="250px" width="32%" />
                        <img className="crop-image" src="images/work/snakebiteData2.png" alt="" height="250px" width="32%" />
                        <img className="crop-image" src="images/work/snakebiteData3.png" alt="" height="250px" width="32%" />
                    </div>
                </div>
            </div>
        </div>
    );
}
