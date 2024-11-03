import { Routes, Route, Navigate } from "react-router";
import { Link } from "react-router-dom";
import "./projects.css";

export default function MyFavoriteThings() {
    return (
        <div className="project-content" id="project-content-rockumentary">
            <div className="project-heading">
                <div className="project-heading-left">
                    <h1 className="project-heading-title">My Favorite Things</h1>
                    <p className="project-heading-details gray">February 2024<br />Graphic Design</p>
                </div>
                <p className="project-heading-des">
                    Do you think good critiquers make good designers? This speaker was my
                    first “big” purchase after I started working in high school and I wear
                    it with pride that I happened to buy such a perfectly designed product.
                    As critical as I can be, this speaker is one thing I cannot find a single
                    thing to complain about. Everything is just so thoughtfully designed with
                    no extra flairs. The design just works, therefore making it my favorite thing.
                </p>
            </div>
            <div className="project-content-rest">
                <div className="basic-container">
                    <p className="section-titles" id="top-section">Pages 1 - 4</p>
                    <div className="basic-items">
                        <img src="images/work/page 1.jpg" width="50%" />
                        <img src="images/work/page 2.jpg" width="50%" />
                    </div>
                </div>
                <div className="basic-container">
                    <p className="section-titles">Pages 5 - 8</p>
                    <div className="basic-items">
                        <img src="images/work/page 3.jpg" width="50%" />
                        <img src="images/work/page 4.jpg" width="50%" />
                    </div>
                </div>
                <div className="basic-container">
                    <p className="section-titles">Pages 9 - 12</p>
                    <div className="basic-items">
                        <img src="images/work/page 5.jpg" width="50%" />
                        <img src="images/work/page 6.jpg" width="50%" />
                    </div>
                </div>
            </div>
        </div>
    );
}