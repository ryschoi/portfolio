import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "../components/project-header";
import SectionHeader from "../components/section-header";
import VerticalImageSpan from "../components/vertical-image-span";
import TwoImageCaption from "../components/two-image-caption";
import { Project } from "./project";
import Task from "../components/task";

export default function SnakebiteData() {
    const thisProject = projects.find(p => p.path === "/snakebite-data");
    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} />
            <div className="project-content-rest">
                <Task task="Turn global snakebite and climate data into a cohesive, readable story" processItems={["Data collection and engineering", "Data visualization"]} />

                {/* DATA COLLECTION */}
                <div className="section" id="data-collection-and-engineering">
                    <SectionHeader title="Data collection & engineering" description="Collected data from Our World in Data, and cleaned up and engineered it in Excel" optional="Most of the data was collected from Our World in Data. I downloaded data sets for individual climate conditions (i.e. precipitation, surface temperature). From there, I used Excel to clean up each dataset and combine them into one workbook that I could easily filter through and map. Even though each dataset covered global data by country, there were still variations in the categorization: some countries did not have recorded data in some datasets, and some datasets listed continents as countries, leading to duplicate values." />
                </div>

                {/* DATA VISUALIZATION */}
                <div className="section" id="data-visualization">
                    <SectionHeader title="Data visualization" description="Establishing a clearer style and message" optional="I used Excel to create initial data visualizations like maps and charts. From there, I copied them over into Illustrator where I edited them more stylistically and pieced them together into the poster orientation." />

                    {/* FIRST DRAFT */}
                    <div className="flex flex-col w-full">
                        <div className="img-bg rounded-[0.5rem] flex place-content-center w-full">
                            <div className="self-center my-[3vw] subtle-shadow flex flex-wrap gap-[4vw] place-content-center">
                                <img src="/images/work/s-data-crit1.png" alt="" className="w-[36vw] min-w-[332px]" />
                                <img src="/images/work/snakebite-data-feedback.png" alt="" className="w-[36vw] min-w-[332px]" />
                            </div>
                        </div>
                        <p className="caption cap-top">first iteration</p>
                    </div>
                    {/* COMMENTS */}
                    <div className="flex flex-col mob-mid-w self-center">
                        <p>Comments:</p>
                        <ul>
                            <li>Box plot is too technical–would take too long to read while some may not even know how to read it</li>
                            <li>Re-order items in two right visualizations to be in the same order</li>
                            <li>Turn map into a choropleth to show more of a range of snakebite conditions, rather than a black and white more than or below average</li>
                            <li>Make it look less like a two-column layout–establish a more clear flow</li>
                            <li>Make the green less bright; stands out too much</li>
                        </ul>
                    </div>
                </div>

                {/* ISOTYPES */}
                <div className="section align-center">
                    <div className="flex flex-col gap-[1rem]">
                        <h2 className="self-center mob-mid-w">Isotypes</h2>
                        <p className="mob-mid-w self-center">At first, to highlight the difference in climate conditions, I had illustrations of what those conditions might look like (i.e. more jagged land or more rainfall). However, I found that other than the numbers under the illustrations, there was no way to tangibly grasp the difference in measuremnets.<br /><br />For the final version, I turned the numbers into isotypes with circles representing the actual proportions of the numbers. This way, it is a lot easier to tell the values of each measurement, and just how much the differences are.</p>
                    </div>
                    <div className="flex flex-wrap gap-[0.5rem]">
                        <div className="flex flex-col w-full max-w-[655px]">
                            <div className="s-data-bg rounded-[0.5rem] flex place-content-center w-full max-w-[655px]">
                                <div className="self-center my-[1.5vw]">
                                    <img src="/images/work/isotype2.png" alt="" className="w-[44vw] min-w-[332px]" />
                                </div>
                            </div>
                            <p className="caption cap-top">initial</p>
                        </div>
                        <div className="flex flex-col w-full max-w-[655px]">
                            <div className="s-data-bg rounded-[0.5rem] flex place-content-center w-full max-w-[655px]">
                                <div className="self-center my-[1.5vw]">
                                    <img src="/images/work/isotype1.png" alt="" className="w-[44vw] min-w-[332px]" />
                                </div>
                            </div>
                            <p className="caption cap-top">final</p>
                        </div>
                    </div>
                </div>

                {/* DEGREES */}
                <div className="section align-center">
                    <div className="flex flex-col gap-[1rem]">
                        <h2 className="self-center mob-mid-w">Degree of separation</h2>
                        <p className="mob-mid-w self-center">In this chart, I wanted to highlight the large potential disparity in reported data and reality with the differently sized boxes. The challenge here was figuring out how to label the boxes in a way that would get the message across to viewers with the least amount of work.<br /><br />I followed Edward Tufte's "degree of separation" scale, which determines how accessible labels are to their corresponding data points, and connected the labels directly to the boxes rather than separating them from the boxes entirely. This way, there is less back-and-forth when reading the chart and the main message can be understood at just a glance since all the central points are consolidated in one area.</p>
                    </div>

                    <div className="flex flex-wrap gap-[0.5rem]">
                        <div className="flex flex-col w-full max-w-[655px]">
                            <div className="s-data-bg rounded-[0.5rem] flex place-content-center w-full max-w-[655px]">
                                <div className="self-center my-[1.5vw]">
                                    <img src="/images/work/degree1.png" alt="" className="w-[32vw] min-w-[332px]" />
                                </div>
                            </div>
                            <p className="caption cap-top">initial</p>
                        </div>
                        <div className="flex flex-col w-full max-w-[655px]">
                            <div className="s-data-bg rounded-[0.5rem] flex place-content-center w-full max-w-[655px]">
                                <div className="self-center my-[1.5vw]">
                                    <img src="/images/work/degree2.png" alt="" className="w-[32vw] min-w-[332px]" />
                                </div>
                            </div>
                            <p className="caption cap-top">final</p>
                        </div>
                    </div>
                </div>

                {/* FINAL */}
                <div className="section">
                    <h2 className="self-center mob-mid-w">Final poster</h2>
                    <VerticalImageSpan path="images/work/snakebiteData.png" />
                </div>

                <p className="mob-mid-w">Through this project, I learned that a good data visualization is not just about hierarchy and highlighting the most outstanding numbers, but that you need to turn the data into a language users could read, instead of delivering it in the raw, large, abstract numbers.. That meant setting solid context for each visualization and, in my single-tone design, being very intentional with each time I used the color green so that the visualizations could be interpretted with even just a glance.</p>
            </div>
        </div>
    );
}
