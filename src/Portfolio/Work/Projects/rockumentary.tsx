import "./projects.css";

export default function Rockumentary() {
    return (
        <div className="project-content" id="project-content-rockumentary">
            <div className="project-heading">
                <div className="project-heading-left">
                    <h1 className="project-heading-title">Rockumentary</h1>
                    <p className="project-heading-details gray">June 2024<br />Graphic design  |  Concept/brand</p>
                </div>
                <div className="project-heading-des">
                    <p>
                        The invitation for one of my greatest honors as a designer came one summer
                        Friday afternoon when a good friend of mine at the Berklee College of Music
                        asked me if I wanted to design the poster for his senior recital. While we
                        share a love for music, the rock music that he loves is nothing like the
                        mellow tunes of the music I listen to and embody. Nonetheless, I took this
                        on as a way to challenge myself to do something of a different feel. After
                        many FaceTime consultations from coast to coast of the US and getting the drawing of my friend’s iconic
                        bowl-cut and glasses just right, I ended up with this poster that captures
                        the boldness of rock, nostalgia of a documentary, and my friend’s personal
                        brand. “Rockumentary” is the musical documentary of the rock music that shaped his life.
                    </p>
                </div>
            </div>


            <div className="project-content-rest">
                <div className="basic-container">
                    <img src="images/work/rockumentary.png" alt="" width="100%" />

                    <div className="basic-items">
                        <div className="basic-container-align-left two-third-column">
                            <div className="basic-items">
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
                                <img className="crop-image" src="images/work/rock_seb.jpg" alt="" width="50%" height="390px"/>
                                <img className="crop-image" src="images/work/upclose_rock.png" alt="" width="50%" height="390px"/>
                            </div>
                            <p>The reference photo versus the drawing</p>
                        </div>
                        <div className="basic-container third-column">
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