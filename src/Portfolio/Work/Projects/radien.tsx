import "./projects.css";
import { projects } from "../../Database";
import ProjectHeader from "./projectHeader";
import { Project } from "./Project";

export default function Radien() {
    const thisProject = projects.find(p => p._id === 7);

    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} />

            <div className="project-content-rest">
                <div className="col22">
                    <div className="row22">
                        <img className="crop-image" src="images/work/radien2.png" alt="" width="49.5%" />
                        {/* <p className="gray">Landing page</p> */}
                        <img className="crop-image" src="images/work/radien3.png" alt="" width="49.5%" />
                    </div>
                    <div className="row22">
                        <img className="crop-image" src="images/work/radien.png" alt="" width="49.5%" />
                        <img className="crop-image" src="images/work/radien5.png" alt="" width="49.5%" />
                    </div>
                    <p className="section-titles">Popup to remind people to log their progress<br />Meant to pop up at a set time close to the end of the work day</p>
                    <img className="crop-image" src="images/work/radien4.png" alt="" width="49.5%" />
                </div>

            </div>
        </div>
    );
}
