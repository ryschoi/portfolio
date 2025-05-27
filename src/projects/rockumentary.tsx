import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "./project-header";
import { Project } from "./project";
import SectionHeader from "./section-header";

export default function Rockumentary() {
    const thisProject = projects.find(p => p.path === "/rockumentary");

    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} />

            <div className="project-content-rest">
                {/* SKETCHES */}
                <div className="flex flex-col w-full gap-[3rem]">
                    <SectionHeader
                        title="Sketches & initial ideas"
                        description="Deciding which elements should be hand-drawn and which should be digital"
                        optional="I went through many rounds of initial sketches for this poster–different stances, layouts, colors. For a long time I wanted to do it mainly by hand so that I could have more flexibility when conveying the bold feel of rock and nostalgic feel of a life documentary or a movie. In the end I settled for a simple and bold Helvetica but with a nice grain to soften all the solid colors." />
                    <div className="flex flex-col gap-[1rem]">
                        <div className="flex flex-row gap-[0.5rem]">
                            <div className="flex flex-col w-full">
                                <div className="goodnotes-bg-2 rounded-[0.5rem] flex align-center justify-center w-full">
                                    <div className="self-center my-[3rem]">
                                        <img src="/images/work/rockumentary sketches.png" alt="" className="h-[18vw]" />
                                    </div>
                                </div>
                                <p className="caption cap-top">hand-traced on my ipad</p>
                            </div>
                            <div className="flex flex-col w-full">
                                <div className="goodnotes-bg rounded-[0.5rem] flex align-center justify-center w-full">
                                    <div className="self-center my-[3rem]">
                                        <img src="/images/work/rock_writing.png" alt="" className="h-[18vw]" />
                                    </div>
                                </div>
                                <p className="caption cap-top">potential title text</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="goodnotes-bg-2 rounded-[0.5rem] flex align-center justify-center w-full">
                                <div className="self-center my-[3rem]">
                                    <img src="/images/work/rock_ver1.jpg" alt="" className="h-[30vw]" />
                                </div>
                            </div>
                            <p className="caption cap-top">one of my sketched out ideas</p>
                        </div>
                    </div>
                </div>

                {/* DETAILS */}
                <div className="flex flex-col w-full gap-[3rem]">
                    <SectionHeader
                        title="Subtle details"
                        description="The design is in the details-from the grain to the iconic bowl cut"
                        optional="It was important that the poster really captured Seb as a person, which meant making sure his appearance was accurately represented in the drawing. While the crossed-arms stance that I had before (shown above) captures his confident and controlled personality, the guitar-playing stance signals that the poster is about music which is why I went with that." />
                    <div className="flex flex-row gap-[0.5rem] w-full">
                        <div className="flex flex-col w-1/3">
                            <div className="img-bg rounded-[0.5rem] flex align-center justify-center">
                                <div className="self-center my-[3rem] subtle-shadow flex flex-wrap gap-[2rem]">
                                    <img src="/images/work/rock_corner.png" alt="" className="object-contain crop-image w-[24vw]" />
                                </div>
                            </div>
                            <p className="caption cap-top">the grain is subtle but adds dimension and softens the blocky text</p>
                        </div>
                        <div className="flex flex-col w-2/3">
                            <div className="img-bg rounded-[0.5rem] flex align-center justify-center">
                                <div className="self-center my-[3rem] subtle-shadow flex flex-wrap gap-[2rem]">
                                    <img src="/images/work/rock_comp_seb.png" alt="" className="object-contain crop-image w-[24vw]" />
                                    <img src="/images/work/rock_comp_real.png" alt="" className="object-contain w-[24vw]" />
                                </div>
                            </div>
                            <p className="caption cap-top">The reference photo versus the drawing</p>
                        </div>
                    </div>
                </div>

                {/* FINAL */}
                <div className="flex flex-col gap-[3rem] w-full">
                    <h2 className="self-center mob-mid-w">Final poster</h2>
                    <div className="rounded-[0.5rem] img-bg w-full mt-[1.8rem] mb-[3.5rem] flex align-center justify-center py-[3rem] w-full">
                        <img src="images/work/rockumentary.png" alt="" className="w-[36rem] subtle-shadow" />
                    </div>
                </div>
            </div>
        </div>
    );
}