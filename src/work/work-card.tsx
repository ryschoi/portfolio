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
                <div className="w-4/5 flex flex-col gap-[1.3rem]">
                    <div className="flex flex-col gap-[0.25rem]">
                        <h3>{project.summary}</h3>
                        <p className="gray">{project.name}</p>
                    </div>
                    <p className="gray">{project.tags}</p>
                </div>
            </Link>
        </div>
    );
}