import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "../components/project-header";
import SectionHeader from "../components/section-header";
import VerticalImageSpan from "../components/vertical-image-span";
import { Project } from "./project";
import { section } from "./section";
import FloatingNav from "../components/floating-nav";
import Collapsible from "../components/collapsible";

export default function SnakebiteData() {
    const thisProject = projects.find(p => p.path === "/snakebite-data");
    const sections: section[] = [
        { id: "data-collection-and-engineering", header: "Data collection and engineering", description: "Gather data sets and create preliminary data visualizations", optional: "I got various data sets of climate conditions from Our World in Data. In Excel, I cleaned them up so I could work with them in one workbook, and then created initial visualizations (that I later moved to Illustrator)." },
        { id: "data-visualization", header: "Data visualization", description: "Establishing a clear visual language and data story", optional: "In Illustrator, I not only edited individual visualizations, creating one consistent look for the poster, but I also had to make sure that each of the visualizations, once pieced together, told one cohesive story." },
        { id: "final-deliverable", header: "Final deliverable", description: "A5-size poster" },
        { id: "reflection", header: "Reflection", description: "My first data visualization project", optional: "I learned that a good data visualization is not just about hierarchy and highlighting the most outstanding numbers, but about representing the data in a language the audience can understand." }
    ];
    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} sections={sections} />
            <div className="project-content-rest">
                <div className="section w-slim" id="data-collection-and-engineering">
                    <SectionHeader title={sections[0].header} description={sections[0].description} optional={sections[0].optional} />
                </div>
                <FloatingNav sections={sections} />
                {/* DATA VISUALIZATION */}
                <div className="section self-center" id="data-visualization">
                    <SectionHeader title={sections[1].header} description={sections[1].description} optional={sections[1].optional} />

                    {/* FIRST DRAFT */}
                    <h4 className="gray w-slim">The first iteration of the poster prompted changes being needed surrounding choosing the right type of visualizations to use and refining the visual style.</h4>
                    <div className="w-slim img-bg round flex place-content-center p-[4vw] box-border">
                        <img src="/images/work/snakebite-data/first-crit-feedback.png" alt="" className="self-center subtle-shadow w-full" />
                    </div>
                </div>

                {/* ISOTYPES */}
                <div className="flex flex-col mt-[1rem] gap-[1.5rem] align-center w-full">
                    <div className="flex flex-col w-slim">
                        <h3>Isotypes</h3>
                        <h3 className="gray">Representing data in a visual and proportionately-accurate way</h3>
                    </div>

                    <div className="work-img-group-col subtle-shadow">
                        <div className="round flex flex-col gap-[1rem] box-border">
                            <div className="s-data-bg work-add-img-cont p-[1.5rem] box-border h-[18rem]">
                                <img src="/images/work/snakebite-data/s-data-bars.png" alt="" className="" />
                            </div>
                            <p className="ml-[0.5rem] w-9/10"><span className="caption">version 1 (bars) - </span>Arbitrary bar sizes. Only takeaway is the numeric difference in value and the general visual size difference</p>
                        </div>
                        <div className="round flex flex-col gap-[1rem] box-border">
                            <div className="s-data-bg work-add-img-cont p-[1.5rem] box-border h-[18rem]">
                                <img src="/images/work/snakebite-data/s-data-sun.png" alt="" className="max-h-[15rem] self-center" />
                            </div>
                            <p className="ml-[0.5rem] w-9/10"><span className="caption">version 2 (illustrations) - </span>Illustrations showed what the climates might look like, but the visuals were also arbitrarily-sized and therefore not very informative</p>
                        </div>
                        <div className="round flex flex-col gap-[1rem] box-border">
                            <div className="s-data-bg work-add-img-cont p-[1.5rem] box-border h-[18rem]">
                                <img src="/images/work/snakebite-data/s-data-circles.png" alt="" className="max-h-[15rem] self-center" />
                            </div>
                            <p className="ml-[0.5rem] w-9/10"><span className="caption">final version (isotypes) - </span>Isotypes representative of the actual proportions of the numbers makes it much easier to accurately gauge the values of each measurement</p>
                        </div>
                    </div>
                </div>

                {/* DEGREES */}
                <div className="flex flex-col mt-[1rem] gap-[1.5rem] align-center">
                    <div className="thing w-slim">
                        <div className="flex flex-col">
                            <h3>Degree of separation</h3>
                            <h3 className="gray">Reducing the time needed to grasp the main message</h3>
                        </div>
                        <h4 className="gray">The challenge with this chart was figuring out how to label the boxes in a way that highlighted the large disparity between reported data and reality with the least amount of brain work.</h4>
                        <br />
                        <Collapsible closedText="Process" content={<p className="">Following Edward Tufte's "degree of separation" scale, a method of determining how accessible labels are to their corresponding data points, I connected the labels directly to the boxes rather than separating them from the boxes entirely. This way, there is less back-and-forth between the boxes and the labels, and the main message of the visualization can be understood at just a glance since all the central points are consolidated in one area.</p>} />
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
                <div className="section" id="final-deliverable">
                    <SectionHeader title={sections[2].header} description={sections[2].description} />
                    {/* <VerticalImageSpan path="images/work/snakebite-data/snakebiteData.png" /> */}
                    <div className="round img-bg w-full flex place-content-center py-[4vw]">
                        <img src="images/work/snakebite-data/snakebiteData.png" alt="" className="w-[44rem] max-w-[84vw] subtle-shadow" />
                    </div>
                </div>

                <div className="section" id="reflection">
                    <SectionHeader title={sections[3].header} description={sections[3].description} optional={sections[3].optional} />
                    <p className="w-slim">For this project, that meant setting solid context for each visualization and, in my single-tone design, being very intentional with each time I used the color green so that the visualizations could be interpretted with even just a glance. The color green running throughout the entire poster also keeps the same meaning of referring to the countries with higher-than-average rates of snakebite.
                        <br /><br />
                        Getting to learn about and put my design skills to raise awareness about the global snakebite crisis reminded me how meaningful design can be. While this poster only covers climate conditions, I'd love to expand the story with the incorporation of data for things wealth, lifestyle, hospital accessibility, and government funding.</p>
                </div>
            </div>
        </div>
    );
}
