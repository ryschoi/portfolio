import { useState } from "react";
import { MiscProj } from "../misc/misc-proj";

export default function MiscCard({ project }: { project: MiscProj }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col gap-[1rem] w-full">
            {/* IMAGE */}
            <div className="misc-img zoom round flex items-center justify-center overflow-hidden cursor-pointer"
                onClick={() => setIsOpen(true)} >
                <img src={project.path} alt="" className="w-full" />
            </div>

            {/* MODAL */}
            {isOpen && (
                <div className="fixed w-full flex z-50" onClick={() => setIsOpen(false)}>
                    <div className="overflow-auto" onClick={(e) => e.stopPropagation()}>
                    </div>
                </div>
            )}
        </div>
    );
}

