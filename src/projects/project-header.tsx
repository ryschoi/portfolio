import { Project } from "./project";

export default function ProjectHeader({ project }: { project: Project }) {
    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col items-center mb-[5rem] w-[63vw]">
                {/* TOP TITLE */}
                <div className="w-5/6">
                    <h2 className="project-heading-title semi-bold gray">{project.tags}</h2>
                    <h2 className="project-heading-title semi-bold">{project.name}  <span className="gray semi-bold">{project.year}</span></h2>
                </div>

                {/* TOP IMAGE */}
                <div className="gray-bg w-full mt-[1.8rem] mb-[3.5rem] flex align-center justify-center pt-[2.5rem] pb-[2.5rem]">
                    <img src={project.frontImage} alt="" className={project.vertical === true ? "w-[26rem]" : "w-[44rem]"} />
                </div>

                {/* BELOW IMAGE */}
                <div className="w-5/6 flex flex-col gap-[2.4rem]">
                    {/* SUMMARY TITLE */}
                    <h2 className="" id="proj-sum">{project.summary}</h2>

                    {/* ATTRIBUTES */}
                    {/* LG */}
                    <div className="flex flex-row justify-between" id="proj-attributes">
                        {/* project type */}
                        <div className="flex flex-col gap-[0.2rem] w-[11rem]">
                            <p className="p-style semi-bold gray">PROJECT TYPE</p>
                            <p>{project.type}</p>
                        </div>
                        {/* team and role */}
                        <div className="flex flex-col gap-[0.2rem] w-[11rem]">
                            <p className="p-style semi-bold gray">TEAM & ROLE</p>
                            <p>{project.team}<br />{project.role}</p>
                        </div>
                        {/* medium */}
                        <div className="flex flex-col gap-[0.2rem] w-[11rem]">
                            <p className="p-style semi-bold gray">MEDIUM</p>
                            <p>{project.medium}</p>
                        </div>
                        {/* tools */}
                        <div className="flex flex-col gap-[0.2rem] w-[11rem]">
                            <p className="p-style semi-bold gray">TOOLS</p>
                            <p>{project.tools}</p>
                        </div>
                    </div>
                    <p className="mt-[1.4rem]">{project.description}</p>
                </div>
            </div>
        </div>
    );
}