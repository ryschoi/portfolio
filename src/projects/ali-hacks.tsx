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
                <Task task="Design hi-fidelity wireframes for the internal application portal, along with a sponsorship package." processItems={["Internal portal UI", "Sponsorship package design"]} />

{/*  was reached out to by one of my Cooper team members to complete some quick design work for this student-led hackathon. I did the UI for the internal admission portal along with the design for the sponsorship package, resulting in partnerships with companies like _____________. */}
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
