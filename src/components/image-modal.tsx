import { useState } from "react";
import { createPortal } from "react-dom";

export default function ImageModal({ src, alt = "" }: { src: string; alt?: string }) {
  const [open, setOpen] = useState(false);

    return (
        <>
            {/* Thumbnail */}
            <img
                src={src}
                alt={alt}
                className="cursor-pointer w-[16rem] max-w-[84vw] self-center"
                onClick={() => setOpen(true)}
            />

            {/* Modal */}
            {open &&
                createPortal(
                    <div
                        className="fixed inset-0 img-bg flex items-center justify-center z-[10000]"
                        onClick={() => setOpen(false)} // close when background clicked
                    >
                        <img
                            src={src}
                            alt={alt}
                            className="self-center w-[30rem] max-w-[84vw] subtle-shadow"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>,
                    document.getElementById("modal-root")!
                )}
        </>
    );
}
