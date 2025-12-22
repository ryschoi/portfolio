import { createPortal } from "react-dom";

export default function ScrollToTopButton() {
    return createPortal(
        <button
            onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="h4 up-arrow subtle-shadow rounded-full"
        >
            ↑
        </button>
        ,
        document.body
    );
}
