import { Link } from "react-router-dom";
import { Project } from "../projects/project";

export default function WorkCard({ project }: { project: Project }) {
    return (
        <div className="project-cont">
            {/* TEXT */}
            <div className="w-1/3 flex flex-col gap-[4rem] mt-[2.6rem]">
                <div>
                    <p className="gray">{project.tags}</p>
                    <h3 className="semi-bold proj-sum-work">{project.summary}</h3>
                </div>
                <div>
                    <p className="gray">{project.name}</p>
                    <p className="gray">{project.year}</p>
                </div>
            </div>

            {/* IMAGE */}
            <Link to={project.path} key={project._id} className="img-cont">
                <img src={project.frontImage} alt="" className={project.vertical === true ? "proj-img w-[26rem]" : "proj-img w-[44rem]"} />
            </Link>
        </div>
    );
}