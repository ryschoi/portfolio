import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "../components/project-header";
import SectionHeader from "../components/section-header";
import { Project } from "./project";
import { section } from "./section";
import FloatingNav from "components/floating-nav";

export default function BostonBeer() {
    const thisProject = projects.find(p => p.path === "/boston-beer");
    const sections: section[] = [
        { id: "qmm", header: "01. Quarterly Media Measurements", description: "Translate quarterly marketing data into high-level visual scorecards", optional: "" },
        { id: "bls-sls",  header: "02. Brand and Sales Lift Report Dashboards", description: "Eliminate need for new study result powerpoints by creating an interactive and aggregate Power BI dashboard of brand and sales lift study data", optional: "" },
        { id: "reflection",  header: "03. Reflection", description: "Applying design frameworks and skills to the business world" }
    ];
    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} sections={sections} />
            <div className="project-content-rest">
                <div className="section w-slim" id="qmm">
                    <SectionHeader title={sections[0].header} description={sections[0].description} optional={sections[0].optional} />
                </div>
                <FloatingNav sections={sections} />
                {/* DATA VISUALIZATION */}
                <div className="section self-center" id="bls-sls">
                    <SectionHeader title={sections[1].header} description={sections[1].description} optional={sections[1].optional} />
                </div>

                <div className="section" id="reflection">
                    <SectionHeader title={sections[2].header} description={sections[2].description} />
                    {/* <p className="w-slim self-center">Through this project, I learned that <span className="bold">a good data visualization is not just about hierarchy and highlighting the most outstanding numbers, but that the data needs to be represented in a language users can read</span>. For this project, that meant setting solid context for each visualization and, in my single-tone design, being very intentional with each time I used the color green so that the visualizations could be interpretted with even just a glance. The color green running throughout the entire poster also keeps the same meaning of referring to the countries with higher-than-average rates of snakebite.<br /><br />I was lucky to have gotten to learn about the global snakebite crisis through this project and to get to put my design skills to use to bring about more awareness for both those affected and not. While this poster only covers climate conditions, I'd love to expand the story with the incorporation of data about wealth & lifestyle, hospital accessibility, and government funding.</p> */}
                </div>
            </div>
        </div>
    );
}
