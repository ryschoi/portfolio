import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "../components/project-header";
import { Project } from "./project";
import SectionHeader from "../components/section-header";
import VerticalImageSpan from "../components/vertical-image-span";
import TwoImageCaptionRock from "../components/two-image-caption-rock";
import { section } from "./section";

export default function Rockumentary() {
    const thisProject = projects.find(p => p.path === "/rockumentary");
    const sections: section[] = [
        { id: "sketching-and-initial-ideas", header: "Sketching and initial ideas", description: "Creating the poster format and style", optional: "To start, I went through many rounds of initial sketches for this poster: different stances, layouts, and colors. For a long time, I wanted to do it mainly by hand so that I could have more flexibility when conveying the bold feel of rock and nostalgic feel of a life documentary or a movie. In the end, though, I settled for a simple and bold Helvetica but with a nice grain to soften all the solid colors." },
        { id: "subtle-details", header: "Subtle details", description: "Capturing the artist's brand through the little details", optional: "It was important that the poster really captured Seb as a person, which meant making sure his appearance was accurately represented in the drawing. While the crossed-arms stance that I had before (shown above) captures his confident and controlled personality, the guitar-playing stance signals that the poster is about music which is why I went with that." }
    ]

    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} sections={sections} />
            <div className="project-content-rest">
                {/* <h4 className="w-slim gray">The invitation for one of my greatest honors as a designer came one summer Friday afternoon when a good friend of mine at the Berklee College of Music asked me if I wanted to design the poster for his senior recital. While we share a love for music, the rock music that he loves is nothing like the mellow tunes of the music I listen to and embody. Still, I took this on as a way to challenge myself to do something of a different feel. After many FaceTime consultations from coast to coast of the US and getting the drawing of my friend’s iconic bowl-cut and glasses just right, I ended up with this poster that captures the boldness of rock, nostalgia of a documentary, and my friend's personal brand. “Rockumentary” is the musical documentary of the rock music that shaped his life.</h4> */}
                {/* SKETCHES */}
                <div className="flex flex-col w-full gap-[3rem]" id="sketching-and-initial-ideas">
                    <SectionHeader title={sections[0].header} description={sections[0].description} optional={sections[0].optional} />
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
                    <SectionHeader title={sections[1].header} description={sections[1].description} optional={sections[1].optional} />
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
                    <h2 className="w-slim">Final poster</h2>
                    <VerticalImageSpan path="images/work/rockumentary/rockumentary.png" />
                </div>
            </div>
        </div>
    );
}