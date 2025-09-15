import { MiscProj } from "../misc/misc-proj";

export default function MiscImageBG({project} : {project: MiscProj}) {
    return (
        <div className="zoom img-bg rounded flex align-center justify-center overflow-hidden">
                <img src={project.path} alt=""
                    className="w-full subtle-shadow object-cover p-[3vw]"
                />
        </div>
    );
}