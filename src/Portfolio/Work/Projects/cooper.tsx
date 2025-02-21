import "./projects.css";
import { projects } from "../../Database";
import ProjectHeader from "./projectHeader";
import { Project } from "./Project";

export default function BasicsOfTypography() {
    const thisProject = projects.find(p => p.path === "/cooper");

    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} />

            <div className="project-content-rest">
                <div className="row22">
                    <img src="images/work/cooper.png" alt="" width="100%" className="border"/>
                </div>
            </div>
        </div>
    );
}
