import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "../components/project-header";
import SectionHeader from "components/section-header";
import { Project } from "./project";
import { section } from "./section";
import FloatingNav from "components/floating-nav";

export default function AliHacks() {
    const thisProject = projects.find(p => p.path === "/ali-hacks");
    const sections: section[] = [
        { id:"internal-portal", header: "Internal portal", description: "Manage and submit hackathon applications, get details for the day of the hackathon", optional: "This is the portal where applicants will apply for the hackathon, check the status of their application, and later when accepted, get details of the day of the hackathon. Administrators also manage applications on this page." },
        { id:"sponsorship-package", header: "Sponsorship package", description: "Informational flyer to send out to potential sponsors" }
    ]
    return (
        <div className="project-content">
            <ProjectHeader project={thisProject as Project} sections={sections} />
            <FloatingNav sections={sections} />
            <div className="project-content-rest">
                <div className="section self-center" id="internal-portal">
                    <SectionHeader title={sections[0].header} description={sections[0].description} optional={sections[0].optional} />

                    {/* application images */}
                    <div className="flex flex-col w-full gap-[0.5rem]">
                        <div className="w-full ali-bg work-add-img-cont">
                            <div className="self-center my-[3rem]">
                                <video autoPlay loop playsInline muted className="w-[60rem] max-w-[85vw] subtle-shadow round">
                                    <source src="images/work/alihacks/full_proto.mov" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="work-img-group-col-bigger">
                            <div className="ali-bg work-add-img-cont">
                                <div className="self-center my-[3rem]">
                                    <video autoPlay loop playsInline muted className="w-[24vw] min-w-[18rem]">
                                        <source src="images/work/alihacks/app_status_vid.mov" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                            <div className="ali-bg work-add-img-cont">
                                <div className="self-center my-[3rem]">
                                    <video autoPlay loop playsInline muted className="w-[30vw] min-w-[18rem] subtle-shadow round">
                                        <source src="images/work/alihacks/dropdown.mov" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                        {/* <div className="ali-bg work-add-img-cont">
                            <div className="self-center my-[3rem]">
                                <img src="/images/work/alihacks/app_status.png" alt="" className="w-[72rem] max-w-[85vw] subtle-shadow object-cover" />
                            </div>
                        </div>
                        <div className="ali-bg work-add-img-cont">
                            <div className="self-center my-[3rem]">
                                <img src="/images/work/alihacks/judging.png" alt="" className="w-[40rem] max-w-[85vw] subtle-shadow object-cover" />
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="section self-center" id="sponsorship-package">
                    <SectionHeader title={sections[1].header} description={sections[1].description} optional={sections[1].optional} />
                    <p className="mt-no-optional w-slim">Many sponsors noted that the design of the sponsorship package was a big reason why they decided to partner with the hackathon!</p>
                    <div className="w-full ali-bg-2 work-add-img-cont overflow-hidden">
                        <div className="my-[2rem] ml-[2.5rem]">
                            <div className="scroll-static">
                                <img src="images/work/alihacks/sp1.png" className="spons-img" />
                                <img src="images/work/alihacks/sp2.png" className="spons-img" />
                                <img src="images/work/alihacks/sp3.png" className="spons-img" />
                                <img src="images/work/alihacks/sp4.png" className="spons-img" />
                                <img src="images/work/alihacks/sp5.png" className="spons-img" />
                                <img src="images/work/alihacks/sp6.png" className="spons-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
