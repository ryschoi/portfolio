import "./projects.css";
import { projects } from "../../Database";
import ProjectHeader from "./projectHeader";
import { Project } from "./Project";

export default function TextDiagram() {
    const thisProject = projects.find(p => p._id === 3);
    return (
        <div className="project-content" id="project-content-rockumentary">
            <ProjectHeader project={thisProject as Project} />


            <div className="project-content-rest">
                <div className="col22">
                    <p className="section-titles">Grayscale version used for submission</p>
                    <img className="crop-image" src="images/work/textDiagramBW.png" alt="" width="100%" />
                    <p className="section-titles">Lightly colored version for myself</p>
                    <img className="crop-image" src="images/work/textDiagramColor.png" alt="" width="100%" />
                </div>

            </div>
        </div>
    );
}
