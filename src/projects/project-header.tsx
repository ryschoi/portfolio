import React from "react";
import { Project } from "./project";

export default function ProjectHeader({ project }: { project: Project }) {
    return (
        <div className="proj-header col48">
            <div className="slim">
                <h2 className="project-heading-title semi-bold gray">{project.tags}</h2>
                <h2 className="project-heading-title semi-bold">{project.name}  <span className="gray semi-bold">{project.year}</span></h2>
            </div>
            
            <img src={project.frontImage} alt="" width="100%" height="auto" className={project.border === true ? "border" : ""} />
            <div className="slim col40">
                <h2 className="" id="proj-sum">{project.summary}</h2>
                <div className="row-space-between" id="proj-attributes">
                    <div><p className="p-style semi-bold gray">PROJECT TYPE</p><span className="p-style gray">{project.type}</span></div>
                    <div><p className="p-style semi-bold gray">TEAM & ROLE</p><span className="p-style gray">{project.team}<br />{project.role}</span></div>
                    <div><p className="p-style semi-bold gray">MEDIUM</p><span className="p-style gray">{project.medium}</span></div>
                    <div><p className="p-style semi-bold gray">TOOLS</p><span className="p-style gray">{project.tools}</span></div>
                </div>
                <p className="description">{project.description}</p>
            </div>
        </div>
    );
}