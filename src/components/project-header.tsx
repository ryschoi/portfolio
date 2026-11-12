import { Project } from "../projects/project";
import ProcessBox from "./process";
import { section } from "../projects/section";

export default function ProjectHeader({ project, sections }: { project: Project, sections: section[] }) {
    return (
        <div className="flex flex-col items-center mb-[6rem] w-full gap-[2rem]">
            {/* IMAGE */}
            <div className="round img-bg w-full flex align-center justify-center py-[3vw]">
                < img src={project.frontImage} alt="" className={project.vertical === true ? "w-[26rem] max-w-[85vw] subtle-shadow" : "w-[44rem] max-w-[85vw] subtle-shadow"} />
            </div>

            {/* TEXT: summary headline with the overview right under it, then the details in one row.
                The project's name and year are in the top bar. */}
            <div className="mob-mid-w flex flex-col gap-[2rem] mb-[3rem]">
                <div className="flex flex-col gap-[0.75rem]">
                    <h1 className="serif tracking-[-0.3px]">{project.summary}</h1>
                    {/* <p className="gray">{project.overview}</p> */}
                    {project.id === 1 &&
                        <p className="gray">The invitation for one of my greatest honors as a designer came one summer Friday afternoon when a good friend of mine at the Berklee College of Music asked me if I wanted to design the poster for his senior recital. While we share a love for music, the rock music that he loves is nothing like the mellow tunes of the music I listen to and embody. Still, I took this on as a way to challenge myself to do something of a different feel. After many FaceTime consultations from coast to coast of the US and getting the drawing of my friend’s iconic bowl-cut and glasses just right, I ended up with this poster that captures the boldness of rock, nostalgia of a documentary, and my friend's personal brand. “Rockumentary” is the musical documentary of the rock music that shaped his life.</p>
                    }
                    {project.id === 13 &&
                        <p className="gray">I was reached out to by one of my friends to complete some quick design work for this hackathon. I did the UI for the internal admission portal along with the design for the sponsorship package, resulting in partnerships with companies like Vercel and Anthropic.</p>
                    }
                </div>

                {/* Four columns on desktop, two on mobile. */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[1.5rem] gap-y-[1.25rem]" id="proj-attributes">
                    <div className="flex flex-col gap-[0.25rem]">
                        <p className="gray">Work type</p>
                        <p>{project.type}</p>
                    </div>
                    <div className="flex flex-col gap-[0.25rem]">
                        <p className="gray">Timeline</p>
                        <p>{project.timeline}</p>
                    </div>
                    <div className="flex flex-col gap-[0.25rem]">
                        <p className="gray">Team / Role</p>
                        <div>
                            {project.team.map((t, i) => (
                                <p key={i}>{t}</p>
                            ))}
                            <p>{project.role}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[0.25rem]">
                        <p className="gray">Tools</p>
                        <p>{project.tools}</p>
                    </div>
                </div>
            </div>

            <ProcessBox sectionsList={sections} project={project} />
        </div>
    );
}