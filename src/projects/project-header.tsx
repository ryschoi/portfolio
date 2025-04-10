import React from "react";
import { Project } from "./project";

export default function ProjectHeader({ project }: { project: Project }) {
    return (
        <div className="proj-header col48">
            <div className="slim">
                <h2 className="project-heading-title semi-bold light-gray">{project.tags}</h2>
                <h2 className="project-heading-title semi-bold">{project.name}  <span className="light-gray semi-bold">{project.year}</span></h2>
            </div>
            
            <img src={project.frontImage} alt="" width="100%" height="auto" className={project.border === true ? "border" : ""} />
            <div className="slim col40">
                <h2 className="" id="proj-sum">{project.summary}</h2>
                <div className="row-space-between" id="proj-attributes">
                    <div><p className="p-style semi-bold">PROJECT TYPE</p><span className="p-style">{project.type}</span></div>
                    <div><p className="p-style semi-bold">TEAM & ROLE</p><span className="p-style">{project.team}<br />{project.role}</span></div>
                    <div><p className="p-style semi-bold">MEDIUM</p><span className="p-style">{project.medium}</span></div>
                    <div><p className="p-style semi-bold">TOOLS</p><span className="p-style">{project.tools}</span></div>
                </div>
                <p className="description">{project.description}</p>
            </div>
        </div>
    );
}