import "./projects.css";
import { Link } from "react-router-dom";
import { projects } from "../../Database";
import ProjectHeader from "./projectHeader";
import { Project } from "./Project";

export default function snakebiteResponse() {
    const thisProject = projects.find(p => p._id === 5);
    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} />

            <div className="project-content-rest">
                <div className="col22">
                    <p className="section-titles">
                        Snakebite Response Poster<br />
                        <span className="italic">A2 size</span>
                    </p>
                    <img src="images/work/snakebitePrevention.png" alt="" width="100%" />
                    {/* <div className="row22">
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
                    </div> */}
                </div>

                <div className="col22">
                    <p className="section-titles">
                        Supplementary wallet cards<br />
                        <span className="italic">Folding panels of 88 x 55 mm</span>
                    </p>
                    <img src="images/work/snakebiteWallet.png" alt="" width="25%" />
                    <div className="row22">
                        <img src="images/work/snakebiteWallet1.png" alt="" width="33%" />
                        <img src="images/work/snakebiteWallet2.png" alt="" width="33%" />
                        <img src="images/work/snakebiteWallet3.png" alt="" width="33%" />
                    </div>
                    <div className="row22">
                        <img src="images/work/snakebiteWallet4.png" alt="" width="33%" />
                        <img src="images/work/snakebiteWallet5.png" alt="" width="33%" />
                        <img src="images/work/snakebiteWallet6.png" alt="" width="33%" />
                    </div>
                </div>

                <div className="col22 slim">
                    <p className="section-titles">Previous iterations in print form</p>
                    <div className="row22 row22-center">
                        <img src="images/work/snakebiteWalletVersions.png" alt="" width="100%" />
                    </div>
                </div>
            </div>
        </div>
    );
}
