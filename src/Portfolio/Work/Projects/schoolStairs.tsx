import "./projects.css";

export default function SchoolStairs() {
    return (
        <div className="project-content">
            <div className="project-heading">
                <div className="project-heading-left">
                    <h1 className="project-heading-title">Stairs Design for Albany High School</h1>
                    <p className="project-heading-details gray" id="space-above">May 2022<br />Graphic Design  |  Concept/brand</p>
                </div>
                <p className="description">
                    A 15-panel vinyl design for my high school’s main stairs that celebrates various highlights from the past school year, fostering unity and school pride.
                    This design was a project in my graphic design class, and between two classes, voted on to be printed and installed.
                </p>
            </div>
            <div className="project-content-rest">
                <div className="basic-container">
                    <div className="basic-items">
                        <img src="images/work/complete_stairs.png" alt="" width="49%" />
                        <img src="images/work/walking.png" alt="" width="49%" />
                    </div>
                </div>
            </div>
        </div>
    );
}