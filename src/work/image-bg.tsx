import { Link } from "react-router-dom";
import { Project } from "../projects/project";

export default function ImageBG({ project }: { project: Project }) {
    return (
        <div className="img-bg w-3/5 h-[44vw] flex align-center justify-center">
            <Link to={project.path} key={project._id} className={project.vertical === true ? "self-center h-9/10" : "self-center w-9/10"}>
                <img src={project.frontImage} alt="" className={project.vertical === true ? "h-full" : "w-full"} />
            </Link>
        </div>
    );
}