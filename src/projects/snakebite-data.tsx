import React from "react";
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
            {/* <hr className="stroke-black stroke-[1px]"/> */}

            <div className="project-content-rest">
                <div className="flex flex-col gap-[4rem]">

                    {/* PROBLEM SPACE */}
                    {/* <SectionHeader title="Problem" description="There seems to be a link between certain climate conditions and high levels of snakebite. The aim is to " optional="" /> */}

                    {/* PROCESS */}
                    <SectionHeader title="Process" description="Collecting data, creating initial visualizations in Excel, receiving feedback on how to make them more easily understandable, creating a story" optional="Most of the data was collected from Our World in Data. Since the data was relatively clean, most of the focus of this project was in figuring out how I could combine all the information I had to create one coheisve story. I used Excel to create initial data visualizations like maps and charts. From there, I copied them over into Illustrator where I was able to edit them more stylically." />

                    {/* version1 */}
                    <div className="flex flex-row justify-between w-[63rem] self-center">
                        <img src="../public/images/work/s-data-crit1.png" className="w-3/5 light-border" />
                        <h4 className="w-1/3">
                            <span className="gray">Version 1</span><br />Feedback received and my notes:<br /><br />
                            <ul>
                                <li>Box plot is too technical</li>
                                <li>Re-order items in two right visualizations to be in the same order</li>
                                <li>Make the green less bright; stands out too much</li>
                                <li>Turn map into a choropleth to show more of a range of snakebite conditions, rather than a black and white more than or below average</li>
                                <li>Make it look less like a two-column layout</li>
                            </ul>
                        </h4>
                    </div>

                    {/* later versions */}

                    <div className="w-[63rem] flex flex-row gap-[1rem] self-center">
                        <img className="crop-image w-[31rem] h-[24rem] light-border" src="images/work/s-data-slice-intro.png" alt="" />
                        <img className="crop-image w-[31rem] h-[24rem] light-border" src="images/work/s-data-slice-map.png" alt="" />
                    </div>

                    <div className="flex flex-col gap-[1rem] w-[63rem]">
                        <img src="../public/images/work/s-data-slice-isotype.png" className="light-border w-full" />
                        <p>I also made the series of once-bar charts into a series of differently-sized icons, keeping the focus on the difference between the global average and high-snakebite-countries average.</p>
                    </div>




                    {/* DELIVERY */}
                    <SectionHeader title="Delivery" description="A2-size digital and physical poster print. Intended for educational purposes for the general public." optional="" />
                    <img src="../public/images/work/snakebiteData.png" className="w-[63rem] self-center"/>
                </div>
            </div>
        </div>
    );
}
