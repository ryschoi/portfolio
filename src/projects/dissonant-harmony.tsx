import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "../components/project-header";
import { Project } from "./project";
import SectionHeader from "../components/section-header";
import VerticalImageSpan from "../components/vertical-image-span";
import TwoImageCaption from "../components/two-image-caption";

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
                        optional="The title words that vary heavily in style and yet are the same width emphasize a dissonant harmony between two objects." />
                    <div className="flex flex-row gap-[0.5rem]">
                        <div className="calder-bg rounded-[0.5rem] flex place-content-center w-3/5">
                            <div className="self-center my-[1rem]">
                                <img src="/images/work/calder_type-06.png" alt="" className="h-[18vw]" />
                            </div>
                        </div>
                        <div className="calder-bg rounded-[0.5rem] flex place-content-center w-full">
                            <div className="self-center my-[1rem]">
                                <img src="/images/work/calder_type-07.png" alt="" className="h-[18vw]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* DARK VERSIONS */}
                <div className="flex flex-col gap-[3rem] w-full align-center">
                    <SectionHeader
                        title="BACKGROUND"
                        description="A light background with adequete contrast to let colors pop"
                        optional="After trying out both light and dark backgrounds, I found that the light background worked better as it let the colors in the sculpture pop more whereas in the dark background the colors got washed out." />
                    <p className="mob-mid-w self-center">To determine this, I put both poster versions in grayscale to see the differences in values in each of the colors. Value in color theory refers to the darkness of a color, independent of hue or saturation. As can be seen in the images below, there is much more contrast between the sculpture and the background in the lighter background than the dark one. The small screws in the top-right of the dark-background poster are completely invisible, meaning that they are the exact same values.</p>

                    <TwoImageCaption path1="/images/work/calder-good-contrast.jpg" cap1="light background → high contrast" path2="/images/work/calder-bad-contrast.jpg" cap2="dark background → low contrast" />
                </div>

                {/* A1 */}
                <div className="flex flex-col gap-[3rem] w-full align-center">
                    <SectionHeader
                        title="A1-size poster"
                        description="Ensuring there is a focal point for the poster"
                        optional="It was important that there was a main focal point for the poster, especially because the poster was a big A1 size. I needed to establish a clear direction that viewers' eyes could follow when looking at the poster. That meant not only setting big-enough margins, but also making sure the individual pieces of the sculpture were framed well and that the other elements supported the main focus (the sculpture)." />
                    <div className="flex flex-col w-full">
                        <div className="rounded-[0.5rem] img-bg w-full flex align-center justify-center py-[4vw] w-full">
                            <img src="images/work/calder-a1-markup.jpg" alt="" className="w-[36rem] max-w-[84vw]" />
                        </div>
                        <p className="caption cap-top">a pervious a1 poster version</p>
                    </div>
                    <div className="flex flex-col mob-mid-w self-center">
                        <p>Comments:</p>
                        <ul>
                            <li>Reflect the idea of dissonant harmony in the title text. There is no significance to the type choices or orientation of the text in this version.</li>
                            <li>Margins are too small for the size of the poster and same throughout the entire length of the poster. Does not help establish hierarchy across the elements.</li>
                            <li>For the pieces of the sculpture, group the smaller items together. They get lost visually when they are scattered amongst the bigger pieces.</li>
                        </ul>
                    </div>
                    {/* final a1 */}
                    <div className="flex flex-col w-full">
                        <VerticalImageSpan path="images/work/calder.png" />
                        <p className="caption cap-top">final a1 poster</p>
                    </div>
                    <p className="mob-mid-w self-center">In the final A1 poster version, there is a much-better sense of hierarchy and more obvious flow for how people should read the poster.<br /><br />
                        Eyes are first directed to either the sculpture or the title. There is a clear, top-to-bottom flow of elements. The big red sculpture piece being in the vertical center also helps guide the eyes from the top of the sculpture group to the bottom and does not potentailly diverge the viewer's attention elsewhere.<br /><br />
                        Museum info at the bottom being a similar width as the title helps retain consistency and hierarchy across elements, not adding another layer to the hierarchy of elements.</p>
                </div>

                {/* FLYER */}
                <div className="flex flex-col gap-[3rem] w-full align-center">
                    <SectionHeader
                        title="A5-size flyer"
                        description="A flyer intended to guide people to the exhibition rather than spark intrigue like the poster"
                        optional="Unlike the rest of the exhibition materials, the flyer shows the fully-constructed version of Big Crinkly. I thought this made the most sense as while the poster could be meant to spark intrigue for the viewers, the flyer would be held at the museum, and therefore showing the actual artwork could help museum visitors know what to keep an eye out for. Furthermore, if museum goers had seen the poster before the flyer (or vice versa), it could help them make the connection of the deeper meaning behind the artwork, having seen the structure both the constructed and deconstructed." />
                    <div className="flex flex-col w-full">
                        <div className="img-bg rounded-[0.5rem] flex place-content-center w-full">
                            <div className="self-center my-[3rem] subtle-shadow flex flex-wrap gap-[4rem] place-content-center">
                                <img src="/images/work/calder_a5_front.png" alt="" className="w-[24vw] min-w-[332px]" />
                                <img src="/images/work/calder_a5_back.png" alt="" className="w-[24vw] min-w-[332px]" />
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

                    <div className="flex flex-wrap gap-[0.5rem]">
                        <div className="flex flex-col w-full max-w-[655px]">
                            <div className="img-bg rounded-[0.5rem] flex align-center justify-center w-full max-w-[655px]">
                                <div className="self-center my-[4vw]">
                                    <img src="/images/work/calder_instagram.jpeg" alt="" className="w-[24vw] min-w-[332px] subtle-shadow" />
                                </div>
                            </div>
                            <p className="caption cap-top">Instagram posts <a className="caption underline" href="https://www.instagram.com/snfivowlactz/">(pseudo Instagram account)</a></p>
                        </div>
                        <div className="flex flex-col w-full max-w-[655px]">
                            <div className="img-bg rounded-[0.5rem] flex align-center justify-center w-full max-w-[655px]">
                                <div className="self-center my-[4vw]">
                                    <video autoPlay loop playsInline muted className="w-[24vw] min-w-[332px] subtle-shadow">
                                        <source src="images/work/calder.mov" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                            <p className="caption cap-top">sculpture reconstruction gif</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
