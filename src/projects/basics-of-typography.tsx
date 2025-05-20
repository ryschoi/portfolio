import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "./project-header";
import { Project } from "./project";

export default function BasicsOfTypography() {
    const thisProject = projects.find(p => p.path === "/basics-of-typography");

    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} />

            <div className="project-content-rest">
                <div className="row22">
                    <img src="images/work/typography.jpg" alt="" width="48.84%" />
                    <div className="col22">
                        <img className="crop-image" src="images/work/type_defg.jpg" alt="" width="100%" />
                        <img className="crop-image" src="images/work/type_serif.jpg" alt="" width="100%" />
                    </div>
                </div>
            </div>
        </div>
    );
}
