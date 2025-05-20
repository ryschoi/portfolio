import { Link } from "react-router-dom";
import { Project } from "../projects/project";
import ImageBG from "./image-bg";

export default function WorkCard({ project }: { project: Project }) {
    return (
        <div className="">
            <Link to={project.path} key={project._id} className="flex flex-col gap-[2rem] w-full">
                {/* IMAGE */}
                <ImageBG project={project} />

                {/* TEXT */}
                <div className="flex flex-col gap-[0.4rem]">
                    <h3>{project.summary}</h3>
                    <p className="caption">{project.name}, {project.year}</p>
                </div>
            </Link>
        </div>
    );
}