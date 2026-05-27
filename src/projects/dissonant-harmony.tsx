import ProjectHeader from "../components/project-header";
import SectionHeader from "../components/section-header";
import TwoImageCaption from "../components/two-image-caption";
import VerticalImageSpan from "../components/vertical-image-span";
import { projects } from "../database";
import { Project } from "./project";
import "./projects.css";
import { section } from "./section";
import FloatingNav from "../components/floating-nav";

export default function DissonantHarmony() {
    const thisProject = projects.find(p => p.path === "/dissonant-harmony");
    const sections: section[] = [
        { id: "concept", header: "01. Concept", description: "Reflecting the idea of dissonant harmony in the illustrations and typography", optional: "For the museum exhibition to design for, I chose the SFMoma Dissonant Harmony exhibition for Alexander Calder. To focus on the idea of a dissonant harmony, I deconstructed one of Calder's sculptures, Big Crinkly, by first tracing over an image of it with the pen tool and then separating it into its individual parts. The imagery of the individual pieces shows that all these random, rough-cut shapes can somehow come together and create a harmonious result like Big Crinkly." },
        { id: "type", header: "02. Type", description: "Aglet Mono: geometric, like Calder's artwork", optional: "The title words that vary heavily in style and yet are the same width emphasize a dissonant harmony between two objects." },
        { id: "background", header: "03. Background", description: "A light background with enough contrast to let colors pop", optional: "After trying out both light and dark backgrounds, I found that the light background worked better as it let the colors in the sculpture pop more whereas in the dark background the colors got washed out." },
        { id: "a1-size-poster", header: "04. A1-size poster", description: "Ensuring there is a focal point for the poster" },
        { id: "a5-size-flyer", header: "05. A5-size flyer", description: "A flyer to guide people to the exhibition rather than spark intrigue like the poster", optional: "Unlike the rest of the exhibition materials, the flyer shows the fully-constructed version of Big Crinkly, focusing more on guiding museum-goers to the exhibit." },
        { id: "digital-marketing-material", header: "06. Instagram posts", description: "Sneaking in one last instance of dissonant harmony with the nine-square grid", optional: "For the extra-observant and overthinkers (like me), the nine squares in the Instagram feed creating one complete picture make one extra nugget of fun." },
    ]

    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} sections={sections} />
            <FloatingNav sections={sections} />
            <div className="project-content-rest">
                <div id="concept">
                    <SectionHeader title={sections[0].header} description={sections[0].description} optional={sections[0].optional} />
                </div>

                {/* TYPE */}
                <div className="section align-center" id="type">
                    <SectionHeader title={sections[1].header} description={sections[1].description} optional={sections[1].optional} />
                    <div className="flex flex-row gap-[0.5rem]">
                        <div className="calder-bg round flex place-content-center w-3/5">
                            <div className="self-center my-[1rem]">
                                <img src="/images/work/calder/calder_type-06.png" alt="" className="h-[18vw]" />
                            </div>
                        </div>
                        <div className="calder-bg round flex place-content-center w-full">
                            <div className="self-center my-[1rem]">
                                <img src="/images/work/calder/calder_type-07.png" alt="" className="h-[18vw]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* DARK VERSIONS */}
                <div className="section align-center" id="background">
                    <SectionHeader title={sections[2].header} description={sections[2].description} optional={sections[2].optional} />
                    <p className="w-slim">To determine this, I put both poster versions in grayscale to see the differences in values in each of the colors. Value in color theory refers to the darkness of a color, independent of hue or saturation. As can be seen in the images below, there is much more contrast between the sculpture and the background in the lighter background than the dark one. The small screws in the top-right of the dark-background poster are completely invisible, meaning that they are the exact same values.</p>

                    <TwoImageCaption path1="/images/work/calder/calder-bad-contrast.jpg" cap1="dark background → low contrast" path2="/images/work/calder/calder-good-contrast.jpg" cap2="light background → high contrast" />
                </div>

                {/* A1 */}
                <div className="section align-center" id="a1-size-poster">
                    <SectionHeader title={sections[3].header} description={sections[3].description} optional={sections[3].optional} />
                    <p className="mt-no-optional w-slim dark-gray">It was important that there was a main focal point for the poster, especially because the poster was a big A1 size. I needed to establish a clear direction that viewers' eyes could follow when looking at the poster. That meant not only setting big-enough margins, but also making sure the individual pieces of the sculpture were framed well and that the other elements supported the main focus (the sculpture).</p>
                    {/* <div className="round w-full flex align-center justify-center py-[4rem]"> */}
                        <img src="images/work/calder/calder-a1-markup.png" alt="" className="my-[3rem] self-center w-full md:w-[50rem]" />
                    {/* </div> */}
                    {/* final a1 */}
                    <div className="flex flex-col w-full">
                        <VerticalImageSpan path="images/work/calder/calder.png" />
                        <p className="caption cap-top">final a1 poster</p>
                    </div>
                    <p className="w-slim">In the final A1 poster version, there is a much-better sense of hierarchy and more obvious flow for how people should read the poster.<br /><br />
                        Eyes are first directed to either the sculpture or the title. There is a clear, top-to-bottom flow of elements. The big red sculpture piece being in the vertical center also helps guide the eyes from the top of the sculpture group to the bottom and does not potentailly diverge the viewer's attention elsewhere.<br /><br />
                        Museum info at the bottom being a similar width as the title helps retain consistency and hierarchy across elements, not adding another layer to the hierarchy of elements.</p>
                </div>

                {/* FLYER */}
                <div className="section align-center" id="a5-size-flyer">
                    <SectionHeader title={sections[4].header} description={sections[4].description} optional={sections[4].optional} />
                    <p className="w-slim">I thought this made the most sense as while the poster could be meant to spark intrigue for the viewers, the flyer would be held at the museum, and therefore showing the actual artwork could help museum visitors know what to keep an eye out for. Furthermore, if museum goers had seen the poster before the flyer (or vice versa), it could help them make the connection of the deeper meaning behind the artwork, having seen the structure both constructed and deconstructed.</p>
                    <div className="flex flex-col w-full">
                        <div className="img-bg round flex place-content-center w-full">
                            <div className="self-center my-[3rem] subtle-shadow flex flex-wrap gap-[4rem] place-content-center">
                                <img src="/images/work/calder/calder_a5_front.png" alt="" className="w-[24vw] min-w-[332px]" />
                                <img src="/images/work/calder/calder_a5_back.png" alt="" className="w-[24vw] min-w-[332px]" />
                            </div>
                        </div>
                        <p className="caption cap-top">front & back</p>
                    </div>
                </div>

                {/* DIGITAL MATERIAL */}
                <div className="section align-center" id="digital-marketing-material">
                    <SectionHeader title={sections[5].header} description={sections[5].description} optional={sections[5].optional} />
                    <p className="w-slim">The center slide features a gif that shows the individual pieces of the sculpture getting put back together. This gif ties together the entire set of marketing materials as it visually plays out the transformation of individual, dissonant pieces coming together and forming a harmonious sculpture.</p>


                    <div className="work-img-group-col-bigger">
                        <div>
                            <div className="img-bg work-add-img-cont">
                                <div className="self-center my-[3rem]">
                                    <img src="/images/work/calder/calder_instagram.jpeg" alt="" className="w-[30vw] min-w-[18rem] subtle-shadow" />
                                </div>
                            </div>
                            <p className="caption cap-top">Instagram posts <a className="caption underline" href="https://www.instagram.com/snfivowlactz/">(pseudo Instagram account)</a></p>
                        </div>
                        <div>
                            <div className="img-bg work-add-img-cont">
                                <div className="self-center my-[3rem]">
                                    <video autoPlay loop playsInline muted className="w-[30vw] min-w-[18rem] subtle-shadow">
                                        <source src="images/work/calder/calder.mov" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                            <p className="caption cap-top">Sculpture reconstruction gif</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
