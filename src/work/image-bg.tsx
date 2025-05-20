import { Project } from "../projects/project";

export default function ImageBG({ project }: { project: Project }) {
    return (
        <div className="flex flex-col gap-[0.5rem]">
            <div className="zoom img-bg rounded-[0.5rem] flex align-center justify-center">
                <div className="self-center my-[3rem]">
                    <img src={project.frontImage} alt="" className={project.vertical === true ? "h-[80vh] subtle-shadow" : "w-[50vw] subtle-shadow"} />
                </div>
            </div>
            {project._id === 7 && (
                <div className="flex flex-row gap-[0.5rem]">
                    <div className="zoom img-bg rounded-[0.5rem] flex align-center justify-center w-full">
                        <div className="self-center my-[3rem]">
                            <img src="/images/work/snakebiteData1.png" alt="" className="w-[30vw] subtle-shadow" />
                        </div>
                    </div>
                    <div className="zoom img-bg rounded-[0.5rem] flex align-center justify-center w-full">
                        <div className="self-center my-[3rem]">
                            <img src="/images/work/snakebiteData2.png" alt="" className="w-[30vw] subtle-shadow" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}