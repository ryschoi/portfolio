import "./projects.css";
import { Link } from "react-router-dom";

export default function snakebiteResponse() {
    return (
        <div className="project-content" id="project-content-rockumentary">
            <div className="row-space-between">
                <div className="col-space-between">
                    <h1 className="project-heading-title">
                        Snakebite Response Poster
                    </h1>
                    <p className="project-heading-details gray">
                        Dec 2024<br />Information design
                    </p>
                </div>
                <p className="description">
                    A simple, illustration-based informational poster intended to be
                    able to be used by residents of Botswana. The project entailed researching the
                    ways to help prevent fatal encounters with snakes specially in Botswana / southern Africa,
                    organizing information into different sections and writing concise actionable steps, and
                    finally creating the visual components of the poster. Wallet cards compile poster information
                    into small folding panels that would be able to kept for easy access throughout the day.<br /><br />
                    This was one of two projects for my Information Design studio class I took
                    in Fall 2024. See the second project, a data story poster <Link to="/Portfolio/Work/Projects/snakebiteData" className="underline">here</Link>. 
                </p>

            </div>

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
