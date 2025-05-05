import React from "react";
import { Link, useLocation } from "react-router-dom";
import { projects } from "../database";
import { useRef } from "react";
import "../navigation/nav.css";
import "./work.css";
export default function Work() {
  const { pathname } = useLocation();
  const links = [
    { label: "Work", path: `/` },
    { label: "Resume", path: `/resume` },
    { label: "About", path: `/about` }
  ];

  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView()

  return (
    <div id="work" className="">
      <div className="bg-red-500 sm:bg-blue-500 md:bg-green-500 lg:bg-yellow-500">
        This box changes color based on the screen size.
      </div>
      <div id="work-top-intro">
        <Link to="/" id="navbar-home-link"><img src="images/name.png" alt="Logo" width="120" /></Link>
        <h1>
          Designing with the intention to create quality products that new users can interact with in a familiar way. Eager to combine tech, design, and data to create something meaningful and useful.
        </h1>
        <div id="text-nav" className="scroll">
          <button onClick={executeScroll}><Link to="/">See work</Link></button>
          <div>
            <Link to="/resume">Resume</Link>
            <Link to="/about">About me</Link>
          </div>
        </div>
      </div>
      <div id="work-content" ref={myRef}>
        <div className="work-single-col">
          {projects
            .filter((project) => project.active === true)
            .map((project) => (
              <div className="project-cont">
                {/* TEXT */}
                <div className="proj-details-cont">
                  <div>
                    <p className="gray">{project.tags}</p>
                    <p className="big-body-text semi-bold proj-sum-work">{project.summary}</p>
                  </div>
                  <div>
                    <p className="gray">{project.name}</p>
                    <p className="gray">{project.year}</p>
                  </div>
                </div>

                {/* IMAGE */}
                <Link to={project.path} key={project._id} className="img-cont">
                  <img src={project.frontImageBG} alt="" className={project.border === true ? "proj-img" : "proj-img"} />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
