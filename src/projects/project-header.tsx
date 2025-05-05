import React from "react";
import { Project } from "./project";

export default function ProjectHeader({ project }: { project: Project }) {
    return (
        <div className="proj-header col48">
            <div className="w-1/2">
                <h2 className="project-heading-title semi-bold gray">{project.tags}</h2>
                <h2 className="project-heading-title semi-bold">{project.name}  <span className="gray semi-bold">{project.year}</span></h2>
            </div>
            <img src={project.frontImage} alt="" width="100%" height="auto" className={project.border === true ? "w-3/5 border" : "w-3/5"} />
            <div className="w-1/2 col40">
                <h2 className="" id="proj-sum">{project.summary}</h2>
                
                {/* MOBILE */}
                <div className="flex-col gap-[<0.5rem>]" id="proj-attributes">
                    {/* project type */}
                    <div className="flex-row">
                        <p className="w-[6.5rem] p-style semi-bold gray">PROJECT TYPE</p>
                        <span className="p-style gray">{project.type}</span>
                    </div>
                    {/* team and role */}
                    <div className="flex-row">
                        <p className="w-[6.5rem] p-style semi-bold gray">TEAM & ROLE</p>
                        <span className="p-style gray">{project.team}<br />{project.role}</span>
                    </div>
                    {/* medium */}
                    <div className="flex-row">
                        <p className="w-[6.5rem] p-style semi-bold gray">MEDIUM</p>
                        <span className="p-style gray">{project.medium}</span>
                    </div>
                    {/* tools */}
                    <div className="flex-row">
                        <p className="w-[6.5rem] p-style semi-bold gray">TOOLS</p>
                        <span className="p-style gray">{project.tools}</span>
                    </div>
                </div>

                {/* LG */}
                <div className="flex-row" id="proj-attributes">
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