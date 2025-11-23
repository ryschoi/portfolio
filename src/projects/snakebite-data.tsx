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
                <Task task="Turn global snakebite and climate data into a cohesive, readable story" processItems={["Data collection and engineering", "Data visualization", "Project reflection"]} />

                <div className="section" id="data-collection-and-engineering">
                    <SectionHeader
                        title="Part 1"
                        description="Data collection & engineering"
                        optional="I started by downloading data sets for various climate conditions from Our World in Data. From there, I used Excel to clean up each dataset and combine them into one workbook that I could easily filter through and map. Even though each dataset covered global data by country, there were still variations in the data structure: some countries did not have recorded data in some datasets, and some datasets listed continents as countries, leading to duplicate values." />
                </div>

                {/* DATA VISUALIZATION */}
                <div className="section" id="data-visualization">
                    <SectionHeader title="Part 2: Data visualization" description="Establishing a clear visual language and data story" optional="I used Excel to create initial data visualizations like maps and charts. From there, I copied them over into Illustrator where I edited them more stylistically and pieced them together into the poster orientation." />

                    {/* FIRST DRAFT */}
                    <div className="flex flex-col  w-slim self-center">
                        <div className="img-bg rounded flex place-content-center">
                            <div className="self-center my-[3vw] subtle-shadow flex flex-wrap gap-[4vw] place-content-center">
                                <img src="/images/work/snakebite-data/s-data-crit1.png" alt="" className="w-[36vw] min-w-[332px]" />
                                {/* <img src="/images/work/snakebite-data/snakebite-data-feedback.png" alt="" className="w-[36vw] min-w-[332px]" /> */}
                            </div>
                        </div>
                        <p className="caption cap-top">first iteration</p>
                    </div>
                    {/* COMMENTS */}
                    <div className="flex flex-col w-slim self-center">
                        <p className="">Comments on the first iteration:</p>
                        <ul>
                            <li>Box plot is too technical–would <span className="bold">take too long to read</span> while some may not even know how to read it</li>
                            <li>Reorder items in the two visualizations on the right to be in the same order to <span className="bold">make it easier to move between the two charts</span></li>
                            <li>Turn map into a choropleth to <span className="bold">capture the range</span> of snakebite conditions, rather than a black-and-white, more-than or below-average</li>
                            <li>Make it less of a two-column layout to <span className="bold">establish a clearer flow through the posters</span></li>
                            <li>Increase contrast of the green and the light gray</li>
                        </ul>
                    </div>
                </div>

                {/* ISOTYPES */}
                <div className="section align-center">
                    <div className="thing w-slim">
                        <div className="flex flex-col">
                            <h3>Isotypes</h3>
                            <h3 className="gray">Representing data in a visual and proportionately-accurate way</h3>
                        </div>
                        <p>For the group of visualizations comparing climate conditions in countries with high rates of snakebite and the rest of the world, I went through three different variations of representing the values.</p>
                    </div>
                    {/* IMAGES */}
                    {/* <div className="gray-narrow-container rounded self-center">
                        <div className="flex flex-col mob-mid-w self-center gap-[3rem]">
                            <div className="flex gap-[1.5rem]">
                                <div className="flex flex-col gap-[0.4rem] w-1/3">
                                    <p className="caption">first version: bars</p>
                                    <p className="">Arbitrary bar sizes, only takeaway is the difference in size and the actual value difference</p>
                                </div>
                                <div className="s-data-bg work-add-img-cont subtle-shadow w-2/3">
                                    <div className="self-center m-[1rem]">
                                        <img src="/images/work/snakebite-data/s-data-bars.png" alt="" className="w-full min-w-[14rem]" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-[1.5rem]">
                                <div className="flex flex-col gap-[0.4rem] w-1/3">
                                    <p className="caption">second version: illustrations</p>
                                    <p className="">Illustrations showed what the climates might look like, but the visuals were arbitrarily-sized and not very informative</p>
                                </div>
                                <div className="s-data-bg work-add-img-cont subtle-shadow w-2/3">
                                    <div className="self-center m-[1rem]">
                                        <img src="/images/work/snakebite-data/s-data-sun.png" alt="" className="w-full min-w-[14rem]" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row gap-[2rem]">
                                <div className="flex flex-col gap-[0.4rem] w-1/2">
                                    <p className="caption">Final version: isotypes</p>
                                    <p className="">Isotypes being representative of actual proportions of the numbers makes it much easier to tell the values of each measurement and just how much the differences are.</p>
                                </div>
                                <div className="s-data-bg work-add-img-cont subtle-shadow fit-content">
                                    <img src="/images/work/snakebite-data/s-data-circles.png" alt="" className="self-center h-[10rem] m-[1rem]" />
                                </div>
                            </div>
                        </div>
                    </div> */}


                    {/* <div>
                        <div className="s-data-bg work-add-img-cont">
                            <div className="self-center m-[1rem]">
                                <img src="/images/work/snakebite-data/isotype1.png" alt="" className="w-full min-w-[18rem]" />
                            </div>
                        </div>
                        <p className="caption cap-top">final</p>
                    </div> */}


                    <div className="flex flex-col w-slim self-center gap-[3rem]">
                        <div className="flex flex-col gap-[0.6rem] left-border">
                            <div className="flex flex-col gap-[0.3rem]">
                                <p className="caption">first version: bars</p>
                                <p>Arbitrary bar sizes, only takeaway is the difference in size and the actual value difference</p>
                            </div>
                            <div className="s-data-bg work-add-img-cont">
                                <div className="self-center m-[1rem]">
                                    <img src="/images/work/snakebite-data/s-data-bars.png" alt="" className="w-full min-w-[18rem]" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[0.6rem] left-border">
                            <div className="flex flex-col gap-[0.3rem]">
                                <p className="caption">second version: Illustrations</p>
                                <p>Illustrations showed what the climates might look like, but the visuals were arbitrarily-sized and not very informative</p>
                            </div>
                            <div className="s-data-bg work-add-img-cont">
                                <div className="self-center m-[1rem]">
                                    <img src="/images/work/snakebite-data/s-data-sun.png" alt="" className="h-[20vh] min-h-[200px]" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[0.6rem] pl-[0.8rem] border-l-[8px] border-l-[#cfcfcf]">
                            <div className="flex flex-col gap-[0.3rem]">
                                <p className="caption"><span className="font-[20px] text-[#616161]">★</span> Final version: Isotypes</p>
                                <p>Isotypes being representative of actual proportions of the numbers makes it much easier to tell the values of each measurement and just how much the differences are.</p>
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
                    </div>
                </div>

                {/* DEGREES */}
                <div className="section align-center">
                    <div className="thing w-slim">
                        <div className="flex flex-col">
                            <h3>Degree of separation</h3>
                            <h3 className="gray">Reducing the time needed to grasp the main message</h3>
                        </div>
                        <p>In this chart, I wanted to highlight the large potential disparity in reported data and reality with the differently sized boxes. The challenge here was figuring out how to label the boxes in a way that would get the message across to viewers with the least amount of brain work.<br /><br />I followed Edward Tufte's "degree of separation" scale, which is a method of determining how accessible labels are to their corresponding data points, and connected the labels directly to the boxes rather than separating them from the boxes entirely. This way, there is less back-and-forth between the boxes and the labels, and the main message of the visualization can be understood at just a glance since all the central points are consolidated in one area.</p>
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
                    <p className="w-slim">Through this project, I learned that a good data visualization is not just about hierarchy and highlighting the most outstanding numbers, but that the data needs to be represented in a language users can read, instead of delivering it in the raw, large, abstract numbers. For this project, that meant setting solid context for each visualization and, in my single-tone design, being very intentional with each time I used the color green so that the visualizations could be interpretted with even just a glance. The color green running throughout the entire poster also keeps the same meaning of referring to the countries with higher-than-average rates of snakebite.</p>
                </div>
            </div>
        </div>
    );
}
