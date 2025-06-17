import { MiscProj } from "../misc/misc-proj";
import MiscImageBG from "./misc.image-bg";

export default function MiscCard({ project }: { project: MiscProj }) {
    return (
        <div className="flex flex-col gap-[1rem] w-full">
            {/* IMAGES */}
            <div className="img-bg zoom rounded-[0.5rem] flex items-center justify-center overflow-hidden">
                <img src={project.path} alt=""
                    className="w-full subtle-shadow object-cover p-[3vw]"
                />
            </div>

            {/* TEXT */}
            <div className="">
                <div className="flex flex-col w-full mb-[0.8vh]">
                    <h3>{project.description}</h3>
                </div>
                <p className="caption">{project.title}, {project.year}</p>
            </div>
        </div>
    );
}