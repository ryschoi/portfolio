import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "../components/project-header";
import SectionHeader from "../components/section-header";
import { Project } from "./project";
import { section } from "./section";
import FloatingNav from "../components/floating-nav";

export default function BostonBeer() {
    const thisProject = projects.find(p => p.path === "/boston-beer");
    const sections: section[] = [
        { id: "problem", header: "identifying the problem", description: "Learning about the marketing teams' relationships with data and what they want to learn from the data", optional: "" },
        { id: "findings",  header: "user research findings", description: "Extracted four action steps and three core questions to keep in mind", optional: "" },
        { id: "q2",  header: "first iteration: quarter 2 design", description: "Q2 summary" },
        { id: "q3", header: "second iteration: quarter 3 design", description: "Q3 summary" },
        { id: "reflection", header: "Reflection", description: "Reflection summary" }
    ];
    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} sections={sections} />
            <FloatingNav sections={sections} />
            <div className="project-content-rest">
                {/* <p className="w-slim">Case study coming soon.</p> */}
                <div className="section w-slim" id="problem">
                    <SectionHeader title={sections[0].header} description={sections[0].description} optional={sections[0].optional} />
                    <p className="w-slim">Coming in without any formal marketing experience or learning, I was starting at a blank.</p>
                    <p className="w-slim">As my first project, I was tasked with</p>
                </div>

                <div className="section" id="findings">
                    <SectionHeader title={sections[1].header} description={sections[1].description} optional={sections[1].optional} />
                </div>

                <div className="section" id="q2">
                    <SectionHeader title={sections[2].header} description={sections[2].description} />
                </div>

                <div className="section" id="q3">
                    <SectionHeader title={sections[3].header} description={sections[3].description} />
                    <div className="round bbc-bg w-full flex place-content-center pt-[4vw]">
                        <img src="images/work/bostonbeer/qmm_annotation.png" alt="" className="w-[54rem] max-w-[84vw] subtle-shadow" />
                    </div>
                </div>

                <div className="section" id="reflection">
                    <SectionHeader title={sections[4].header} description={sections[4].description} />
                </div>
            </div>
        </div>
    );
}
