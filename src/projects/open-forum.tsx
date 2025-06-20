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
                    <SectionHeader title="Phase 1: Problem" description="Define the problem" optional="We started off with some questions that would help us get a better understanding of the problem and the current technology solutions: How can technology support students’ belongingness on campus? What software tools exist to support belongingness, inclusion, social connectedness, and social support? What types of interactions do these tools support?" />
                    <div className="mob-mid-w self-center">
                        <p className="mb-[0.5rem]">From our online research, we found that technology can create personalized experiences and provide tailored recommendations for events, activities, and communities based on students’ interests and preferences. Interest-based communities, mentorship matching, and group planning tools could help students build relationships over shared goals or hobbies.</p>
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
                                        <li>General social communication and connection for both personal and community-use</li>
                                        <li>Clubs and organizations use it for more public-facing content and communication</li>
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
                </div>

                {/* RESEARCH */}
                <div id="users-interviews,-personas,-thematic-analysis" className="section">
                    <SectionHeader title="Phase 2: UX research" description="User interviews, personas, thematic analysis" optional="Coming soon" />
                    {/* <p className="mob-mid-w">Next, we conducted interviews with four different Northeastern students to hear from our potential users' real experiences.<br />In one of the interviews I conducted (Northeastern senior), I found that people are generally more likely to connect and stay friends when they consistently make themselves available. However, this gets harder as people start moving off campus and start co-ops, which leads to them not being on campus during the day.

                        It was interesting to me that he kept mentioning availability. It wasn’t as much having the same interests, but more so having the opportunity to frequently meet up, talk, and have fun together. It seems that our solution would not necessarily need to focus so much on common interest, same cultures, etc. but more so on quickly being able to find someone to spend some time with. Technology did not seem to be a big part of finding or maintaining connections.

                        I now find myself seeing that this is a problem more so of openness/availability/accessibility rather than similarity between people. While similarity in some things would help (i.e. always being at Marino like the interviewee mentioned), it would ultimately come down to helping people find other available people. This is similar to the first point that we found in the problem space for G1, that it’s hard to find people because of the large campus size.
                    </p> */}
                </div>

                {/* IDEATION */}
                <div id="ideate-solutions" className="section">
                    <SectionHeader title="Phase 3: Ideation" description="Solution ideation" optional="Coming soon" />
                </div>

                {/* LOW-FI */}
                <div id="user-testing-with-low-fidelity-prototypes" className="section">
                    <SectionHeader title="Phase 4: Testing" description="Low-fidelity prototypes and user testing" optional="Coming soon" />
                </div>

                {/* HIGH-FI */}
                <div id="create-high-fidelity-prototype" className="section">
                    <SectionHeader title="Phase 5: Design" description="High-fidelity prototype" optional="" />
                    <div className="img-bg rounded-[0.5rem] flex align-center justify-center w-full">
                        <div className="self-center my-[4vw]">
                            <video autoPlay loop playsInline muted className="w-[20vw] min-w-[20rem]">
                                <source src="images/work/open-forum/open-forum-video.mov" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
