import { Link } from "react-router-dom";
import { Project } from "../projects/project";
import ImageBG from "./image-bg";

export default function WorkCard({ project }: { project: Project }) {
    return (
        <div className="flex flex-col gap-[0.2rem] w-full">
            <Link to={project.path} key={project.id} className="flex flex-col gap-[2rem] w-full">
                <ImageBG project={project} />
                <h3>{project.summary}</h3>
            </Link>
            <p className="caption">{project.name}, {project.year}</p>
        </div>
    );
}