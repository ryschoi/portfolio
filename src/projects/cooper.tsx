import React from "react";
import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "./project-header";
import { Project } from "./project";

export default function BasicsOfTypography() {
    const thisProject = projects.find(p => p.path === "/cooper");

    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} />

            <div className="project-content-rest">
                <div className="row22">
                    {/* Images coming soon. */}
                    {/* <img src="images/work/cooper.png" alt="" width="100%" className="border"/> */}
                </div>
            </div>
        </div>
    );
}
