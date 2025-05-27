import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "./project-header";
import SectionHeader from "./section-header";
import { Project } from "./project";

export default function SnakebiteData() {
    const thisProject = projects.find(p => p.path === "/snakebite-data");
    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} />

            <div className="project-content-rest">

                {/* PROBLEM SPACE */}
                {/* <SectionHeader title="Problem" description="There seems to be a link between certain climate conditions and high levels of snakebite. The aim is to bring about awareness" optional="" /> */}

                {/* INTRO */}
                <div className="flex flex-col gap-[3rem] w-full">
                    <SectionHeader title="Data story" description="Turning numbers into a cohesive, readable story" optional="Most of the data was collected from Our World in Data. Since the data was relatively clean, most of the focus of this project was in figuring out how to combine all the information I had to create one coheisve story." />
                    <p className="self-center mob-mid-w">I used Excel to create initial data visualizations like maps and charts. From there, I copied them over into Illustrator where I was able to edit them more stylically and piece them together into the poster orientation. Since this was my first time working with qualitative data, there was a lot I was learning with each round of critiquing. I learned that a good data visualization is not just about hierarchy and highlighting the most outstanding numbers, but about telling and showing what the numbers actually mean. That meant setting solid context for each visualization and, in my single-tone design, being very intentional with each time I used the color green so that the visualizations could be interpretted with even just a glance.</p>
                    <h2 className="mob-mid-w self-center">I learned that a good data visualization is not just about hierarchy and highlighting the most outstanding numbers, but about telling and showing what the numbers actually mean.</h2>
                    {/* <div className="flex flex-col w-full">
                            <div className="rounded-[0.5rem] img-bg w-full mt-[1.8rem] flex align-center justify-center py-[3rem] w-full">
                                <img src="images/work/snakebite-data-feedback.png" alt="" className="w-[36rem] subtle-shadow" />
                            </div>
                            <p className="caption cap-top">A lot of my feedback was centered around turning the data into a language users could read, not delivering it in large, abstract numbers</p>
                        </div> */}
                </div>

                {/* PROCESS */}
                <div className="flex flex-col gap-[3rem] w-full">
                    <SectionHeader title="Process" description="Establishing a clearer style and message" optional="Each week in class we had a critique session. This might've looked like a 1-on-1 critique with the professor, small group feedback sessions, or walking around marking up the posters. I appreciated the variety of feedback I received given the variety of experiences amongst my classmates: some more visual, graphic design focused, some data visualization focused, and others more content focused, through the lens of future viewers. Ultimately, through this project, I learned how to turn data into a language users could read, instead of delivering it in the raw, large, abstract numbers." />
                    {/* <p className="self-center mob-mid-w">I used Excel to create initial data visualizations like maps and charts. From there, I copied them over into Illustrator where I was able to edit them more stylically and piece them together into the poster orientation. Since this was my first time working with qualitative data, there was a lot I was learning with each round of critiquing. I learned that a good data visualization is not just about hierarchy and highlighting the most outstanding numbers, but about telling and showing what the numbers actually mean. That meant setting solid context for each visualization and, in my single-tone design, being very intentional with each time I used the color green.</p> */}
                    <h2 className="mob-mid-w self-center">I learned how to turn data into a language users could read, instead of delivering it in the raw, large, abstract numbers.</h2>
                    {/* FIRST DRAFT */}
                    <div className="flex flex-col w-full">
                        <div className="rounded-[0.5rem] img-bg w-full flex align-center justify-center py-[3rem] w-full gap-[2rem]">
                            <img src="images/work/s-data-crit1.png" alt="" className="w-[36rem] subtle-shadow" />
                            <img src="images/work/snakebite-data-feedback.png" alt="" className="w-[36rem] subtle-shadow" />
                        </div>
                        <p className="caption cap-top">First iteration</p>
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

                    {/* ISOTYPES */}
                    <div className="flex flex-col gap-[3rem] w-full align-center">
                        <div className="flex flex-col gap-[1rem]">
                            <h2 className="self-center mob-mid-w">Isotypes</h2>
                            <p className="mob-mid-w self-center">At first, to highlight the difference in climate conditions, I had illustrations of what those conditions might look like (i.e. more jagged land or more rainfall). However, I found that other than the numbers under the illustrations, there was no way to tangibly grasp the difference in measuremnets.<br /><br />For the final version, I turned the numbers into isotypes with circles representing the actual proportions of the numbers. This way, it is a lot easier to tell the values of each measurement, and just how much the differences are.</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-row gap-[0.5rem]">
                                <div className="flex flex-col w-full">
                                    <div className="s-data-bg rounded-[0.5rem] flex align-center justify-center w-full">
                                        <div className="self-center my-[1rem]">
                                            <img src="/images/work/isotype2.png" alt="" className="w-[44vw]" />
                                        </div>
                                    </div>
                                    <p className="caption cap-top">initial</p>
                                </div>
                                <div className="flex flex-col w-full">
                                    <div className="s-data-bg rounded-[0.5rem] flex align-center justify-center w-full">
                                        <div className="self-center my-[1rem]">
                                            <img src="/images/work/isotype1.png" alt="" className="w-[44vw]" />
                                        </div>
                                    </div>
                                    <p className="caption cap-top">final</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DEGREES */}
                    <div className="flex flex-col gap-[3rem] w-full align-center">
                        <div className="flex flex-col gap-[1rem]">
                            <h2 className="self-center mob-mid-w">Degree of separation</h2>
                            <p className="mob-mid-w self-center">In this chart, I wanted to highlight the large potential disparity in reported data and reality with the differently sized boxes. The challenge here was figuring out how to label the boxes in a way that would get the message across to viewers with the least amount of work.<br /><br />I followed Edward Tufte's "degree of separation" scale, which determines how accessible labels are to their corresponding data points, and connected the labels directly to the boxes rather than separating them from the boxes entirely. This way, there is less back-and-forth when reading the chart and the main message can be understood at just a glance since all the central points are consolidated in one area.</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-row gap-[0.5rem]">
                                <div className="flex flex-col w-full">
                                    <div className="s-data-bg rounded-[0.5rem] flex align-center justify-center w-full">
                                        <div className="self-center my-[1rem]">
                                            <img src="/images/work/degree1.png" alt="" className="w-[30vw]" />
                                        </div>
                                    </div>
                                    <p className="caption cap-top">initial</p>
                                </div>
                                <div className="flex flex-col w-full">
                                    <div className="s-data-bg rounded-[0.5rem] flex align-center justify-center w-full">
                                        <div className="self-center my-[1rem]">
                                            <img src="/images/work/degree2.png" alt="" className="w-[30vw]" />
                                        </div>
                                    </div>
                                    <p className="caption cap-top">final</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FINAL */}
                <div className="flex flex-col gap-[3rem] w-full">
                    <h2 className="self-center mob-mid-w">Final poster</h2>
                    <div className="rounded-[0.5rem] img-bg w-full flex align-center justify-center py-[3rem] w-full">
                        <img src="images/work/snakebiteData.png" alt="" className="w-[36rem] max-w-[84vw] subtle-shadow" />
                    </div>
                </div>
            </div>
        </div>
    );
}
