import "./projects.css";
import { projects } from "../../Database";
import ProjectHeader from "./projectHeader";
import { Project } from "./Project";

export default function snakebiteResponse() {
    const thisProject = projects.find(p => p.path === "/snakebite-response");
    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} />

            <div className="project-content-rest">
                <div className="col22">
                    <p className="section-titles">
                        Snakebite Response Poster<br />
                        <span className="italic">A2 size</span>
                    </p>
                    <img src="images/work/snakebitePrevention.png" alt="" width="100%" />
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
