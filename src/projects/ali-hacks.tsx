import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "../components/project-header";
import { Project } from "./project";
import { section } from "./section";

export default function AliHacks() {
    const thisProject = projects.find(p => p.path === "/ali-hacks");
    const sections: section[] = [
        { header: "01. Internal application portal", description:"" },
        { header: "02. Sponsorship package", description:"" }
    ]
    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} sections={sections} />
            <div className="project-content-rest">
                <p className="w-slim self-center">Process coming soon.</p>
            </div>
        </div>
    );
}
