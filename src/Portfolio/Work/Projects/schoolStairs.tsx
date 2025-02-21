import "./projects.css";
import { projects } from "../../Database";
import ProjectHeader from "./projectHeader";
import { Project } from "./Project";

export default function SchoolStairs() {
    const thisProject = projects.find(p => p.path === "/school-stairs");

    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} />
            <div className="project-content-rest">
                <div className="col22">
                    <div className="row22">
                        <img src="images/work/complete_stairs.png" alt="" width="49%" />
                        <img src="images/work/walking.png" alt="" width="49%" />
                    </div>
                </div>
            </div>
        </div>
    );
}