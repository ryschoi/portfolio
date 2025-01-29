import "./projects.css";
import { projects } from "../../Database";
import ProjectHeader from "./projectHeader";
import { Project } from "./Project";

export default function Rockumentary() {
    const thisProject = projects.find(p => p._id === 1);

    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} />

            <div className="project-content-rest">
                <div className="col22">
                    <img src="images/work/rockumentary.png" alt="" width="100%" />

                    <div className="row22">
                        <div className="col22-align-left two-third-column">
                            <div className="row22">
                                <img className="crop-image" src="images/work/rockumentary sketches.png" alt="" width="48.25%" height="200px" />
                                <img className="crop-image" src="images/work/rock_writing.png" alt="" width="48.25%" height="200px" />
                            </div>
                            <p>
                                I went through many rounds of initial sketches for this poster–different
                                stances, layouts, colors. For a long time I wanted to do it mainly by hand
                                so that I could have more flexibility when conveying the bold feel of rock
                                and nostalgic feel of a life documentary or a movie. In the end I settled
                                for a simple and bold Helvetica but with a nice grain to soften all the
                                solid colors.
                            </p>
                            <div className="display-block">
                                <img className="crop-image" src="images/work/rock_seb.jpg" alt="" width="50%" height="390px" />
                                <img className="crop-image" src="images/work/upclose_rock.png" alt="" width="50%" height="390px" />
                            </div>
                            <p>The reference photo versus the drawing</p>
                        </div>
                        <div className="col22 third-column">
                            <img className="crop-image" src="images/work/rock_ver1.jpg" alt="" width="100%" />
                            <img src="images/work/rock_corner.png" alt="" width="100%" />
                            <p>
                                The grain was one of the last things I added but is for sure
                                one of my favorite parts about this poster–it’s subtle but
                                adds so much.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}