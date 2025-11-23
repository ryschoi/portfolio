import { Link } from "react-router-dom";
import { Project } from "../projects/project";
import ImageBG from "../components/image-bg";
import Tag from "components/tag";

export default function WorkCard({ project }: { project: Project }) {
    return (
        <div className="flex flex-col gap-[1.4rem] w-full">
            {/* IMAGES */}
            <Link to={project.path} key={project.id} className="flex flex-col w-full">
                <ImageBG project={project} />
            </Link>
            {/* TEXT */}
            <div className="flex justify-between">
                <div className="flex flex-col gap-[0.5vh]">
                    <Link to={project.path} key={project.id} className="flex flex-col w-full">
                        <h3>{project.summary}</h3>
                    </Link>
                    <p className="caption">{project.name}, {project.year}</p>
                </div>
                {/* Right tags */}
                {/* <div className="flex gap-[0.5rem] tag-position-2">
                    {project.tags.map((tag) => (
                        <Tag text={tag} hover={false} clicked={true} />
                    ))}
                </div> */}
            </div>
        </div>
    );
}