import { Link } from "react-router-dom";
import { projects } from "../Database";
import "./work.css";
export default function Work() {

  return (
    <div id="work">
      <h1 className="" id="home-blurb">
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
            .filter((project) => project.column === "left" && project.active === true)
            .map((project) => (
              <Link to={project.path} key={project._id}>
                <img src={project.frontImage} alt="" width="100%" height="auto" className={project.border === true ? "border" : ""}/>
                <p className="project-name">{project.name}</p>
                <p className="gray">{project.year} • {project.tags}</p>
              </Link>
            ))}
        </div>

        <div className="work-columns">
          {projects
            .filter((project) => project.column === "right" && project.active === true)
            .map((project) => (
              <Link to={project.path} key={project._id}>
                <img src={project.frontImage} alt="" width="100%" height="auto" className={project.border === true ? "border" : ""}/>
                <p className="project-name">{project.name}</p>
                <p className="gray">{project.year} • {project.tags}</p>
              </Link>
            ))}
        </div>
      </div >
    </div >
  );
}
