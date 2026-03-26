import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "../components/project-header";
import { Project } from "./project";
import SectionHeader from "../components/section-header";
import { section } from "./section";
import FloatingNav from "components/floating-nav";
import Collapsible from "components/collapsible";

export default function snakebiteResponse() {
    const thisProject = projects.find(p => p.path === "/snakebite-response");
    const sections: section[] = [
        { id: "research", header: "Research", description: "Learning about snakebites, specifically in Africa", optional: "I started off by researching the current state of the snakebite crisis and how one might prevent fatal encounters with snakes, focusing material specific to Botswana or Africa." },
        { id: "poster-and-concept-design", header: "Concept and poster design", description: "Developing a clean and easily-understandable visual style", optional: "" },
        { id: "wallet-cards", header: "Wallet cards", description: "Transferring poster contents into bite-size pieces of information for wallet cards", optional: "After the poster, I created a set of wallet cards with the same content on the poster for people to have a way to access the information more conveniently." },
    ];
    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} sections={sections} />
            <FloatingNav sections={sections} />
            <div className="project-content-rest">
                <div className="section" id="research">
                    <SectionHeader title={sections[0].header} description={sections[0].description} />
                    <p className="mt-no-optional w-slim">I started off by researching the current state of the snakebite crisis and how one might prevent fatal encounters with snakes, focusing material specific to Botswana or Africa. <br /><br />After collecting all the content for the poster, I decided to organize my information into the following three sections: indoor/home, outdoor/activity, and apparel.</p>

                    {/* <Collapsible closedText="What I Do" content={<p className="italic gray">Wurman's L.A.T.C.H.: location, alphabet, time, category, hierarchyWurman's L.A.T.C.H.: location, alphabet, time, category, hierarchyWurman's L.A.T.C.H.: location, alphabet, time, category, hierarchy</p>} /> */}

                    {/* <div className="w-slim">
                        <img src="images/work/snakebite-response/headers.png" className="round w-full max-w-[90vw]" />
                        <p className="caption">Headers in the final poster</p>
                    </div> */}
                </div>

                <div className="section" id="poster-and-concept-design">
                    <SectionHeader title={sections[1].header} description={sections[1].description} optional={sections[1].optional} />
                    <p className="mt-no-optional w-slim">To start off, I put all the information I had onto the poster just to see what it would look like and to determine which direction I should take the poster in. While the design was pretty unsuccessful, it was extremely helpful for quickly determining what I should and shouldn't do in terms of color/style and the structure of the poster.</p>
                    <div className="flex flex-col w-full w-slim">
                        <div className="round img-bg flex place-content-center py-[4vw]">
                            <img src="images/work/snakebite-response/snakebite_first.png" alt="" className="w-[24rem] max-w-[84vw] subtle-shadow" />
                        </div>
                        <p className="caption cap-top">First version</p>
                    </div>
                    <div className="round img-bg w-full flex place-content-center py-[2vw] w-full">
                        <img src="images/work/snakebite-response/s-res-ver1-table.png" alt="" className="w-[65rem] max-w-[90vw]" />
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="round sres-bg flex place-content-center py-[4vw]">
                            <img src="images/work/snakebite-response/snakebitePrevention.png" alt="" className="h-[44vw] max-w-[84vw]" />
                        </div>
                        <p className="caption cap-top">Final version</p>
                    </div>
                    <p className="w-slim">The result is a poster that is illustration-focused, where the text is just supporting material instead of being the main content. Though drawing is not my strong-suit, I got a lot of practice drawing simple scenes with perspective through this poster. The refinement of the color palette helps give any instance of color the important role of highlighting special items.<br /><br />The official language of Botswana is English, but it's likely that some will not know how to read English. The illustration-based poster ensures that all would be able to interpret the content in the poster, as the center scene is a picture of what their own life in Botswana might look like.</p>
                </div>

                <div className="section" id="wallet-cards">
                    <SectionHeader title={sections[2].header} description={sections[2].description} optional={sections[2].optional} />
                    <div className="round sres-bg w-full flex place-content-center">
                        <div className="grid grid-flow-col grid-rows-3 gap-[2vw] my-[4vw]">
                            <img src="images/work/snakebite-response/snakebiteWallet1.png" alt="" className="w-[25rem] max-w-[38vw]" />
                            <img src="images/work/snakebite-response/snakebiteWallet3.png" alt="" className="w-[25rem] max-w-[38vw]" />
                            <img src="images/work/snakebite-response/snakebiteWallet5.png" alt="" className="w-[25rem] max-w-[38vw]" />
                            <img src="images/work/snakebite-response/snakebiteWallet2.png" alt="" className="w-[25rem] max-w-[38vw]" />
                            <img src="images/work/snakebite-response/snakebiteWallet4.png" alt="" className="w-[25rem] max-w-[38vw]" />
                            <img src="images/work/snakebite-response/snakebiteWallet6.png" alt="" className="w-[25rem] max-w-[38vw]" />
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="round img-bg w-full flex place-content-center py-[4vw]">
                            <img src="images/work/snakebite-response/snakebiteWalletVersions.png" alt="" className="w-[50rem] max-w-[84vw] subtle-shadow" />
                        </div>
                        <p className="caption cap-top">Previous versions in print form</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
