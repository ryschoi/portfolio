import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "../components/project-header";
import { Project } from "./project";
import SectionHeader from "../components/section-header";
import { section } from "./section";
import FloatingNav from "../components/floating-nav";
import Collapsible from "../components/collapsible";
import Pill from "../components/pill";

export default function OpenForum() {
    const thisProject = projects.find(p => p.path === "/open-forum");
    const sections: section[] = [
        { id: "research", header: "Research question", description: "How can technology support students’ belongingness on campus?" },
        { id: "ideation", header: "Ideation", description: "Our solution must support both new and existing relationships and facilitate structured, interest-based social gatherings in a non-time-demanding way"},
        { id: "user-testing", header: "User testing w/ low-fidelity prototypes", description: "With paper prototypes of our top two ideas, we gathered feedback from fellow students" },
        { id: "design", header: "High-fidelity prototype", description: "Presenting... Open Forum", optional: "We decided to go with Open Forum, the discussion-organizing app, as it was the solution that best addressed all of our constraints." }
    ];

    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} sections={sections} />
            <div className="project-content-rest">
                <FloatingNav sections={sections} />

                {/* RESEARCH */}
                <div id="research" className="section">
                    <SectionHeader title={sections[0].header} description={sections[0].description} />
                    <div className="w-slim">
                        <Collapsible closedText="Research steps" content={
                            <ul className="flex flex-col gap-[0.25rem]">
                                <li className="p-sm gray">
                                    Conduct <span className="p-sm gray bold">online research</span> on how college students connect these days, the state of college students' wellbeings, etc.
                                </li>
                                <li className="p-sm gray">
                                    Conduct <span className="p-sm gray bold">interviews</span> with four different Northeastern students to hear from some of our potential users' real experiences of navigating social life on campus.
                                </li>
                                <li className="p-sm gray">
                                    Create an <span className="p-sm gray bold">affinity diagram to extract key themes</span> from our interviews
                                </li>
                                <li className="p-sm gray">
                                    Create two <span className="p-sm gray bold">personas</span> to illustrate what the themes might look like in the context of actual people's lives, preferences, and temperaments.
                                </li>
                            </ul>
                        } />
                    </div>
                    {/* <div className="p-sm w-slim">
                        <p className="p-sm gray mb-[0.35rem]">Research process:</p>
                        <ul className="flex flex-col gap-[0.25rem]">
                            <li className="p-sm gray">
                                Conduct <span className="p-sm gray bold">online research</span> on how college students connect these days, the state of college students' wellbeings, etc.
                            </li>
                            <li className="p-sm gray">
                                Conduct <span className="p-sm gray bold">interviews</span> with four different Northeastern students to hear from some of our potential users' real experiences of navigating social life on campus.
                            </li>
                            <li className="p-sm gray">
                                Create an <span className="p-sm gray bold">affinity diagram to extract key themes</span> from our interviews
                            </li>
                            <li className="p-sm gray">
                                Create two <span className="p-sm gray bold">personas</span> to illustrate what the themes might look like in the context of actual people's lives, preferences, and temperaments.
                            </li>
                        </ul>
                    </div> */}
                    {/* <div className="flex flex-col gap-[0.75rem] img-bg left-border w-slim py-[1rem] px-[1.2rem]">
                        <p className="caption">Research process</p>
                        <ul>
                            <li>
                                Conduct <span className="bold">online research</span> on how college students connect these days, the state of college students' wellbeings, etc.
                            </li>
                            <li>
                                Conduct <span className="bold">interviews</span> with four different Northeastern students to hear from some of our potential users' real experiences of navigating social life on campus.
                            </li>
                            <li>
                                Create an <span className="bold">affinity diagram to extract key themes</span> from our interviews
                            </li>
                            <li>
                                Create two <span className="bold">personas</span> to illustrate what the themes might look like in the context of actual people's lives, preferences, and temperaments.
                            </li>
                        </ul>
                    </div> */}
                    {/* <Collapsible
                        classes="w-slim"
                        closedText="Research process"
                        content={
                            <ul className="pl-[1.25rem]">
                                <li>
                                    Conduct <span className="bold">online research</span> on how college students connect these days, the state of college students' wellbeings, etc.
                                </li>
                                <li>
                                    Conduct <span className="bold">interviews</span> with four different Northeastern students to hear from some of our potential users' real experiences of navigating social life on campus.
                                </li>
                                <li>
                                    Create an <span className="bold">affinity diagram to extract key themes</span> from our interviews
                                </li>
                                <li>
                                    Create two <span className="bold">personas</span> to illustrate what the themes might look like in the context of actual people's lives, preferences, and temperaments.
                                </li>
                            </ul>
                        }
                    /> */}

                    {/* ONLINE RESEARCH */}
                    {/* What software tools exist to support belongingness, inclusion, social connectedness, and social support? What types of interactions do these tools support? */}
                    {/* <div className="flex flex-col gap-[2rem] mt-[1rem]">
                        <div className="flex flex-col w-slim">
                            <h3 className="gray">Online research</h3>
                            <h3 className="">Digital platforms are commonly used by clubs and organizations for large-group communication and work for existing relationships but are not ideal for forming new connections.</h3>
                        </div>
                        <div className="w-slim">
                            <p className="mb-[0.25rem] bold">Northeastern CampusLabs</p>
                            <ul>
                                <li>Catalog of university-registered clubs and organizations</li>
                                <li>No social interaction</li>
                                <li>Often outdated</li>
                            </ul>
                        </div>
                        <div className="gray-full-container">
                            <div className="med-w my-[4rem]">
                                <h3 className="mb-[1.5rem] dark-gray caption">Existing options: online social platforms</h3>
                                <div className="med-grid">
                                    <div>
                                        <h3 className="mb-[0.5rem]">Northeastern CampusLabs</h3>
                                        <ul>
                                            <li>Catalog of university-registered clubs and organizations</li>
                                            <li>No social interaction</li>
                                            <li>Often outdated</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="mb-[0.5rem]">Instagram</h3>
                                        <ul>
                                            <li>General social communication and connection for both personal and community use</li>
                                            <li>Clubs and organizations use it for more public-facing content and communication rather than internal communication</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="mb-[0.5rem]">Slack and Discord</h3>
                                        <ul>
                                            <li>Club and community chats</li>
                                            <li>Used for both official and unofficial cases</li>
                                            <li>Not created for finding new people</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* INTERVIEWS */}
                    <div className="flex flex-col gap-[2rem] mt-[1rem]">
                        <div className="flex flex-col w-slim">
                            {/* <h3 className="gray">Interviews & affinity diagram</h3> */}
                            {/* <h3 className="">Online social platforms are commonly used by clubs and organizations for big-group communication or for existing relationships and are not ideal for forming new connections.</h3> */}
                        </div>
                        {/* <ImageModal src="images/work/open-forum/g2-affinity-diagram.png" alt="" /> */}
                        {/* <div className="round w-full flex place-content-center py-[4vw]">
                            <img src="images/work/open-forum/g2-affinity-diagram.png" alt="" className="w-[30rem] max-w-[84vw]" />
                        </div> */}
                        <div className="gray-full-container">
                            <div className="w-slim my-[4rem]">
                                <h3 className="mb-[1.5rem] dark-gray caption">What we found</h3>
                                <div className="flex flex-col gap-[2.5rem]">
                                    <div className="flex flex-col gap-[0.5rem]">
                                        <h3 className="">Structured and interested-based social spaces are reported more effective methods of socializing</h3>
                                        <p className="gray p-sm">Almost all the students we interviewed mentioned meeting friends either from clubs or other public activities like intramural sports.</p>
                                    </div>
                                    <div className="flex flex-col gap-[0.5rem]">
                                        <h3 className="">Technology can help maintain existing connections but struggles to create them</h3>
                                        <p className="gray p-sm">Online methods of connecting like FaceTimes or sending friends Instagram reels are better for maintaining friendships rather than forming new ones.</p>
                                    </div>
                                    <div className="flex flex-col gap-[0.5rem]">
                                        <h3 className="">Students are busy and time constraints complicate socializing efforts</h3>
                                        <p className="gray p-sm">Students' collectively busy schedules make it hard to find time to socialize. Interestingly, one student mentioned that that didn't necessarily mean that they didn't feel like they didn't belong because of the "shared-struggle" sentiments.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* NEXT STEPS */}
                    <div className="w-slim">
                        <p className="mb-[0.5rem]">From this, we decided we'd need our app to...</p>
                        <ul>
                            <li className="">help organize or facilitate social interaction in-person, not create a digital space for it</li>
                            <li className="">facilitate interest-based activities or discussions</li>
                            <li className="">support both new and existing relationships</li>
                            <li className="">work with students' busy schedules by organizing events that either happen frequently, are not too long, or are flexible in when students can attend</li>
                        </ul>
                    </div>
                </div>

                {/* IDEATION */}
                <div id="ideation" className="section">
                    <SectionHeader title={sections[1].header} description={sections[1].description} optional={sections[1].optional} />
                    <p className="w-slim gray">Using the themes and constraints we got from our research, we came up with 15 different potential solutions and got creative with the different areas of life we could turn into socializing opportunities (eating, studying, conversation, errands, etc.)</p>
                    {/* TOP IDEAS */}
                    <div className="gray-full-container">
                        <div className="med-w my-[4rem]">
                            <h3 className="mb-[1.5rem] dark-gray caption">Top two ideas</h3>
                            <div className="half-grid">
                                <div className="flex flex-col gap-[1rem]">
                                    <h3>Open Forum</h3>
                                    <p>A platform that organizes open discussions on current events, hot takes, etc. Students can submit petitions and people will be able to express interest and show up either to participate or just listen.</p>
                                    <p>Encourages sharing interests / opinions by inviting people passionate about the same topics and provides a casual environment for people to talk and meet new people.</p>
                                    <div className="flex flex-wrap gap-[0.5rem] mt-[1rem]">
                                        <Pill text="Organized social events" hover={false} clicked={true} />
                                        <Pill text="Busy-schedule compatible" hover={false} clicked={true} />
                                        <Pill text="New connections" hover={false} clicked={true} />
                                        <Pill text="Existing relationships" hover={false} clicked={true} />
                                        <Pill text="Interest-based" hover={false} clicked={true} />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[1rem]">
                                    <h3>Blind Match</h3>
                                    <p>A platform that sets you up with a random group of people and a day/time to meet up each week. Takes in weekly availability and forms groups based on availability and loosely based on interests.</p>
                                    <p>Helps with the struggle with time constraints by finding people with matching weekly availabilities, encouraging consistent meetups.</p>
                                    <div className="flex flex-wrap gap-[0.5rem] mt-[1rem]">
                                        <Pill text="Organized social events" hover={false} clicked={true} />
                                        <Pill text="Busy-schedule compatible" hover={false} clicked={true} />
                                        <Pill text="New connections" hover={false} clicked={true} />
                                        <Pill text="Existing relationships" hover={false} clicked={false} />
                                        <Pill text="Interest-based" hover={false} clicked={false} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* LOW-FI */}
                <div id="user-testing" className="section">
                    <SectionHeader title={sections[2].header} description={sections[2].description} />
                    <p className="w-slim">Coming soon.</p>
                </div>

                {/* HIGH-FI */}
                <div id="design" className="section">
                    <SectionHeader title={sections[3].header} description={sections[3].description} optional={sections[3].optional} />
                    <p className="w-slim">Below is a high-fidelity prototype of our app that I created in Figma.</p>
                    <div className="img-bg round flex align-center justify-center w-full mb-[0.5rem]">
                        <div className="self-center my-[4vw]">
                            <video autoPlay loop playsInline muted className="w-[20vw] min-w-[20rem] round-[3rem]">
                                <source src="images/work/open-forum/open-forum-video.mov" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="half-grid-full">
                        <div className="flex flex-col">
                            <div className="bg-[#1e1e1e] round flex place-content-center">
                                <div className="self-center my-[6vw]">
                                    <img src="images/work/open-forum/messages.png" alt="" className="w-[32vw] min-w-[330px] dark-shadow" />
                                </div>
                            </div>
                            <p className="caption cap-top">Error prevention and feedback messages</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="bg-[#1e1e1e] round flex place-content-center">
                                <div className="self-center my-[4.3vw]">
                                    <img src="images/work/open-forum/tags.png" alt="" className="w-[14vw] min-w-[200px]" />
                                </div>
                            </div>
                            <p className="caption cap-top">Tags to quickly find relevant forum topics</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
