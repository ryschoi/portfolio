import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "../components/project-header";
import { Project } from "./project";
import SectionHeader from "../components/section-header";
import TwoImageCaption from "../components/two-image-caption";
import VerticalImageSpan from "../components/vertical-image-span";

export default function snakebiteResponse() {
    const thisProject = projects.find(p => p.path === "/snakebite-response");
    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} />

            <div className="project-content-rest">
                <SectionHeader title="Snakebite Response Poster process" description="Name" optional="" />
                <p className="mob-mid-w">To start off, I conducted research on the current snakebite crisis, focusing on its effects in Africa, and how to prevent fatal encounters with snakes, also focused on Africa and Botswana.</p>

                <div className="flex flex-col gap-[3rem] w-full">
                    <h2 className="self-center mob-mid-w">Final A2 poster</h2>
                    <VerticalImageSpan path="images/work/snakebitePrevention.png" />
                </div>

                <div className="col22">
                    <p className="section-titles">
                        Supplementary wallet cards<br />
                        <span className="italic">Folding panels of 88 x 55 mm</span>
                    </p>
                    <img src="images/work/snakebiteWallet.png" alt="" width="25%" />
                    <div className="row22">
                        <img src="images/work/snakebiteWallet1.png" alt="" width="33%" />
                        <img src="images/work/snakebiteWallet2.png" alt="" width="33%" />
                        <img src="images/work/snakebiteWallet3.png" alt="" width="33%" />
                    </div>
                    <div className="row22">
                        <img src="images/work/snakebiteWallet4.png" alt="" width="33%" />
                        <img src="images/work/snakebiteWallet5.png" alt="" width="33%" />
                        <img src="images/work/snakebiteWallet6.png" alt="" width="33%" />
                    </div>
                </div>

                <div className="col22 slim">
                    <p className="section-titles">Previous iterations in print form</p>
                    <div className="row22">
                        <img src="images/work/snakebiteWalletVersions.png" alt="" width="100%" />
                    </div>
                </div>
            </div>
        </div>
    );
}
