import "./projects.css";

export default function Morningtide() {
    return (
        <div className="project-content" id="project-content-rockumentary">
            <div className="project-heading">
            <div className="project-heading-left">
                <h1 className="project-heading-title">Morningtide</h1>
                <p className="project-heading-details gray">2022<br />Graphic Design</p>
                </div>
                <p className="description">
                    This was a spec ad poster I made in high school for a local business
                    as part of my first graphic design class. I created the concept of this
                    poster based on the minimal and warm feel of the store. The logo is the
                    store’s official one and the image was taken and edited by me in store.
                </p>
            </div>
            <div className="project-content-rest">
                <img src="images/work/morningtide.png" alt="" width="100%" />
            </div>
        </div>
    );
}