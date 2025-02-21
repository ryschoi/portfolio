import "./projects.css";
import { projects } from "../../Database";
import ProjectHeader from "./projectHeader";
import { Project } from "./Project";

export default function DesignPhilosophy() {
    const thisProject = projects.find(p => p.path === "/design-philosophy");

    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} />
            <div className="project-content-rest">
                <div className="row22">
                    <div className="col22 half-column">
                        <div>
                            <img className="border" src="images/work/quote1.png" alt="" width="100%" />
                            <p>Illustration of eye and hand, the ways you see and feel things</p>
                        </div>
                        <div>
                            <img className="border" src="images/work/desphil_1.png" alt="" width="100%" />
                            <p>“works” is made up of the word “design” to show that the construction of design creates its workings</p>
                        </div>
                        <div>
                            <img className="border" src="images/work/desphil_2.png" alt="" width="100%" />
                            <p>The first part of the quote is repeated over and over again to “distract”
                                the reader from seeing the important truth that “design is how it works”</p>
                        </div>
                    </div>
                    <div className="col22 half-column">
                        <div>
                            <img className="border" src="images/work/desphil_3.png" alt="" width="100%" />
                            <p>Representing “looks like” and “feels like” in over-exaggerated styles to both
                                make the viewer see and feel the texts, and to convey that sometimes
                                those aspects can be overdone and detract from the main purpose</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
