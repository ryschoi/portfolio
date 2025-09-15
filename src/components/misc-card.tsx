import { useState, useEffect } from "react";
import { MiscProj } from "../misc/misc-proj";
import MiscModal from "./misc-modal";

export default function MiscCard({ project }: { project: MiscProj }) {
    const [isOpen, setIsOpen] = useState(false);

    // useEffect(() => {
    //     const body = document.body;
    //     if (isOpen) {
    //         body.classList.add("frosted");
    //     } else {
    //         body.classList.remove("frosted");
    //     }
    //     return () => {
    //         body.classList.remove("frosted");
    //     };
    // }, [isOpen]);

    return (
        <div className="flex flex-col gap-[1rem] w-full">
            {/* IMAGE */}
            <div className="misc-img zoom rounded flex items-center justify-center overflow-hidden cursor-pointer"
                onClick={() => setIsOpen(true)} >
                <img src={project.path} alt="" className="w-full" />
            </div>

            {/* MODAL */}
            {isOpen && (
                <div className="fixed w-full flex z-50" onClick={() => setIsOpen(false)}>
                    <div className="overflow-auto" onClick={(e) => e.stopPropagation()}>
                        <MiscModal project={project} />
                    </div>
                </div>
            )}
        </div>
    );
}

{/* <div className="fixed w-full z-50 flex items-center justify-center" onClick={() => setIsOpen(false)}>
    <div className="max-w-[90vw] max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
        <MiscModal project={project} />
    </div>
</div> */}