import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "../components/project-header";
import SectionHeader from "components/section-header";
import { Project } from "./project";
import { section } from "./section";

export default function AliHacks() {
    const thisProject = projects.find(p => p.path === "/ali-hacks");
    const sections: section[] = [
        { header: "01. Internal portal", description: "Manage and submit hackathon applications, get details for the day of the hackathon", optional: "This is the portal where applicants will apply for the hackathon, check the status of their application, and later when accepted, get details of the day of the hackathon. Administrators also manage applications on this page." },
        { header: "02. Sponsorship package", description: "" }
    ]
    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} sections={sections} />
            <div className="project-content-rest">
                {/* <p className="w-slim self-center">Process coming soon.</p> */}

                <div className="section self-center" id="data-visualization">
                    <SectionHeader title={sections[0].header} description={sections[0].description} optional={sections[0].optional} />

                    {/* application images */}
                    <div className="flex flex-col w-full gap-[0.5rem]">
                        <div className="w-full ali-bg work-add-img-cont">
                            <div className="self-center my-[3rem]">
                                <video autoPlay loop playsInline muted className="w-[60rem] max-w-[85vw] subtle-shadow">
                                    <source src="images/work/alihacks/ali_app_video.mov" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="work-img-group-col-bigger">
                            <div className="ali-bg work-add-img-cont">
                                <div className="self-center my-[3rem]">
                                    <img src="/images/work/alihacks/inputs.png" alt="" className="w-[30vw] min-w-[18rem] subtle-shadow" />
                                </div>
                            </div>
                            <div className="ali-bg work-add-img-cont">
                                <div className="self-center my-[3rem]">
                                    <video autoPlay loop playsInline muted className="w-[30vw] min-w-[18rem] subtle-shadow">
                                        <source src="images/work/alihacks/dropdown.mov" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className="ali-bg work-add-img-cont">
                            <div className="self-center my-[3rem]">
                                <img src="/images/work/alihacks/app_status.png" alt="" className="w-[72rem] max-w-[85vw] subtle-shadow object-cover" />
                            </div>
                        </div>
                        <div className="ali-bg work-add-img-cont">
                            <div className="self-center my-[3rem]">
                                <img src="/images/work/alihacks/judging.png" alt="" className="w-[40rem] max-w-[85vw] subtle-shadow object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
