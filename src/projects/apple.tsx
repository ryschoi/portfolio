import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "../components/project-header";
import SectionHeader from "../components/section-header";
import { Project } from "./project";
import { section } from "./section";
import FloatingNav from "../components/floating-nav";
import { useScrollTheme } from "../components/useScrollTheme";
import { useRef } from 'react'
import Dropdown from "../components/dropdown";
import DropdownGroup from "../components/dropdown-group";
import Timeline from "../components/timeline";
import SlideImg from "../components/slide-img";
import Carousel from "../components/carousel";
import TipStack from "../components/tip-stack";
import Pill from "../components/pill";
import StepCards from "../components/step-cards";

export default function Apple() {
    const thisProject = projects.find(p => p.path === "/apple");
    const sections: section[] = [
        { id: "projects", header: "What I worked on", description: "" },
        { id: "learnings", header: "what I learned", description: "Some learnings and practical advice I would give pre-internship Rebecca, formatted as our very own tips!" },
    ];

    const dataVizRef = useRef<HTMLDivElement>(null)
    useScrollTheme({ ref: dataVizRef })

    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} sections={sections} />
            <FloatingNav sections={sections} />
            <div className="project-content-rest">
                <div id="projects" className="section w-slim">
                    <SectionHeader title={sections[0].header} description={sections[0].description} />
                    <DropdownGroup classes="flex flex-col gap-[2rem] mt-[-2rem] w-slim">
                        <Dropdown
                            title="Built an internal prototyping tool to streamline the end-to-end process of one of our team's features"
                            defaultOpen
                            content={
                                <div className="flex flex-col gap-[1rem]">
                                    {/* <div className="flex gap-[0.5rem]">
                                        <Pill text="End-to-end" hover={false} clicked={false} />
                                        <Pill text="Prototyping" hover={false} clicked={false} />
                                        <Pill text="Interaction design" hover={false} clicked={false} />
                                    </div> */}
                                    <p className="gray">One of the features our team owns requires close collaboration between different teams and complex prototyping. My role was to design and implement a tool to improve the efficiency and scalability of this process.</p>
                                    <StepCards steps={[
                                        { icon: "/images/work/apple/illustrations/tips.png", title: "Discover", description: "To start, I met with instructional designers, HI designers, and engineers to learn more about the current process." },
                                        { icon: "/images/work/apple/illustrations/feeds.png", title: "Synthesize", description: "Then, I synthesized the diverse set of pain points into a system that was innovative in features while matching the mental model of the users." },
                                        { icon: "/images/work/apple/claude.png", title: "Design", description: "I designed visual components in Sketch, and used Claude to create an interactive prototype of the tool." },
                                        { icon: "/images/work/apple/step-validate.svg", title: "Validate", description: "Concurrently, I checked in with the future users to make sure that the tool remained aligned with their needs as it evolved from its initial designs." },
                                        { icon: "/images/work/apple/step-ship.svg", title: "Ship", description: "In my final week of the internship, I implemented the tool as a React web app, ready for engineers to integrate it into the other existing tool." },
                                    ]} />
                                    <br />
                                </div>
                            } />
                        <Dropdown
                            title="Redesigned the Tips app to support surfacing relevant content"
                            content={
                                <div className="flex flex-col gap-[1rem]">
                                    <p>The Tips app houses hundreds of tips for the many Apple's products. Having such a large library of content opens up the opportunity to surface the content that is most relevant to each user.
                                        I kickstarted the design thinking and exploration for this.</p>
                                    <StepCards steps={[
                                        { icon: "/images/work/apple/illustrations/tips.png", title: "Discover", description: "Met with instructional designers who are most familiar with Tips content and how the current experience works." },
                                        { icon: "/images/work/apple/illustrations/feeds.png", title: "Research", description: "Researched other platforms to get a sense of strategy and design." },
                                        { icon: "/images/work/apple/illustrations/reorg.gif", title: "Content strategy", description: "Created a framework for ways to organize the content, emphasizing the connection of the tips to users' everyday lives." },
                                        { icon: "/images/icons/step-validate.svg", title: "Visual elements", description: "Pulled from existing visual components in the Apple ecosystem to create the proposed library of components for Tips." },
                                    ]} />
                                </div>
                            } />
                    </DropdownGroup>
                </div>
                <div id="learnings" className="section">
                    <SectionHeader title={sections[1].header} description={sections[1].description} />
                    {/* <p className="w-slim">
                        How HI design works at Apple
                        What "design" means at a large tech company
                        What it means to be a designer in 2026
                        How to tell a story
                        Design excellence
                        Even the smallest details should scale to all users' needs and understandings of their devices.
                    </p> */}
                    <div className="w-[80vw] mb-[3rem] self-center flex flex-col md:flex-row items-center justify-center gap-[3rem] md:gap-[2rem]">
                        <TipStack
                            cardScale={0.55}
                            seed={0}
                            groups={[
                                {
                                    header: "Workflow",
                                    description: "Your work process is just as important as the work itself. Refining your workflow saves time later, freeing up bandwidth for the real work.",
                                    tips: [
                                        "images/work/apple/tips/tip-2-1.png",
                                        "images/work/apple/tips/tip-2-2.png",
                                    ],
                                },
                                {
                                    header: "Design with a team",
                                    description: "A good designer thinks beyond just the ideal solution, but also to how the solution willbe impacted by outside constraints and with time.",
                                    tips: [
                                        "images/work/apple/tips/tip-3-1.png",
                                        // "images/work/apple/tips/tip-3-1.png",
                                    ],
                                },
                                {
                                    header: "Presenting",
                                    description: "The story through which you present something can make or break how your work is received.",
                                    tips: [
                                        "images/work/apple/tips/tip-1-1.png",
                                        "images/work/apple/tips/tip-1-2.png",
                                    ],
                                },
                            ]}
                        />
                    </div>
                    <hr />
                    <p className="caption w-slim self-center mb-[-1rem]">Loved all the greenery 💚🌳</p>
                    <div>
                        <Carousel>
                            {/* <SlideImg src="images/work/apple/caffe.png" caption="" vert={true} /> */}
                            <SlideImg src="images/work/apple/team.jpg" caption="" vert={false} />
                            <SlideImg src="images/work/apple/ap.png" caption="" vert={true} />
                            <SlideImg src="images/work/apple/ap2.png" caption="" vert={false} />
                            <SlideImg src="images/work/apple/trees.png" caption="" vert={true} />
                            {/* <SlideImg src="images/work/apple/mariani.png" caption="" vert={true} /> */}
                            {/* <SlideImg src="images/work/apple/IL.png" caption="" vert={true} /> */}
                            <SlideImg src="images/work/apple/rainbow.png" caption="" vert={false} />
                            <SlideImg src="images/work/apple/poppies.png" caption="" vert={true} />
                            <SlideImg src="images/work/apple/sky.png" caption="" vert={false} />
                            {/* <SlideImg src="images/work/apple/hello.png" caption="" vert={true} /> */}
                            {/* <SlideImg src="images/work/apple/caffe.png" caption="" vert={true} /> */}
                            <SlideImg src="images/work/apple/team.jpg" caption="" vert={false} />
                            <SlideImg src="images/work/apple/ap.png" caption="" vert={true} />
                            <SlideImg src="images/work/apple/ap2.png" caption="" vert={false} />
                            <SlideImg src="images/work/apple/trees.png" caption="" vert={true} />
                            {/* <SlideImg src="images/work/apple/mariani.png" caption="" vert={true} /> */}
                            {/* <SlideImg src="images/work/apple/IL.png" caption="" vert={true} /> */}
                            <SlideImg src="images/work/apple/rainbow.png" caption="" vert={false} />
                            <SlideImg src="images/work/apple/poppies.png" caption="" vert={true} />
                            <SlideImg src="images/work/apple/sky.png" caption="" vert={false} />
                            {/* <SlideImg src="images/work/apple/hello.png" caption="" vert={true} /> */}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}
