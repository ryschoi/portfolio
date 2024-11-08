import * as db from "../Database";
import { useParams } from "react-router-dom";

export default function Projects() {
    const { cid } = useParams();
    const projects = db.projects;
    const links = [{ path: `/Portfolio/Work/Projects/${cid}/` }];

    return (
        <div>
            {/* MAP HEADING */}
            <div className="project-heading">
                {/* {projects
                    .filter((project: any) => project.path === cid)
                    .map((project: any) => (
                        <div className="project-heading">
                            <div className="project-heading-left">
                                <h1 className="project-heading-title">project.title</h1>
                                <p className="project-heading-details gray">
                                    project.date<br />project.tags
                                </p>
                            </div>
                            <p className="project-heading-des">
                                project.description
                            </p>
                        </div>
                    ))
                } */}
            </div>

            {/* ROUTE TO REST OF CONTENT */}
            <div className="project-content-rest">
                kl
            </div>
        </div>
    );
}

// on the work page, you will click on a project image which will take you to the project page
// on the project page: mapped heading content and component for that project's rest of content.
// create components for each project's rest-of-content
// import into same file as heading mapping