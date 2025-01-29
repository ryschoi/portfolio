import "./projects.css";

export default function Radien() {
    return (
        <div className="project-content" id="project-content-rockumentary">
            <div className="row-space-between">
                <div className="col-space-between">
                    <h1 className="project-heading-title">Radien</h1>
                    <p className="project-heading-details gray">
                        August 2024<br />UX Research | UI/UX
                    </p>
                </div>

                <p className="description">
                    Description coming soon
                </p>
            </div>


            <div className="project-content-rest">
                <div className="col22">
                    <div className="row22">
                        <img className="crop-image" src="images/work/radien2.png" alt="" width="49.5%" />
                        {/* <p className="gray">Landing page</p> */}
                        <img className="crop-image" src="images/work/radien3.png" alt="" width="49.5%" />
                    </div>
                    <div className="row22">
                        <img className="crop-image" src="images/work/radien.png" alt="" width="49.5%" />
                        <img className="crop-image" src="images/work/radien5.png" alt="" width="49.5%" />
                    </div>
                    <p className="section-titles">Popup to remind people to log their progress<br/>Meant to pop up at a set time close to the end of the work day</p>
                    <img className="crop-image" src="images/work/radien4.png" alt="" width="49.5%" />
                </div>

            </div>
        </div>
    );
}
