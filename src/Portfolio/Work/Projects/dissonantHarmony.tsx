import "./projects.css";

export default function DissonantHarmony() {
    return (
        <div className="project-content" id="project-content-rockumentary">
            <div className="project-heading">
                <div className="project-heading-left">
                    <h1 className="project-heading-title">
                        Dissonant Harmony
                    </h1>
                    <p className="project-heading-details gray">
                        April 2024<br />Graphic Design  |  Typography
                    </p>
                </div>
                <p className="project-heading-des">
                    Little did I know on the one Saturday afternoon in 2018 that our
                    family paid a visit to the SFMoMA that years later I would design mock
                    exhibition materials for one of the sculptures I had seen that day.
                    Below is an A1 size poster, A5 size flyer, and Instagram posts all
                    featuring Alexander Calder’s iconic Big Crinkly. This was my final 
                    project for one of my studio classes.
                </p>

            </div>

            <div className="project-content-rest">
                <div className="basic-container">
                    <p className="section-titles">
                        A1 size poster
                    </p>
                    <img src="images/work/calder.png" alt="" width="100%" />
                    <div className="two-col">
                        <p className="calder-col">
                            I went with the theme of a deconstructed sculpture which I
                            created by first tracing over an image of Big Crinkly using
                            the Pen tool and then separating it by its individual parts.
                            The display of the individual pieces plays along with the idea
                            of “dissonant”–that all the individual pieces of the whole
                            sculpture are on their own dissonant. All a little random, a
                        </p>
                        <p className="calder-col">
                            little rough-cut, jagged almost. But somehow coming together
                            and creating harmony. The gif in the Instagram post is my favorite
                            part of this project because I think it brings everything together
                            (literally) by showing the actual constructing of the sculpture,
                            from separate pieces to one body.
                        </p>
                    </div>
                </div>

                <div className="basic-container slim">
                    <p className="section-titles">A5 size flyer (front & back)</p>
                    <div className="basic-items">
                        <img src="images/work/calder_a5_front.png" alt="" width="50%" />
                        <img src="images/work/calder_a5_back.png" alt="" width="50%" />
                    </div>
                </div>

                <div className="basic-container slim">
                    <p className="section-titles">Instagram posts +gif<br />
                        <a id="ig-link" href="https://www.instagram.com/snfivowlactz/">(pseudo Instagram account)</a></p>
                    <div className="basic-items">
                        <img src="images/work/calder_instagram.jpeg" alt="" width="50%" />
                        <video controls width="50%">
                            <source src="images/work/calder.mov" type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className="basic-container">
                    <p className="section-titles">Previous iterations</p>
                    <div className="basic-items basic-items-center">
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
