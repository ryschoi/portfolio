import { Link } from "react-router-dom";
import { Project } from "../projects/project";
import ImageBG from "./image-bg";

export default function WorkCard({ project }: { project: Project }) {
    return (
        <div className="flex flex-col gap-[1vh] w-full">
            <Link to={project.path} key={project.id} className="flex flex-col gap-[2rem] w-full">
                <ImageBG project={project} />
                    <h3>{project.summary}</h3>
                {/* <div className="flex gap-[1rem]">
                    <h3>{project.summary}</h3>
                    {project.tags
                        .map((tag) => (
                            <button className="tag-no-hover py-[6px] px-[16px] rounded-[0.5rem]">{tag}</button>
                        ))}
                </div> */}
            </Link>
            <p className="caption">{project.name}, {project.year}</p>
        </div>
    );
}