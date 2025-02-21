import "./projects.css";
import { projects } from "../../Database";
import ProjectHeader from "./projectHeader";
import { Project } from "./Project";

export default function MyFavoriteThings() {
    const thisProject = projects.find(p => p.path === "/my-favorite-things");
    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} />
            <div className="project-content-rest">
                <div className="col22">
                    <p className="section-titles" id="top-section">Pages 1 - 4</p>
                    <div className="row">
                        <div className="col-sm"><img src="images/work/page 1.jpg" alt="" width="49%"/></div>
                        <div className="col-sm"><img src="images/work/page 2.jpg" alt="" width="49%"/></div>
                    </div>
                </div>
                <div className="col22">
                    <p className="section-titles">Pages 5 - 8</p>
                    <div className="row22">
                        <img src="images/work/page 3.jpg" alt="" width="50%" />
                        <img src="images/work/page 4.jpg" alt="" width="50%" />
                    </div>
                </div>
                <div className="col22">
                    <p className="section-titles">Pages 9 - 12</p>
                    <div className="row22">
                        <img src="images/work/page 5.jpg" alt="" width="50%" />
                        <img src="images/work/page 6.jpg" alt="" width="50%" />
                    </div>
                </div>
            </div>
        </div>
    );
}
