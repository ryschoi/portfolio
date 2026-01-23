import { createPortal } from "react-dom";
import { useScrollUp } from "./use-scroll-up";

export default function ProcessButton() {
    const showButton = useScrollUp();

    return createPortal(
        <button
            onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className={`process-button ${showButton ? "visible" : "hidden"} rounded-full`}
        >
            + Show process
        </button>
        ,
        document.body
    );
}
