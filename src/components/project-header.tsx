import { Project } from "../projects/project";
import Tag from "./tag";

export default function ProjectHeader({ project }: { project: Project }) {
    return (
        <div className="w-full flex flex-col justify-center">
            <div className="flex flex-col items-center mb-[6rem] w-full">
                {/* TOP TITLE */}
                <div className="mob-mid-w flex flex-col gap-[1.5vh]">
                    <h1>{project.name}  <span className="gray">{project.year}</span></h1>
                    <div className="flex flex-wrap gap-[0.5rem]">
                        {project.tags
                            .map((tag) => (
                                <Tag text={tag} hover={false} clicked={true} />
                            ))}
                    </div>
                </div>

                {/* IMAGE */}
                <div className="rounded-[0.5rem] img-bg w-full mt-[1.8rem] mb-[3.5rem] flex align-center justify-center py-[3vw]">
                    <img src={project.frontImage} alt="" className={project.vertical === true ? "w-[26rem] max-w-[85vw] subtle-shadow" : "w-[44rem] max-w-[85vw] subtle-shadow"} />
                </div>

                {/* BELOW IMAGE */}
                <div className="flex flex-col gap-[2.4rem] self-center mob-mid-w">
                    {/* SUMMARY TITLE */}
                    <h2 className="">{project.summary}</h2>

                    {/* ATTRIBUTES */}
                    {/* LG */}
                    <div className="flex flex-wrap justify-between gap-y-[2rem]" id="proj-attributes">
                        {/* project type */}
                        <div className="flex flex-col gap-[0.2rem] w-[10rem]">
                            <p className="caption">PROJECT TYPE</p>
                            <p>{project.type}</p>
                        </div>
                        {/* team and role */}
                        <div className="flex flex-col gap-[0.2rem] w-[10rem]">
                            <p className="caption">TEAM & ROLE</p>
                            <p>{project.team}<br />{project.role}</p>
                        </div>
                        {/* medium */}
                        <div className="flex flex-col gap-[0.2rem] w-[10rem]">
                            <p className="caption">MEDIUM</p>
                            <p>{project.medium}</p>
                        </div>
                        {/* tools */}
                        <div className="flex flex-col gap-[0.2rem] w-[10rem]">
                            <p className="caption">TOOLS</p>
                            <p>{project.tools}</p>
                        </div>
                    </div>
                    <p className="mt-[1.4rem]">{project.description}</p>
                </div>
            </div>
            {/* <hr /> */}
        </div>
    );
}