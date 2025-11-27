import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "../components/project-header";
import SectionHeader from "../components/section-header";
import VerticalImageSpan from "../components/vertical-image-span";
import { Project } from "./project";
import Task from "../components/task";

export default function SnakebiteData() {
    const thisProject = projects.find(p => p.path === "/snakebite-data");
    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} />
            <div className="project-content-rest">
                <Task task="Create a data story poster about a topic related to snakebites" processItems={["Data collection and engineering", "Data visualization", "Project reflection"]} />

                <div className="section w-slim" id="data-collection-and-engineering">
                    <SectionHeader
                        title="01. Pre-design: Data collection & engineering"
                        description="Gather data sets and create preliminary data visualizations"
                        optional="I got various data sets of climate conditions from Our World in Data. In Excel, I cleaned them up so I could work with them in one workbook, and then created initial visualizations (that I later moved to Illustrator)."
                    />
                </div>

                {/* DATA VISUALIZATION */}
                <div className="section self-center" id="data-visualization">
                    <SectionHeader title="02. Data visualization" description="Establishing a clear visual language and data story" optional="In Illustrator, I not only edited individual visualizations, creating one consistent look for the poster, but I also had to make sure that each of the visualizations, once pieced together, told one cohesive story." />

                    {/* FIRST DRAFT */}
                    <h4 className="gray w-slim self-center">The first iteration of the poster prompted changes being needed surrounding choosing the right type of visualizations to use and refining the visual style.</h4>
                    <div className="w-slim self-center img-bg rounded flex place-content-center p-[4vw] box-border">
                        <img src="/images/work/snakebite-data/first-crit-feedback.png" alt="" className="self-center subtle-shadow w-full" />
                    </div>
                </div>

                {/* ISOTYPES */}
                <div className="flex flex-col mt-[1rem] gap-[1.5rem] align-center w-full">
                    <div className="flex flex-col self-center w-slim">
                        <h3>Isotypes</h3>
                        <h3 className="gray">Representing data in a visual and proportionately-accurate way</h3>
                    </div>

                    <div className="work-img-group-col">
                        <div className="img-bg rounded flex flex-col p-[1.5rem] box-border">
                            <div className="work-add-img-cont p-[1rem] box-border h-[20rem]">
                                <img src="/images/work/snakebite-data/s-data-bars.png" alt="" className="subtle-shadow" />
                            </div>
                            <div className="mt-[1rem]">
                                <p className="h4 gray">First version: bars</p>
                                <p>Arbitrary bar sizes–only takeaway is the difference value and the general size difference</p>
                            </div>
                        </div>
                        <div className="img-bg rounded flex flex-col p-[1.5rem] box-border">
                            <div className="work-add-img-cont p-[1rem] box-border h-[20rem]">
                                <img src="/images/work/snakebite-data/s-data-sun.png" alt="" className="subtle-shadow max-h-[15rem] self-center" />
                            </div>
                            <div className="mt-[1rem]">
                                <p className="h4 gray">Second version: illustrations</p>
                                <p>Illustrations showed what the climates might look like, but the visuals were also arbitrarily-sized and therefore not very informative</p>
                            </div>
                        </div>
                        <div className="img-bg rounded flex flex-col p-[1.5rem] box-border thick-light-border">
                            <div className="work-add-img-cont p-[1rem] box-border h-[20rem]">
                                <img src="/images/work/snakebite-data/s-data-circles.png" alt="" className="subtle-shadow max-h-[15rem] self-center" />
                            </div>
                            <div className="mt-[1rem]">
                                <p className="h4 gray">Final version: isotypes</p>
                                <p>Isotypes being representative of actual proportions of the numbers makes it much easier to tell the values of each measurement and just how much the differences are</p>
                            </div>
                        </div>
                    </div>

                    {/* <div className="flex flex-col w-slim self-center gap-[3rem]">
                        <div className="flex flex-col gap-[0.6rem] left-border pl-[0.6rem]">
                            <div className="flex flex-col gap-[0.1rem]">
                                <p className="caption">first version: bars</p>
                                <p>Arbitrary bar sizes–only takeaway is the difference value and the general size difference</p>
                            </div>
                            <div className="s-data-bg work-add-img-cont">
                                <div className="self-center m-[1rem]">
                                    <img src="/images/work/snakebite-data/s-data-bars.png" alt="" className="w-full min-w-[18rem]" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[0.6rem] left-border pl-[0.6rem]">
                            <div className="flex flex-col gap-[0.1rem]">
                                <p className="caption">second version: Illustrations</p>
                                <p>Illustrations showed what the climates might look like, but the visuals were also arbitrarily-sized and therefore not very informative</p>
                            </div>
                            <div className="s-data-bg work-add-img-cont">
                                <div className="self-center m-[1rem]">
                                    <img src="/images/work/snakebite-data/s-data-sun.png" alt="" className="h-[20vh] min-h-[200px]" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[0.6rem] pl-[0.8rem] border-l-[8px] border-l-[#cfcfcf]">
                            <div className="flex flex-col gap-[0.1rem]">
                                <p className="caption"><span className="font-[20px] text-[#616161]">★</span> Final version: Isotypes</p>
                                <p>Isotypes being representative of actual proportions of the numbers makes it much easier to tell the values of each measurement and just how much the differences are</p>
                            </div>
                            <div className="s-data-bg work-add-img-cont">
                                <div className="self-center m-[1rem]">
                                    <img src="/images/work/snakebite-data/s-data-circles.png" alt="" className="h-[20vh] min-h-[200px]" />
                                </div>
                            </div>
                            <div className="s-data-bg work-add-img-cont">
                                <div className="self-center m-[1rem]">
                                    <img src="/images/work/snakebite-data/isotype1.png" alt="" className="w-full min-w-[18rem]" />
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>

                {/* DEGREES */}
                <div className="flex flex-col mt-[1rem] gap-[1.5rem] align-center">
                    <div className="thing w-slim">
                        <div className="flex flex-col">
                            <h3>Degree of separation</h3>
                            <h3 className="gray">Reducing the time needed to grasp the main message</h3>
                        </div>
                        <h4 className="gray">In this chart, I wanted to highlight the large potential disparity in reported data and reality with the differently sized boxes. The challenge here was figuring out how to label the boxes in a way that would get the message across to viewers with the least amount of brain work.</h4>
                        <br />
                        <p>I followed Edward Tufte's "degree of separation" scale, which is a method of determining how accessible labels are to their corresponding data points, and connected the labels directly to the boxes rather than separating them from the boxes entirely. This way, there is less back-and-forth between the boxes and the labels, and the main message of the visualization can be understood at just a glance since all the central points are consolidated in one area.</p>
                    </div>
                    {/* IMAGES */}
                    <div className="work-img-group-col">
                        <div>
                            <div className="s-data-bg work-add-img-cont">
                                <div className="self-center mx-[2rem]">
                                    <img src="/images/work/snakebite-data/degree1.png" alt="" className="self-center w-6/7 min-w-[18rem]" />
                                </div>
                            </div>
                            <p className="caption cap-top">initial</p>
                        </div>
                        <div>
                            <div className="s-data-bg work-add-img-cont">
                                <div className="self-center mx-[2rem]">
                                    <img src="/images/work/snakebite-data/degree2.png" alt="" className="self-center w-6/7 min-w-[18rem]" />
                                </div>
                            </div>
                            <p className="caption cap-top">final</p>
                        </div>
                    </div>
                </div>

                {/* FINAL */}
                <div className="section">
                    <h2 className="w-slim self-center">Final poster</h2>
                    <VerticalImageSpan path="images/work/snakebite-data/snakebiteData.png" />
                </div>

                <div className="thing" id="project-reflection">
                    <h3>Reflection</h3>
                    <p className="w-slim">Through this project, I learned that <span className="bold">a good data visualization is not just about hierarchy and highlighting the most outstanding numbers, but that the data needs to be represented in a language users can read</span>. For this project, that meant setting solid context for each visualization and, in my single-tone design, being very intentional with each time I used the color green so that the visualizations could be interpretted with even just a glance. The color green running throughout the entire poster also keeps the same meaning of referring to the countries with higher-than-average rates of snakebite.</p>
                </div>
            </div>
        </div>
    );
}
