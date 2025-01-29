import { Link } from "react-router-dom";
// import Filters from "./Filters";
import "./work.css";
export default function Work() {
  const projects = [
    { id: 1, column: "left", name: "Rockumentary", path: `/rockumentary`, year: 2024, tags: "Graphic design", frontImage: "images/work/rockumentary.png", border: false },
    { id: 2, column: "left", name: "Dissonant Harmony", path: `/dissonantHarmony`, year: 2024, tags: "Graphic design", frontImage: "images/work/calder.png", border: false },
    { id: 3, column: "left", name: "Text Diagram", path: `/textDiagram`, year: 2024, tags: "Information design", frontImage: "images/work/textDiagramColor.png", border: false },
    { id: 4, column: "left", name: "My Favorite Things Research Dossier", path: `/myFavoriteThings`, year: 2024, tags: "Information design", frontImage: "images/work/page 3.jpg", border: false },
    { id: 5, column: "right", name: "Snakebite Response Poster", path: `/snakebiteResponse`, year: 2024, tags: "Information design", frontImage: "images/work/snakebitePrevention.png", border: false },
    { id: 6, column: "right", name: "Snakebite Data Story Poster", path: `/snakebiteData`, year: 2024, tags: "Information Design  |  Data analysis  |  Data visualization", frontImage: "images/work/snakebiteData.png", border: false },
    // { id: 7, column: "right", name: "Radien", path: `/radien`, year: 2024, tags: "UX research | UI/UX", frontImage: "images/work/radien.png", border: false },
    { id: 8, column: "right", name: "Basics of Typography", path: `/basicsOfTypography`, year: 2024, tags: "Graphic design", frontImage: "images/work/typography.jpg", border: false },
    { id: 9, column: "right", name: "Design Philosophy", path: `/designPhilosophy`, year: 2024, tags: "Typography", frontImage: "images/work/quote1.png", border: true }
  ];

  return (
    <div id="work">
      <h1 id="home-blurb">
        {/* Experienced in...<br />
        conducting user research,<br />
        designing clean and user-friendly interfaces,<br />
        crafting compelling data stories,<br />
        and writing efficient and maintainable code.<br /> */}

        {/* Experienced in UI/UX, information design, web development, and data analysis & visualization. */}
        Looking to combine tech, design, and data to create something meaningful and useful.
        {/* Designing with the intention to ensure quality, functional products and satisfied users. */}

        {/* Old blurb */}
        {/* Graphic & information design, UI, UX, data visualization, etc. I thrive at the
        intersection of design and technology and create solutions that strike the balance
        between systematic order and creative freedom. */}
      </h1>

      <div id="work-content">
        <div className="work-columns">
          {projects
            .filter((project) => project.column == "left")
            .map((project) => (
              <Link to={project.path} key={project.id}>
                <img src={project.frontImage} alt="" width="100%" className={project.border === true ? "border" : ""}/>
                <p className="project-name">{project.name}</p>
                <p className="gray">{project.year} • {project.tags}</p>
              </Link>
            ))}
        </div>

        <div className="work-columns">
          {projects
            .filter((project) => project.column == "right")
            .map((project) => (
              <Link to={project.path} key={project.id}>
                <img src={project.frontImage} alt="" width="100%" className={project.border === true ? "border" : ""}/>
                <p className="project-name">{project.name}</p>
                <p className="gray">{project.year} • {project.tags}</p>
              </Link>
            ))}
        </div>
      </div >
    </div >
  );
}
