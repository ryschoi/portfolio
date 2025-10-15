import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "../components/project-header";
import SectionHeader from "../components/section-header";
import VerticalImageSpan from "../components/vertical-image-span";
import TwoImageCaption from "../components/two-image-caption";
import { Project } from "./project";
import Task from "../components/task";

export default function AliHacks() {
    const thisProject = projects.find(p => p.path === "/ali-hacks");
    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} />
            <div className="project-content-rest">
                <Task task="Using the existing Asian-American style from the public website, design high-fidelity wireframes for the internal application portal and a sponsorship package to send out to potential sponsors." processItems={["Internal portal UI", "Sponsorship package design"]} />
                <p className="mob-mid-w">Process coming soon.</p>

                {/* <div className="section" id="data-collection-and-engineering">
                    <SectionHeader title="Part 1" description="Data collection & engineering" optional="Most of the data was collected from Our World in Data. I downloaded data sets for individual climate conditions (i.e. precipitation, surface temperature). From there, I used Excel to clean up each dataset and combine them into one workbook that I could easily filter through and map. Even though each dataset covered global data by country, there were still variations in the categorization: some countries did not have recorded data in some datasets, and some datasets listed continents as countries, leading to duplicate values." />
                </div> */}

                {/* FINAL */}
                {/* <div className="section">
                    <h2 className="self-center mob-mid-w">Final wireframes</h2>
                    <VerticalImageSpan path="images/work/snakebite-data/snakebiteData.png" />
                </div> */}
            </div>
        </div>
    );
}
