import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "../components/project-header";
import { Project } from "./project";
import Task from "../components/task";

export default function OpenForum() {
    const thisProject = projects.find(p => p.path === "/open-forum");

    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} />

            <div className="project-content-rest">
                <Task task="Design a mobile app that will increase Northeastern students' sense of belongingness on campus" processItems={["User interviews and personas", "Ideation", "Low-fidelity prototypes and user testing", "High-fidelity prototype"]} />
            </div>
        </div>
    );
}
