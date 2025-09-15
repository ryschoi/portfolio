import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "../components/project-header";
import { Project } from "./project";
import Task from "../components/task";
import SectionHeader from "components/section-header";
import VerticalImageSpan from "components/vertical-image-span";
import Tag from "components/tag";
import TwoImageCaption from "components/two-image-caption";
import TextCard from "components/text-card";

export default function OpenForum() {
    const thisProject = projects.find(p => p.path === "/open-forum");

    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} />
            <div className="project-content-rest">
                <Task task="Design a mobile app that will increase Northeastern students' sense of belongingness on campus" processItems={["Define the problem", "Users interviews, thematic analysis, personas", "Ideate solutions", "User testing with low-fidelity prototypes", "Create high-fidelity prototype"]} />

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
                </div>

                {/* RESEARCH */}
                <div id="users-interviews,-thematic-analysis,-personas," className="section">
                    <SectionHeader title="Phase 2: UX research" description="User interviews, thematic analysis, and personas" optional="For the UX research phase, we conducted interviews with four different Northeastern students to hear from our target users' real experiences of navigating social life on campus. After, we created an affinity diagram to extract key themes from our interviews, along with two personas to illustrate what our interview findings might look like in the context of actual people's lives, preferences, and temperaments." />
                    <div className="rounded w-full flex place-content-center py-[4vw]">
                        <img src="images/work/open-forum/g2-affinity-diagram.png" alt="" className="w-[30rem] max-w-[84vw]" />
                    </div>
                    {/* AFFINITY DIAGRAM NOTES */}
                    <div className="gray-full-container">
                        <div className="med-w my-[4rem]">
                            <h3 className="mb-[1.5rem] dark-gray caption">What we found</h3>
                            <div className="flex flex-col gap-[1.5rem]">
                                <div className="flex gap-[0.5rem]">
                                    <h3>→</h3>
                                    <div className="flex flex-col">
                                        <h3 className="mb-[0.5rem]">Structured and interested-based social spaces are reported more effective methods of socializing</h3>
                                        <p>Almost all of the students we interviewed mentioned meeting friends either from clubs (organized and interest-based) or other public activities like intramural sports (interested-based).</p>
                                    </div>
                                </div>
                                <div className="flex gap-[0.5rem]">
                                    <h3>→</h3>
                                    <div className="flex flex-col">
                                        <h3 className="mb-[0.5rem]">Technology can help maintain existing connections, but struggles to create them</h3>
                                        <p>Common online social activites like FaceTime calls or sending reels to friends on Instagram were said to be frequent forms of interacting with friends online, but are more methods for maintaining friendships rather than forming new ones.</p>
                                    </div>
                                </div>
                                <div className="flex gap-[0.5rem]">
                                    <h3>→</h3>
                                    <div className="flex flex-col">
                                        <h3 className="mb-[0.5rem]">Struggles with time constraints</h3>
                                        <p>Students are genearlly pretty busy, with schedules that do not necessarily align with other people. However, one student mentioned that spending lots of time alone to work did not necessarily mean they didn't feel like they didn't belong.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="med-w">
                        <h3 className="mb-[1rem] caption">What we found</h3>
                        <div className="flex gap-[1rem] scroll-cont">
                            <TextCard
                                main="Structured and interested-based social spaces are reported more effective methods of socializing"
                                description="Almost all of the students we interviewed mentioned meeting friends either from clubs (organized and interest-based) or other public activities like intramural sports (interested-based)." />
                            <TextCard
                                main="Technology can help maintain existing connections, but struggles to create them"
                                description="Common online social activites like FaceTime calls or sending reels to friends on Instagram were said to be frequent forms of interacting with friends online, but are more methods for maintaining friendships rather than forming new ones." />
                            <TextCard
                                main="Time is a major constraint when it comes to socializing"
                                description="Students are genearlly pretty busy, with schedules that do not necessarily align with other people. However, one student mentioned that spending lots of time alone to work did not necessarily mean they didn't feel like they didn't belong." />
                        </div>
                    </div> */}
                    {/* NEXT STEPS */}
                    <div className="mob-mid-w">
                        <p>From this, we decided we needed an app that would...</p>
                        <ul>
                            <li>help organize or facilitate social interaction, not create a digital space for it</li>
                            <li>allow interest-based activities or discussions</li>
                            <li>serve both new and existing relationships</li>
                            <li>work with students' busy schedules, organizing events that are either very frequent, not too long, or flexible in when students can attend</li>
                        </ul>
                    </div>
                </div>

                {/* IDEATION */}
                <div id="ideate-solutions" className="section">
                    <SectionHeader title="Phase 3: Ideation" description="Solution ideation" optional="Using the themes and constraints we got from our research, I brainstormed 12 different potential solutions, and one of my team members did another three." />
                    {/* IDEAS LIST */}
                    <div className="mob-mid-w">
                        <p className="mb-[0.5rem]">Some of our ideas were:</p>
                        <ul>
                            <li>An app for clubs to post their upcoming events. A filter-heavy platform for users to curate their feed to events that fit their preferences (i.e. free food, resume/career help, networking, etc.)</li>
                            <li>A web app that shows available rooms on campus since space is the greatest asset on Northeastern campus and often times a barrier to hanging out because people cannot find spaces to meet.</li>
                            <li>A podcast hosted by Northeastern students, bringing on other Northeastern students. It would help the Northeastern community feel smaller with the shared experiences talked about on the podcast while introducing new students each week. Targets those who are busy and always on the move (gives them something to listen to).</li>
                        </ul>
                    </div>
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
                                        <Tag text="Organize social events" hover={false} clicked={true} />
                                        <Tag text="Busy-schedule compatible" hover={false} clicked={true} />
                                        <Tag text="New connections" hover={false} clicked={true} />
                                        <Tag text="Existing relationships" hover={false} clicked={true} />
                                        <Tag text="Interest-based" hover={false} clicked={true} />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[1rem]">
                                    <h3>Blind Match</h3>
                                    <p>A platform that sets you up with a random group of people and a day/time to meet up each week. Takes in weekly availability and forms groups based on availability and loosely based on interests.</p>
                                    <p>Helps with the struggle with time constraints by finding people with matching weekly availabilities, encouraging consistent meetups.</p>
                                    <div className="flex flex-wrap gap-[0.5rem] mt-[1rem]">
                                        <Tag text="Organize social events" hover={false} clicked={true} />
                                        <Tag text="Busy-schedule compatible" hover={false} clicked={true} />
                                        <Tag text="New connections" hover={false} clicked={true} />
                                        <Tag text="Existing relationships" hover={false} clicked={false} />
                                        <Tag text="Interest-based" hover={false} clicked={false} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* LOW-FI */}
                <div id="user-testing-with-low-fidelity-prototypes" className="section">
                    <SectionHeader title="Phase 4: Testing" description="Low-fidelity prototypes and user testing" optional="Next, we created paper prototypes and user-tested both of our top ideas, Open Forum and Blind Match." />
                    {/* <table className="med-w">
                        <tr>
                            <th></th>
                            <th>Open Forum</th>
                        </tr>
                        <tr>
                            <td className="td-first-col">Tasks</td>
                            <td>
                                <ul>
                                    <li>Create a new discussion about Northeastern</li>
                                    <li>Find the Ice cream event and find the notification for it?</li>
                                    <li>Search for a petition about IS 4300</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className="td-first-col">Post-test questions</td>
                            <td>
                                <ul>
                                    <li>How easy was it to create a new discussion? What did you expect to see when you clicked on the discussion?</li>
                                    <li>What was it like using the app to engage with campus life compared to what you usually used?</li>
                                    <li>What features do you think were the most useful?</li>
                                    <li>Was there an aspect or feature of the app that you found frustrating to use?</li>
                                    <li>What aspect of the app makes it most likely for you to use it?</li>
                                </ul>
                            </td>
                        </tr>
                    </table> */}
                    <p className="mob-mid-w">Coming soon.</p>
                </div>

                {/* HIGH-FI */}
                <div id="create-high-fidelity-prototype" className="section">
                    <SectionHeader title="Phase 5: Design" description="High-fidelity prototype" optional="As the final phase of this project, I created a high-fidelity prototype of our app in Figma, incorporating notes from our user testing and all the way back to the initial research." />
                    <div className="img-bg rounded flex align-center justify-center w-full mb-[-2.75vw]">
                        <div className="self-center my-[4vw]">
                            <video autoPlay loop playsInline muted className="w-[20vw] min-w-[20rem]">
                                <source src="images/work/open-forum/open-forum-video.mov" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="half-grid-full">
                        <div className="flex flex-col">
                            <div className="bg-[#1e1e1e] rounded flex place-content-center">
                                <div className="self-center my-[6vw]">
                                    <img src="images/work/open-forum/messages.png" alt="" className="w-[32vw] min-w-[330px] dark-shadow" />
                                </div>
                            </div>
                            <p className="caption cap-top">Error prevention and feedback messages</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="bg-[#1e1e1e] rounded flex place-content-center">
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
