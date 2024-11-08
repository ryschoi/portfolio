import { Routes, Route, Navigate } from "react-router";
import { Link } from "react-router-dom";
import "./projects.css";

export default function TextDiagram() {
    return (
        <div className="project-content" id="project-content-rockumentary">
            <div className="project-heading">
                <div className="project-heading-left">
                    <h1 className="project-heading-title">Text Diagram</h1>
                    <p className="project-heading-details gray">
                        February 2024<br />Information design  | Typography
                    </p>
                </div>

                <p className="project-heading-des">
                    This is a map of the information covered in a podcast episode from the
                    podcast “99% Invisible”. This project, focusing on information design,
                    was done in the studio section for Design Process and Practices. It is
                    one of my favorites from pieces I’ve done at school as it was when I
                    discovered my love for information design. Unlike most designs that take
                    lots of drafting and sketching, this one came together rather naturally.
                    I loved figuring out how to fit together all the information,
                    establishing the typographic hierarchy, and coming up with the simple
                    lines and circle “arrows” that guide the viewer from one point to the next.
                </p>
            </div>


            <div className="project-rest-align-left">
                <img className="crop-image" src="images/work/TextDiagramB&W.png" width="100%" />
                <p className="gray space-after">Black and white version used for submission</p>
                <img className="crop-image" src="images/work/TextDiagramColor.png" width="100%" />
                <p className="gray space-after">Lightly colored version</p>
            </div>
        </div>
    );
}