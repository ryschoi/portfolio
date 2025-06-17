import { Project } from "../projects/project";

export default function ImageBG({ project }: { project: Project }) {
    return (
        <div className="flex flex-col sm:gap-[2rem] gap-[0.5rem]">
            {/* FIRST IMAGE */}
            <div className="zoom img-bg rounded-[0.5rem] flex align-center justify-center overflow-hidden">
                <div className="my-[3vw]">
                    <img src={project.frontImage} alt=""
                        className={
                            project.vertical
                                ? "w-[26rem] max-w-[85vw] subtle-shadow object-cover"
                                : "w-[44rem] max-w-[85vw] subtle-shadow object-cover"
                        }
                    />
                </div>
            </div>
            {/* SNAKEBITE DATA IMAGES */}
            {project.id === 7 && (
                <div className="flex flex-wrap gap-[0.5rem]">
                    <div className="zoom img-bg rounded-[0.5rem] flex align-center justify-center w-full max-w-[655px]">
                        <div className="self-center my-[3rem]">
                            <img src="/images/work/snakebite-data/snakebiteData1.png" alt="" className="w-[30vw] min-w-[332px] subtle-shadow" />
                        </div>
                    </div>
                    <div className="zoom img-bg rounded-[0.5rem] flex align-center justify-center w-full max-w-[655px]">
                        <div className="self-center my-[3rem]">
                            <img src="/images/work/snakebite-data/snakebiteData2.png" alt="" className="w-[30vw] min-w-[332px] subtle-shadow" />
                        </div>
                    </div>
                </div>
            )}

            {/* SNAKEBITE RESPONSE IMAGES */}
            {project.id === 6 && (
                <div className="flex flex-wrap gap-[0.5rem]">
                    <div className="zoom img-bg rounded-[0.5rem] flex align-center justify-center w-full max-w-[655px]">
                        <div className="self-center mt-[3rem] h-[50vh] overflow-hidden">
                            <img src="/images/work/snakebite-response/snakebiteWallet.png" alt="" className="w-[10rem] subtle-shadow" />
                        </div>
                    </div>
                    <div className="zoom img-bg rounded-[0.5rem] flex align-center justify-center w-full max-w-[655px]">
                        <div className="self-center my-[3rem]">
                            <img src="/images/work/snakebite-response/snakebiteWallet5.png" alt="" className="w-[30vw] min-w-[332px] subtle-shadow" />
                        </div>
                    </div>

                </div>
            )}

            {/* DISSONANT HARMONY */}
            {project.id === 2 && (
                <div className="flex flex-wrap gap-[0.5rem]">
                    <div className="zoom img-bg rounded-[0.5rem] flex align-center justify-center w-full max-w-[655px]">
                        <div className="self-center my-[2rem]">
                            <img src="/images/work/calder/calder_a5_front.png" alt="" className="w-[16rem] subtle-shadow" />
                        </div>
                    </div>
                    <div className="zoom img-bg rounded-[0.5rem] flex align-center justify-center w-full max-w-[655px]">
                        <div className="self-center my-[2rem]">
                            <video autoPlay loop muted width="50%" className="subtle-shadow w-[16rem] min-w-[332px]">
                                <source src="images/work/calder/calder.mov" type="video/mp4" />
                            </video>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
}