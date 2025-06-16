import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "../components/project-header";
import { Project } from "./project";
import Task from "../components/task";

export default function BasicsOfTypography() {
    const thisProject = projects.find(p => p.path === "/cooper");

    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} />

            <div className="project-content-rest">
                <Task task="Rethink the experience of the job information page, and redesign accordingly" processItems={["Research", "User testing", "UI redesigns"]} />
            </div>
        </div>
    );
}
