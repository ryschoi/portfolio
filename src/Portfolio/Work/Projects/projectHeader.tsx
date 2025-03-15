import { Project } from "./Project";

export default function ProjectHeader({ project }: { project: Project }) {
    return (
        <div className="col48 slim-fit">
            <div className="col22-align-left">
                <div className="col8">
                    <h2 className="project-heading-title">{project.name}</h2>
                    <p>{project.summary}</p>
                </div>
                <p className="project-heading-details gray">{project.year}<br />{project.tags}</p>
            </div>
            <div className="row-space-between" id="proj-attributes">
                <div><p className="gray bold">PROJECT TYPE</p>{project.type}</div>
                <div><p className="gray bold">TEAM & ROLE</p>{project.team}<br />{project.role}</div>
                <div><p className="gray bold">MEDIUM</p>{project.medium}</div>
                <div><p className="gray bold">TOOLS</p>{project.tools}</div>
            </div>
            <p className="description">{project.description}</p>
        </div>
    );
}