import { MiscProj } from "../misc/misc-proj";

export default function MiscImageBG({project} : {project: MiscProj}) {
    return (
        <div className="zoom img-bg rounded-[0.5rem] flex align-center justify-center overflow-hidden">
            <div className="my-[3vw]">
                <img src={project.path} alt=""
                    className="w-[44rem] max-w-[85vw] subtle-shadow object-cover"
                />
            </div>
        </div>
    );
}