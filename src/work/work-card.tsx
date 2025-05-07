import { Link } from "react-router-dom";
import { Project } from "../projects/project";

export default function WorkCard({ project }: { project: Project }) {
    return (
        <div className="project-cont">
            {/* TEXT */}
            <div className="w-1/3 flex flex-col gap-[4rem] mt-[2.6rem]">
                <div className="flex flex-col gap-[0.2rem]">
                    <p className="gray">{project.tags}</p>
                    <Link to={project.path} key={project._id} className="mt-[0.4rem] mb-[0rem] h3">
                        {project.summary}
                    </Link>
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