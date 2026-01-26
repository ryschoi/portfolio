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
        { id: "qmm", header: "Quarterly Media Measurement Scorecards", description: "Designing scorecards to provide a high-level, yet actionable summary of quarterly marketing data", optional: "" },
        { id: "bls-sls",  header: "Report Dashboards", description: "Eliminating the need to create new report PowerPoints by creating an interactive and aggregate Power BI dashboard of brand and sales lift study data", optional: "" },
        { id: "reflection",  header: "Reflection", description: "Applying UX design principles and practices to the marketing + data world" }
    ];
    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} sections={sections} />
            <div className="project-content-rest">
                <p className="w-slim self-center">Case study coming soon.</p>
                {/* <FloatingNav sections={sections} /> */}
                {/* <div className="section w-slim" id="qmm">
                    <SectionHeader title={sections[0].header} description={sections[0].description} optional={sections[0].optional} />
                </div>
                <div className="section self-center" id="bls-sls">
                    <SectionHeader title={sections[1].header} description={sections[1].description} optional={sections[1].optional} />
                </div>

                <div className="section" id="reflection">
                    <SectionHeader title={sections[2].header} description={sections[2].description} />
                </div> */}
            </div>
        </div>
    );
}
