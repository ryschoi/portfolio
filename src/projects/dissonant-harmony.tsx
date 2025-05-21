import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "./project-header";
import { Project } from "./project";
import SectionHeader from "./section-header";

export default function DissonantHarmony() {
    const thisProject = projects.find(p => p.path === "/dissonant-harmony");

    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} />

            <div className="project-content-rest">
                <SectionHeader
                    title="Concept"
                    description="Reflecting the idea of dissonant harmony in the illustrations and typography"
                    optional="I went with the theme of a deconstructed sculpture which I
                            created by first tracing over an image of Big Crinkly using
                            the Pen tool and then separating it by its individual parts.
                            The display of the individual pieces plays along with the idea
                            of “dissonant”–that all the individual pieces of the whole
                            sculpture are on their own dissonant. All a little random, a little rough-cut, jagged almost, but somehow coming together
                            and creating a harmonious result." />

                {/* TYPE */}
                <div className="flex flex-col gap-[3rem] w-full align-center">
                    <SectionHeader
                        title="Type"
                        description="Aglet Mono: geometric, like Calder's artwork"
                        optional="The title words vary heavily in style to emphasize a dissonance between two objects." />
                    <div className="flex flex-row gap-[0.5rem]">
                        <div className="calder-bg rounded-[0.5rem] flex align-center justify-center w-3/5">
                            <div className="self-center my-[3rem]">
                                <img src="/images/work/calder_type-06.png" alt="" className="h-[18vw]" />
                            </div>
                        </div>
                        <div className="calder-bg rounded-[0.5rem] flex align-center justify-center w-full">
                            <div className="self-center my-[3rem]">
                                <img src="/images/work/calder_type-07.png" alt="" className="h-[18vw]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* DARK VERSIONS */}
                <div className="flex flex-col gap-[3rem] w-full align-center">
                    <h2 className="self-center w-(--mid-width)">After trying out both light and dark backgrounds, I found that the light background worked better as it let the colors in the sculpture pop more whereas in the dark background the colors got washed out.</h2>
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-[0.5rem]">
                            <div className="flex flex-col w-full">
                                <div className="img-bg rounded-[0.5rem] flex align-center justify-center w-full">
                                    <div className="self-center my-[3rem]">
                                        <img src="/images/work/calder_prev1.png" alt="" className="w-[24vw] subtle-shadow" />
                                    </div>
                                </div>
                                <p className="caption cap-top">a5 flyer draft</p>
                            </div>
                            <div className="flex flex-col w-full">
                                <div className="img-bg rounded-[0.5rem] flex align-center justify-center w-full">
                                    <div className="self-center my-[3rem]">
                                        <img src="/images/work/calder_prev2.png" alt="" className="w-[24vw] subtle-shadow" />
                                    </div>
                                </div>
                                <p className="caption cap-top">a1 poster draft</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FLYER */}
                <div className="flex flex-col gap-[3rem] w-full align-center">
                    <SectionHeader
                        title="A5-size flyer"
                        description="A flyer intended to guide people to the exhibition rather than spark intrigue like the poster"
                        optional="Unlike the rest of the exhibition materials, the flyer shows the fully-constructed version of Big Crinkly. I thought this made the most sense as while the poster could be meant to spark intrigue for the viewers, the flyer would be held at the museum, and therefore showing the actual artwork could help museum visitors know what to keep an eye out for. Furthermore, if museum goers had seen the poster before the flyer (or vice versa), it could help them make the connection of the deeper meaning behind the artwork, having seen the structure both the constructed and deconstructed." />
                    <div className="flex flex-col w-full">
                        <div className="img-bg rounded-[0.5rem] flex align-center justify-center w-full">
                            <div className="self-center my-[3rem] subtle-shadow flex flex-wrap gap-[4rem] ">
                                <img src="/images/work/calder_a5_front.png" alt="" className="w-[20vw]" />
                                <img src="/images/work/calder_a5_back.png" alt="" className="w-[20vw]" />
                            </div>
                        </div>
                        <p className="caption cap-top">front & back</p>
                    </div>
                </div>

                {/* DIGITAL MATERIAL */}
                <div className="flex flex-col gap-[3rem] w-full align-center">
                    <SectionHeader
                        title="Digital marketing material"
                        description="Instagram posts and gif"
                        optional="I snuck in another instance of dissonant harmony with the nine-square grid creating one complete picture. The center slide features a gif that shows the individual pieces of the sculpture getting put back together. This gif ties together the entire set of marketing materials as it visually plays out the transformation of individual, dissonant pieces coming together and forming a harmonious sculpture." />
                    <div className="flex flex-row gap-[0.5rem]">
                        <div className="flex flex-col w-full">
                            <div className="img-bg rounded-[0.5rem] flex align-center justify-center w-full">
                                <div className="self-center my-[3rem]">
                                    <img src="/images/work/calder_instagram.jpeg" alt="" className="w-[24vw] subtle-shadow" />
                                </div>
                            </div>
                            <p className="caption cap-top">Instagram posts <a className="caption underline" href="https://www.instagram.com/snfivowlactz/">(pseudo Instagram account)</a></p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="img-bg rounded-[0.5rem] flex align-center justify-center w-full">
                                <div className="self-center my-[3rem]">
                                    <video autoPlay loop muted className="w-[24vw] subtle-shadow">
                                        <source src="images/work/calder.mov" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                            <p className="caption cap-top">sculpture reconstruction gif</p>
                        </div>
                    </div>
                </div>

                {/* FINAL */}
                <div className="flex flex-col gap-[3rem] w-full">
                    <h2 className="self-center w-(--mid-width)">Final A1-size poster</h2>
                    <div className="rounded-[0.5rem] img-bg w-full mt-[1.8rem] mb-[3.5rem] flex align-center justify-center py-[3rem] w-full">
                        <img src="images/work/calder.png" alt="" className="w-[36rem] subtle-shadow" />
                    </div>
                </div>
            </div>
        </div>
    );
}
