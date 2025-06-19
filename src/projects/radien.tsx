import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "../components/project-header";
import { Project } from "./project";

export default function Radien() {
    const thisProject = projects.find(p => p.path === "/radien");

    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} />

            <div className="project-content-rest">
                <div className="col22">
                    <div className="row22">
                        <img className="crop-image" src="images/work/radien/radien2.png" alt="" width="49.5%" />
                        {/* <p className="gray">Landing page</p> */}
                        <img className="crop-image" src="images/work/radien/radien3.png" alt="" width="49.5%" />
                    </div>
                    <div className="row22">
                        <img className="crop-image" src="images/work/radien/radien.png" alt="" width="49.5%" />
                        <img className="crop-image" src="images/work/radien/radien5.png" alt="" width="49.5%" />
                    </div>
                    <p className="section-titles">Popup to remind people to log their progress<br />Meant to pop up at a set time close to the end of the work day</p>
                    <img className="crop-image" src="images/work/radien/radien4.png" alt="" width="49.5%" />
                </div>

            </div>
        </div>
    );
}
