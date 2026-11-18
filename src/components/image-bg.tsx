import { Project } from "../projects/project";
import Pill from "./pill";

export default function ImageBG({ project, showTags = true }: { project: Project; showTags?: boolean }) {
    return (
        <div className="flex flex-col gap-[0.5rem]">
            {/* FIRST IMAGE */}
            {project.id === 7 ?
                <div className="zoom img-bg relative round flex justify-center overflow-hidden">
                    {/* TAGS */}
                    {showTags && <div className="flex gap-[0.5rem] tag-position">
                        {project.tags.map((tag) => (
                            <Pill hover={false} clicked={true} text={tag} />
                        ))}
                    </div>}
                    <div className="mt-[6vw] md:mt-[3vw]">
                        <img src={project.frontImage} alt=""
                            className="w-[18rem] h-[22rem] md:w-[34rem] md:h-[40rem] subtle-shadow object-cover object-top"
                        />
                    </div>
                </div>
                :
                <div className="zoom img-bg relative round flex align-center justify-center overflow-hidden">
                    {/* MAP BUTTONS */}
                    {showTags && <div className="flex gap-[0.5rem] tag-position">
                        {project.tags
                            .map((tag) => (
                                <Pill text={tag} hover={false} clicked={true} />
                            ))}
                    </div>}
                    {/* Cooper: the box matches the Open Forum box's height (its 870×1786 video at
                        14rem/18rem wide, plus 5vw/3vw margins top and bottom). The video fills that height
                        minus equal 1.5rem/2rem gaps top and bottom; if it's wider than the box, the sides crop. */}
                    <div className={project.id === 5
                        ? "w-full flex justify-center py-[1.5rem] md:py-[2rem] h-[calc(28.74rem_+_10vw)] md:h-[calc(36.95rem_+_6vw)]"
                        : "my-[5vw] md:my-[3vw]"}>
                        {project.id === 12 ? (
                            <video autoPlay loop playsInline muted src="images/work/open-forum/open-forum-video.mov"
                                className="w-[14rem] md:w-[18rem] round-[3rem]" />
                        ) : project.id === 13 ? (
                            <video autoPlay loop playsInline muted src="images/work/alihacks/full_proto.mov"
                                className="w-[44rem] max-w-[85vw] subtle-shadow object-cover" />
                        ) : project.id === 5 ? (
                            // Home page only: the Cooper project page header keeps the still frontImage.
                            <video autoPlay loop playsInline muted src="images/work/cooper/job_compare.mov"
                                poster={project.frontImage}
                                className="h-full w-auto max-w-none subtle-shadow round" />
                        ) : project.id === 14 ? (
                            <img src={project.frontImage} alt="" className="w-[44rem] max-w-[85vw] object-cover" />
                        ) : (
                            <img src={project.frontImage} alt=""
                                className={
                                    project.vertical
                                        ? "w-[26rem] max-w-[85vw] subtle-shadow object-cover"
                                        : "w-[44rem] max-w-[85vw] subtle-shadow object-cover"
                                }
                            />
                        )}
                    </div>
                </div>
            }

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

            {/* COOPER IMAGES */}
            {project.id === 5 && (
                <div className="work-img-group-col">
                    {/* Pinned 2rem in from the top left and bigger than the box, so it gets cut off at
                        the bottom and right edges. */}
                    <div className="zoom img-bg work-add-img-cont overflow-hidden h-[24rem] !justify-start">
                        <div className="self-start mt-[2rem] ml-[2rem]">
                            <img src="/images/work/cooper/compare_prev.png" alt=""
                                className="h-[26rem] w-auto max-w-none subtle-shadow round" />
                        </div>
                    </div>
                    <div className="zoom img-bg work-add-img-cont overflow-hidden h-[24rem] !justify-start">
                        <div className="self-center mt-[2rem]">
                            <img src="/images/work/cooper/view review.png" alt="" className="w-[36vw] min-w-[22rem] subtle-shadow" />
                        </div>
                    </div>
                </div>
            )}

            {/* DISSONANT HARMONY */}
            {project.id === 2 && (
                <div className="work-img-group-col">
                    <div className="zoom img-bg work-add-img-cont">
                        <div className="self-center my-[3rem] place-content-center">
                            <img src="/images/work/calder/calder_a5_front.png" alt="" className="w-[18vw] min-w-[18rem] subtle-shadow self-center" />
                        </div>
                    </div>
                    <div className="zoom img-bg work-add-img-cont">
                        <div className="self-center my-[2rem]">
                            <video autoPlay loop playsInline muted width="50%" className="subtle-shadow w-[16vw] min-w-[20rem]">
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
                        <div className="self-center my-[2rem] mx-[3vw]">
                            <img src="/images/work/open-forum/open-forum-screens.png" alt="" className="subtle-shadow self-center" />
                        </div>
                    </div>
                    <div className="zoom img-bg work-add-img-cont overflow-hidden">
                        <div className="self-center mt-[2rem] md:mt-[4rem] h-[50vh] object-contain">
                            <img src="/images/work/open-forum/AI details.png" alt="" className="w-[24vw] min-w-[18rem] subtle-shadow" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}