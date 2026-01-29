import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "../components/project-header";
import { Project } from "./project";
import { section } from "./section";
import SectionHeader from "components/section-header";
import FloatingNav from "components/floating-nav";

export default function Cooper() {
    const thisProject = projects.find(p => p.path === "/cooper");
    const sections: section[] = [
        { id: "first-sem", header: "Semester 1: UX Designer", description: "Learning my way around my first cross-functional team", optional: "I first joined the project in its third semester. I was relatively new to UI/UX design and due to there being no Design Lead and the team being overall very developer-heavy, I was given a lot of freedom. My instructions were “redesign the role page” and I was free to go wherever from there." },
        { id: "sec-sem", header: "Semester 2+: Design Lead", description: "Establishing design direction for the project, cross-functional collaboration, and a product design approach" }
    ]

    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} sections={sections} />
            <FloatingNav sections={sections} />
            <div className="project-content-rest">
                <div id="first-sem" className="section">
                    <SectionHeader title={sections[0].header} description={sections[0].description} />
                    {/* <p className="w-slim">Coming soon.</p> */}
                    {/* role page before */}
                    <p className="w-slim">Upon first joining the project, my greatest advantage as a designer was not having ever seen Cooper before, and therefore being able to view the site with completely fresh eyes.</p>
                    <p className="w-slim">My initial observations:</p>
                    <h4 className="w-slim gray">Pretty quickly, I thought that it didn't make sense for each review to be on its own page. That would make it hard for people to build one cohesive picture about one role. I figured, since we’re collecting all this review data, we should use it!</h4>
                   {/* role page after */}
                    <h4 className="w-slim gray">The result: data-backed insights, concrete stats, site architecture that more closely mirrors other job board sites.</h4>
                    <h4 className="w-slim gray">Problem: All three designers were creating different brand identities so designs didn’t match, changing design system as we were creating new designs, etc.<br />Needed more organization, and standardization. I decided to become design lead.</h4>
                </div>
                <div id="sec-sem" className="section">
                    <SectionHeader title={sections[1].header} description={sections[1].description} optional={sections[1].optional} />
                    
                    <p className="w-slim">Coming soon.</p>
                    <p>Over the summer, I</p>
                    <ul>
                        <li>Refined the design system</li>
                        <li>Organized the Figma file</li>
                        <li>Fixed styles of old designs to match the new design system</li>
                    </ul>
                    <br />
                    <div className="flex flex-col mt-[1rem] gap-[1.5rem] align-center w-full">
                        <div className="flex flex-col w-slim">
                            <h3>Anonymity & working with the Northeastern co-op office</h3>
                            <h3 className="gray">Should the reviews be anonymous? How do we handle rant reviews and hold students accountable to their reviews?</h3>
                        </div>
                        
                    </div>

                    <div className="flex flex-col mt-[1rem] gap-[1.5rem] align-center w-full">
                        <div className="flex flex-col w-slim">
                            <h3>Search flow</h3>
                            <h3 className="gray">Creating a logical and clear site map</h3>
                        </div>
                        
                    </div>

                    <div className="flex flex-col mt-[1rem] gap-[1.5rem] align-center w-full">
                        <div className="flex flex-col w-slim">
                            <h3>Logo & branding</h3>
                            <h3 className="gray">Balancing professionalism and friendliness</h3>
                        </div>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
