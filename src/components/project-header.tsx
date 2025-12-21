import { Project } from "../projects/project";
import Tag from "./tag";
import ProcessBox from "./process";
import { section } from "projects/section";

export default function ProjectHeader({ project, sections }: { project: Project, sections: section[] }) {
    return (
        <div className="flex flex-col items-center mb-[6rem] w-full gap-[2rem]">
            {/* TOP TITLE */}
            <div className="mob-mid-w flex flex-col gap-[0.2rem]">
                <h1 className="mb-[0.3rem]">{project.summary}</h1>
                <p className="caption">{project.name}, {project.year}</p>
                <div className="flex gap-[0.5rem] tag-position-2 mt-[0.5rem]">
                    {project.tags.map((tag) => (
                        <Tag text={tag} hover={false} clicked={true} />
                    ))}
                </div>
            </div>

            {/* IMAGE */}
            <div className="rounded img-bg w-full flex align-center justify-center py-[3vw]">
                <img src={project.frontImage} alt="" className={project.vertical === true ? "w-[26rem] max-w-[85vw] subtle-shadow" : "w-[44rem] max-w-[85vw] subtle-shadow"} />
            </div>

            {/* BELOW IMAGE */}
            <div className="flex flex-col gap-[3.5rem] self-center mob-mid-w mt-[2rem] mb-[3rem]">
                <div className="flex flex-col gap-[0.2rem]">
                    <p className="caption">Project overview</p>
                    <h1 className="">{project.overview}</h1>
                </div>
                <div className="flex flex-wrap justify-between gap-y-[2rem]" id="proj-attributes">
                    <div className="flex flex-col gap-[0.2rem] w-[10rem]">
                        <p className="caption">PROJECT TYPE</p>
                        <p>{project.type}</p>
                    </div>
                    <div className="flex flex-col gap-[0.2rem] w-[10rem]">
                        <p className="caption">TIMELINE</p>
                        <p>{project.timeline}</p>
                    </div>
                    <div className="flex flex-col gap-[0.2rem] w-[10rem]">
                        <p className="caption">TEAM / ROLE</p>
                        <div>
                            {project.team.map((t, i) => (
                                <p key={i}>{t}</p>
                            ))}
                            <p className="">{project.role}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[0.2rem] w-[10rem]">
                        <p className="caption">TOOLS</p>
                        <p>{project.tools}</p>
                    </div>
                </div>
                {project.id === 1 &&
                    <p className=" mob-mid-w self-center">The invitation for one of my greatest honors as a designer came one summer Friday afternoon when a good friend of mine at the Berklee College of Music asked me if I wanted to design the poster for his senior recital. While we share a love for music, the rock music that he loves is nothing like the mellow tunes of the music I listen to and embody. Still, I took this on as a way to challenge myself to do something of a different feel. After many FaceTime consultations from coast to coast of the US and getting the drawing of my friend’s iconic bowl-cut and glasses just right, I ended up with this poster that captures the boldness of rock, nostalgia of a documentary, and my friend's personal brand. “Rockumentary” is the musical documentary of the rock music that shaped his life.</p>
                }
                {project.id === 13 &&
                    <p className=" mob-mid-w self-center">I was reached out to by one of my Cooper team members to complete some quick design work for this hackathon. I did the UI for the internal admission portal along with the design for the sponsorship package, resulting in partnerships with companies like Vercel and Anthropic. Many sponsors noted that the design of the sponsorship package was a big reason why they decided to partner with the hackathon.</p>
                }
            </div>

            <ProcessBox sectionsList={sections} />
        </div>
    );
}