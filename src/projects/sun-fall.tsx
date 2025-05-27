import "./projects.css";

export default function SunFall() {
    return (
        <div className="project-content" id="project-content-rockumentary">
            <div className="row-space-between">
                <div className="col-space-between">
                    <h1 className="project-heading-title">Sun Fall</h1>
                    <p className="project-heading-details gray">2022<br />Graphic Design</p>
                </div>
                <p className="description">
                    A book cover I created for a fake book, from concept to execution.
                    Part of my first graphic design class in high school.
                </p>
            </div>
            <div className="project-content-rest">
                <img src="images/work/sunfall.jpg" alt="" width="100%" />
            </div>
        </div>
    );
}