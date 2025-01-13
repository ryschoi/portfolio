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
                    When such a big part of designing is critiquing, it is rare that I see that 
                    there is little left for improvement. This speaker is one of those few, rare cases. 
                    I am overtaken by how simple yet effective the design is, thereby making it my favorite thing.
                </p>
            </div>
            <div className="project-content-rest">
                <div className="basic-container">
                    <p className="section-titles" id="top-section">Pages 1 - 4</p>
                    <div className="basic-items">
                        <img src="images/work/page 1.jpg" alt="" width="50%" />
                        <img src="images/work/page 2.jpg" alt="" width="50%" />
                    </div>
                </div>
                <div className="basic-container">
                    <p className="section-titles">Pages 5 - 8</p>
                    <div className="basic-items">
                        <img src="images/work/page 3.jpg" alt="" width="50%" />
                        <img src="images/work/page 4.jpg" alt="" width="50%" />
                    </div>
                </div>
                <div className="basic-container">
                    <p className="section-titles">Pages 9 - 12</p>
                    <div className="basic-items">
                        <img src="images/work/page 5.jpg" alt="" width="50%" />
                        <img src="images/work/page 6.jpg" alt="" width="50%" />
                    </div>
                </div>
            </div>
        </div>
    );
}
