import { Link } from "react-router-dom";
import { Project } from "../projects/project";
import ImageBG from "../components/image-bg";

export default function WorkCard({ project }: { project: Project }) {
    return (
        <div className="flex flex-col gap-[1.4rem] w-full">
            {/* IMAGES */}
            <Link to={project.path} className="flex flex-col w-full">
                <ImageBG project={project} />
            </Link>
            {/* TEXT */}
            <div className="flex justify-between">
                <div className="flex flex-col gap-[0.5vh]">
                    <Link to={project.path} className="flex flex-col w-full">
                        <h3>{project.summary}</h3>
                    </Link>
                    <p className="caption">{project.name}, {project.year}</p>
                </div>
            </div>
        </div>
    );
}