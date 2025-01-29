import { Project } from "./Project";

export default function ProjectHeader({ project }: { project: Project }) {
    return (
        <div className="row-space-between">
            <div className="col-space-between">
                <h1 className="project-heading-title">{project.name}</h1>
                <p className="project-heading-details gray">{project.year}<br />{project.tags}</p>
            </div>
            <p className="description">{project.description}</p>
        </div>
    );
}