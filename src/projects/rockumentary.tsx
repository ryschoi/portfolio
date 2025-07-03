import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "../components/project-header";
import { Project } from "./project";
import SectionHeader from "../components/section-header";
import VerticalImageSpan from "../components/vertical-image-span";
import TwoImageCaptionRock from "../components/two-image-caption-rock";
import Task from "../components/task";

export default function Rockumentary() {
    const thisProject = projects.find(p => p.path === "/rockumentary");

    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} />
            
            <div className="project-content-rest">
                <Task task="Create a poster for a Berklee student's British-rock-themed senior recital" processItems={["Sketching and initial ideas", "Subtle details"]} />
                {/* SKETCHES */}
                <div className="flex flex-col w-full gap-[3rem]" id="sketching-and-initial-ideas">
                    <SectionHeader
                        title="Part 1"
                        description="Sketching and initial ideas"
                        optional="I went through many rounds of initial sketches for this poster–different stances, layouts, colors. For a long time I wanted to do it mainly by hand so that I could have more flexibility when conveying the bold feel of rock and nostalgic feel of a life documentary or a movie. In the end I settled for a simple and bold Helvetica but with a nice grain to soften all the solid colors." />
                    <div className="flex flex-col gap-[1rem]">
                        <TwoImageCaptionRock path1="/images/work/rockumentary/rockumentary sketches.png" cap1="Hand-traced on my ipad" path2="/images/work/rockumentary/rock_writing.png" cap2="Potential title text" />
                        <div className="flex flex-col w-full">
                            <div className="img-bg rounded flex align-center justify-center w-full">
                                <div className="self-center my-[3rem]">
                                    <img src="/images/work/rockumentary/rock_ver1.jpg" alt="" className="h-[30rem] subtle-shadow" />
                                </div>
                            </div>
                            <p className="caption cap-top">one of my sketched out ideas</p>
                        </div>
                    </div>
                </div>

                {/* DETAILS */}
                <div className="flex flex-col w-full gap-[3rem]" id="subtle-details">
                    <SectionHeader
                        title="Part 2"
                        description="Subtle details"
                        optional="It was important that the poster really captured Seb as a person, which meant making sure his appearance was accurately represented in the drawing. While the crossed-arms stance that I had before (shown above) captures his confident and controlled personality, the guitar-playing stance signals that the poster is about music which is why I went with that." />
                    <div className="flex flex-row gap-[0.5rem] w-full">
                        <div className="flex flex-col w-1/3">
                            <div className="img-bg rounded flex align-center justify-center">
                                <div className="self-center my-[3rem] subtle-shadow flex flex-wrap gap-[2rem]">
                                    <img src="/images/work/rockumentary/rock_corner.png" alt="" className="object-contain crop-image w-[24vw]" />
                                </div>
                            </div>
                            <p className="caption cap-top">the grain is subtle but adds dimension and softens the blocky text</p>
                        </div>
                        <div className="flex flex-col w-2/3">
                            <div className="img-bg rounded flex align-center justify-center">
                                <div className="self-center my-[3rem] subtle-shadow flex flex-wrap gap-[2rem]">
                                    <img src="/images/work/rockumentary/rock_comp_seb.png" alt="" className="object-contain crop-image w-[24vw]" />
                                    <img src="/images/work/rockumentary/rock_comp_real.png" alt="" className="object-contain w-[24vw]" />
                                </div>
                            </div>
                            <p className="caption cap-top">The reference photo versus the drawing</p>
                        </div>
                    </div>
                </div>

                {/* FINAL */}
                <div className="section">
                    <h2 className="self-center mob-mid-w">Final poster</h2>
                    <VerticalImageSpan path="images/work/rockumentary/rockumentary.png" />
                </div>
            </div>
        </div>
    );
}