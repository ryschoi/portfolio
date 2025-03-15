import { Project } from "./Project";

export default function ProjectHeader({ project }: { project: Project }) {
    return (
        <div className="proj-two-thirds slim-fit">
            <div className="col8">
                <h2 className="project-heading-title">{project.name}</h2>
                <p>{project.summary}</p>
            </div>
            <p className="project-heading-details gray">{project.year}<br />{project.tags}</p>
            <div className="row-space-between" id="proj-attributes">
                <div>
                    <p className="gray bold">PROJECT TYPE</p>
                    <p>{project.type}</p>
                </div>
                <div>
                    <p className="gray bold">TEAM & ROLE</p>
                    <p>{project.role}</p>
                </div>
                <div>
                    <p className="gray bold">MEDIUM</p>
                    <p>{project.medium}</p>
                </div>
                <div>
                    <p className="gray bold">TOOLS</p>
                    <p>{project.tools}</p>
                </div>
            </div>
            <p className="description">{project.description}</p>
        </div>
    );
}