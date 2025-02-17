import "./projects.css";
import { projects } from "../../Database";
import ProjectHeader from "./projectHeader";
import { Project } from "./Project";

export default function DissonantHarmony() {
    const thisProject = projects.find(p => p._id === 2);

    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} />

            <div className="project-content-rest">
                <div className="col22">
                    <p className="section-titles">
                        A1 size poster
                    </p>
                    <img src="images/work/calder.png" alt="" width="100%" />
                    <div className="row22">
                        <p className="half-column">
                            I went with the theme of a deconstructed sculpture which I
                            created by first tracing over an image of Big Crinkly using
                            the Pen tool and then separating it by its individual parts.
                            The display of the individual pieces plays along with the idea
                            of “dissonant”–that all the individual pieces of the whole
                            sculpture are on their own dissonant. All a little random, a
                        </p>
                        <p className="half-column">
                            little rough-cut, jagged almost. But somehow coming together
                            and creating harmony. The gif in the Instagram post is my favorite
                            part of this project because I think it brings everything together
                            (literally) by showing the actual constructing of the sculpture,
                            from separate pieces to one body.
                        </p>
                    </div>
                </div>

                <div className="col22 slim">
                    <p className="section-titles">A5 size flyer (front & back)</p>
                    <div className="row22">
                        <img src="images/work/calder_a5_front.png" alt="" width="50%" />
                        <img src="images/work/calder_a5_back.png" alt="" width="50%" />
                    </div>
                </div>

                <div className="col22 slim">
                    <p className="section-titles">Instagram posts +gif<br />
                        <a className="underline gray" href="https://www.instagram.com/snfivowlactz/">(pseudo Instagram account)</a></p>
                    <div className="row22">
                        <img src="images/work/calder_instagram.jpeg" alt="" width="50%" />
                        <video controls width="50%">
                            <source src="images/work/calder.mov" type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className="col22">
                    <p className="section-titles">Previous iterations</p>
                    <div className="row22">
                        <img src="images/work/calder_prev1.png" alt="" width="231px" />
                        <img src="images/work/calder_prev2.png" alt="" width="231px" />
                        <img src="images/work/calder_prev3.png" alt="" width="231px" />
                        <img src="images/work/calder_prev3.png" alt="" width="231px" />
                    </div>
                </div>

            </div>
        </div>
    );
}
