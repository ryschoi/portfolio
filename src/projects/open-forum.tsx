import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "../components/project-header";
import { Project } from "./project";
import Task from "../components/task";
import SectionHeader from "components/section-header";

export default function OpenForum() {
    const thisProject = projects.find(p => p.path === "/open-forum");

    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} />
            <div className="project-content-rest">
                <Task task="Design a mobile app that will increase Northeastern students' sense of belongingness on campus" processItems={["Define the problem", "Users interviews, personas, thematic analysis", "Ideate solutions", "User testing with low-fidelity prototypes", "Create high-fidelity prototype"]} />

                {/* PROBLEM */}
                <div id="define-the-problem" className="section">
                    <SectionHeader title="Phase 1: Problem" description="Define the problem" optional="" />
                    <div className="mob-mid-w self-center">
                        <p><span className="highlight">Questions we started off by asking:</span></p>
                        <ul>
                            <li>How can technology support students’ belongingness on campus?</li>
                            <li>What software tools exist to support belongingness, inclusion, social connectedness, and social support?</li>
                            <li>What are the unique needs of belongingness and inclusion for minority and international students?</li>
                            <li>What types of interactions do these tools support?</li>
                        </ul>
                    </div>
                    <div className="mob-mid-w self-center">
                        <p><span className="highlight">What we found</span></p>
                        <p>jdflajsld</p>
                    </div>
                </div>

                {/* RESEARCH */}
                <div id="users-interviews,-personas,-thematic-analysis" className="section">
                    <SectionHeader title="Phase 2: UX research" description="User interviews, personas, thematic analysis" optional="" />

                </div>

                {/* IDEATION */}
                <div id="ideate-solutions" className="section">
                    <SectionHeader title="Phase 3: Ideation" description="Solution ideation" optional="" />
                </div>

                {/* LOW-FI */}
                <div id="user-testing-with-low-fidelity-prototypes" className="section">
                    <SectionHeader title="Phase 4: Testing" description="Low-fidelity prototypes and user testing" optional="" />
                </div>

                {/* HIGH-FI */}
                <div id="create-high-fidelity-prototype" className="section">
                    <SectionHeader title="Phase 5: Design" description="High-fidelity prototype" optional="" />
                </div>
            </div>
        </div>
    );
}
