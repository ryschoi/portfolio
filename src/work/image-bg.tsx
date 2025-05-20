import { Link } from "react-router-dom";
import { Project } from "../projects/project";

export default function ImageBG({ project }: { project: Project }) {
    return (
        <div className="zoom img-bg flex align-center justify-center">
            <div className="self-center my-[3rem]">
                <img src={project.frontImage} alt="" className={project.vertical === true ? "h-[80vh] subtle-shadow" : "w-[50vw] subtle-shadow"} />
            </div>
        </div>
    );
}