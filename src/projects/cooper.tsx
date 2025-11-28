import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "../components/project-header";
import { Project } from "./project";
import { section } from "./section";

export default function Cooper() {
    const thisProject = projects.find(p => p.path === "/cooper");
    const sections: section[] = [
        { header: "01. Semester 1: UX Designer", description:"Learning my way around the project and how to work with developers" },
        { header: "02. Semester 2+: Design Lead", description:"Design direction for the project" }
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
