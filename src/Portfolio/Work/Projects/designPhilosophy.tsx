import { Routes, Route, Navigate } from "react-router";
import { Link } from "react-router-dom";
import "./projects.css";

export default function DesignPhilosophy() {
    return (
        <div className="project-content">
            <div className="project-heading">
                <div className="project-heading-left">
                    <h1 className="project-heading-title">Design Philosophy</h1>
                    <p className="project-heading-details gray">February 2024<br />Typography</p>
                </div>
                <p className="project-heading-des">
                    “Design is not just what it looks like and feels like. Design is
                    how it works.” -Steve Jobs is my design philosophy and the quote
                    that these cut up, layered, and rotated words represent. This project
                    was for my studio for Typographic Systems and was for sure one of
                    the more difficult design projects I’ve done as I was challenged to
                    rethink how I use and orient type to not just be the literal text, 
                    but to make the deisgn itself.
                </p>
            </div>
            <div className="project-content-rest">
                <div className="basic-items">
                    <div className="basic-container half-column">
                        <div>
                            <img className="border" src="images/work/quote1.png" width="100%" />
                            <p>Illustration of eye and hand, the ways you see and feel things</p>
                        </div>
                        <div>
                            <img className="border" src="images/work/desphil_1.png" width="100%" />
                            <p>“works” is made up of the word “design” to show that the construction of design creates its workings</p>
                        </div>
                        <div>
                            <img className="border" src="images/work/desphil_2.png" width="100%" />
                            <p>Illustration of eye and hand, the ways you see and feel things</p>
                        </div>
                    </div>
                    <div className="basic-container half-column">
                        <div>
                            <img className="border" src="images/work/desphil_3.png" width="100%" />
                            <p>Illustration of eye and hand, the ways you see and feel things</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}