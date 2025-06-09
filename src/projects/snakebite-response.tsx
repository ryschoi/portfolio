import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "../components/project-header";
import { Project } from "./project";
import SectionHeader from "../components/section-header";
import TwoImageCaption from "../components/two-image-caption";
import VerticalImageSpan from "../components/vertical-image-span";
import Task from "../components/task";

export default function snakebiteResponse() {
    const thisProject = projects.find(p => p.path === "/snakebite-response");
    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} />

            <div className="project-content-rest">
                <Task task="Create a poster guide and wallet cards for snakebite prevention in Botswana" processItems={["Research", "Poster and concept design", "Wallet cards"]} />

                <div className="section" id="research">
                    <SectionHeader title="Part 1" description="Research" optional="To start off, I conducted research on the current snakebite crisis, focusing on its effects in Africa, and how to prevent fatal encounters with snakes, also focused on Africa and Botswana." />
                    <img src="images/work/s-res-research.png" alt="" className="mob-mid-w self-center subtle-shadow rounded-[0.5rem]" />
                    <p className="mob-mid-w self-center">After collecting all the tips for snakebite prevention, it was time to identify a primary organizing principle from Wurman's L.A.T.C.H. (location, alphabet, time, category, hierarchy). My information sorted best categorically, and into the following three categories: indoor/home, outdoor/activity, and apparel.</p>
                </div>

                <div className="section" id="poster-and-concept-design">
                    <SectionHeader title="Part 2" description="Poster and Concept Design" optional="To start off, I put all the information I had onto the poster just to see what it would look like and to determine which direction I should take the poster in. While the design was pretty unsuccessful, it was extremely helpful for determining how I should structure the poster moving forward." />
                    <div className="flex flex-col">
                        <VerticalImageSpan path="images/work/snakebite_first.png" />
                        <p className="caption cap-top">First version</p>
                    </div>
                    <div className="rounded-[0.5rem] img-bg w-full flex place-content-center py-[2vw] w-full">
                        <img src="images/work/s-res-ver1-table.png" alt="" className="w-[65rem] max-w-[90vw]" />
                    </div>
                    <div className="flex flex-col">
                        <VerticalImageSpan path="images/work/snakebitePrevention.png" />
                        <p className="caption cap-top">Final version</p>
                    </div>
                    <p className="mob-mid-w self-center">The result is a poster that is illustration-focused, where the text supports instead of creating the content. Though drawing is not my strong-suit, I got a lot of practice drawing simple scenes with perspective through this poster. The refinement of the color palette helps give any instance of color the important role of highlighting special items.<br /><br />The official language of Botswana is English, but it's likely the some will not know how to read English. The illustration-based poster ensures that all would be able to interpret the content in the poster, as the center scene is a picture of what their own life in Botswana might look like.</p>
                </div>
                <div className="section" id="wallet-cards">
                    <SectionHeader title="Part 3" description="Wallet cards" optional="After the poster, I created a set of wallet cards with the same content on the poster for people to have a way to access the information more conveniently." />
                    <div className="rounded-[0.5rem] img-bg w-full flex place-content-center">
                        <div className="grid grid-flow-col grid-rows-3 gap-[2rem] my-[4vw]">
                            <img src="images/work/snakebiteWallet1.png" alt="" className="w-[26rem] max-w-[40vw] subtle-shadow" />
                            <img src="images/work/snakebiteWallet3.png" alt="" className="w-[26rem] max-w-[40vw] subtle-shadow" />
                            <img src="images/work/snakebiteWallet5.png" alt="" className="w-[26rem] max-w-[40vw] subtle-shadow" />
                            <img src="images/work/snakebiteWallet2.png" alt="" className="w-[26rem] max-w-[40vw] subtle-shadow" />
                            <img src="images/work/snakebiteWallet4.png" alt="" className="w-[26rem] max-w-[40vw] subtle-shadow" />
                            <img src="images/work/snakebiteWallet6.png" alt="" className="w-[26rem] max-w-[40vw] subtle-shadow" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <div className="rounded-[0.5rem] img-bg w-full flex place-content-center py-[4vw]">
                        <img src="images/work/snakebiteWalletVersions.png" alt="" className="w-[50rem] max-w-[84vw] subtle-shadow" />
                    </div>
                    <p className="caption cap-top">Previous versions in print form</p>
                </div>
            </div>
        </div>
    );
}
