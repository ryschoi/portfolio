import { MiscProj } from "../misc/misc-proj";
import MiscImageBG from "./misc.image-bg";

export default function MiscCard({ project }: { project: MiscProj }) {
    return (
        <div className="flex flex-col gap-[2rem] w-full">
            {/* IMAGES */}
            <div className="flex flex-col w-full">
                <MiscImageBG project={project} />
            </div>
            {/* TEXT */}
            <div className="flex flex-col gap-[0.8vh]">
                <div className="flex flex-col w-full">
                    <h3>{project.description}</h3>
                </div>
                <p className="caption">{project.title}, {project.year}</p>
            </div>
        </div>
    );
}