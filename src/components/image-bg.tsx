import { Project } from "../projects/project";
import Tag from "./tag";

export default function ImageBG({ project }: { project: Project }) {
    return (
        <div className="flex flex-col sm:gap-[2rem] gap-[0.5rem]">
            {/* FIRST IMAGE */}
            <div className="zoom img-bg relative rounded flex align-center justify-center overflow-hidden">

                {/* MAP BUTTONS */}
                <div className="flex gap-[0.5rem] tag-position">
                    {project.tags
                    .map((tag) => (
                        <Tag text={tag} hover={false} clicked={true} />
                    ))}
                </div>
                <div className="my-[3vw]">
                    {project.id === 12 ?
                        <video autoPlay loop playsInline muted src="images/work/open-forum/open-forum-video.mov"
                            className="w-[18rem] max-w-[85vw]" />
                        :
                        < img src={project.frontImage} alt=""
                            className={
                                project.vertical
                                    ? "w-[26rem] max-w-[85vw] subtle-shadow object-cover"
                                    : "w-[44rem] max-w-[85vw] subtle-shadow object-cover"
                            }
                        />
                    }
                </div>
            </div>
            {/* SNAKEBITE DATA IMAGES */}
            {project.id === 7 && (
                <div className="work-img-group-col">
                    <div className="zoom img-bg work-add-img-cont">
                        <div className="self-center my-[2rem]">
                            <img src="/images/work/snakebite-data/snakebiteData1.png" alt="" className="w-[30vw] min-w-[18rem] subtle-shadow" />
                        </div>
                    </div>
                    <div className="zoom img-bg work-add-img-cont">
                        <div className="self-center my-[3rem]">
                            <img src="/images/work/snakebite-data/snakebiteData2.png" alt="" className="w-[30vw] min-w-[18rem] subtle-shadow" />
                        </div>
                    </div>
                </div>
            )}

            {/* SNAKEBITE RESPONSE IMAGES */}
            {project.id === 6 && (
                <div className="work-img-group-col">
                    <div className="zoom img-bg work-add-img-cont">
                        <div className="self-center mt-[3rem] h-[50vh] overflow-hidden">
                            <img src="/images/work/snakebite-response/snakebiteWallet.png" alt="" className="w-[10rem] subtle-shadow" />
                        </div>
                    </div>
                    <div className="zoom img-bg work-add-img-cont">
                        <div className="self-center my-[3rem]">
                            <img src="/images/work/snakebite-response/snakebiteWallet5.png" alt="" className="w-[30vw] min-w-[332px] subtle-shadow" />
                        </div>
                    </div>

                </div>
            )}

            {/* DISSONANT HARMONY */}
            {project.id === 2 && (
                <div className="work-img-group-col">
                    <div className="zoom img-bg work-add-img-cont">
                        <div className="self-center my-[2rem]">
                            <img src="/images/work/calder/calder_a5_front.png" alt="" className="w-[18vw] min-w-[18rem] subtle-shadow" />
                        </div>
                    </div>
                    <div className="zoom img-bg work-add-img-cont">
                        <div className="self-center my-[2rem]">
                            <video autoPlay loop muted width="50%" className="subtle-shadow w-[16vw] min-w-[20rem]">
                                <source src="images/work/calder/calder.mov" type="video/mp4" />
                            </video>
                        </div>
                    </div>

                </div>
            )}

            {/* OPEN FORUM IMAGES */}
            {project.id === 12 && (
                <div className="work-img-group-col">
                    <div className="zoom img-bg work-add-img-cont overflow-hidden">
                        <div className="self-center my-[2rem]">
                            <img src="/images/work/open-forum/open-forum-screens.png" alt="" className="w-[30vw] min-w-[22rem] subtle-shadow self-center" />
                        </div>
                    </div>
                    <div className="zoom img-bg work-add-img-cont overflow-hidden">
                        <div className="self-center mt-[4rem] h-[50vh] object-contain">
                            <img src="/images/work/open-forum/AI details.png" alt="" className="w-[24vw] min-w-[18rem] subtle-shadow" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}