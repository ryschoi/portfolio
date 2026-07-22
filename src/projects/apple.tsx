import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "../components/project-header";
import SectionHeader from "../components/section-header";
import { Project } from "./project";
import { section } from "./section";
import FloatingNav from "../components/floating-nav";
import { useScrollTheme } from "../components/useScrollTheme";
import { useRef } from 'react'

export default function Apple() {
    const thisProject = projects.find(p => p.path === "/apple");
    const sections: section[] = [
        { id: "projects", header: "Projects", description: "What I worked on" },
        { id: "learnings", header: "Learnings", description: "What I learned" },
    ];

    const dataVizRef = useRef<HTMLDivElement>(null)
    useScrollTheme({ ref: dataVizRef })

    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} sections={sections} />
            <FloatingNav sections={sections} />
            <div className="project-content-rest">
                <div id="projects" className="section">
                    <SectionHeader title={sections[0].header} description={sections[0].description} />
                    <p className="w-slim">confidential</p>
                </div>
                <div id="learnings" className="section">
                    <SectionHeader title={sections[1].header} description={sections[1].description} />
                    <p className="w-slim">
                        13 weeks at Apple
                        How HI design works at Apple
                        What "design" means at a large tech company
                        What it means to be a designer in 2026
                        How to tell a story
                        Design excellence
                        Even the smallest details should scale to all users' needs and understandings of their devices.
                    </p>
                </div>
            </div>
        </div>
    );
}
