import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <div id="footer">
            <div className="footer-content">
                <div>
                    <p>Coded and designed by me</p>
                    <p className="gray small-text">Last updated: Apr 2025</p>
                </div>
            </div>

            {/* <p>Design is a methodology, development is a tool, data is the substance, and humans are the reason.</p> */}
        </div>
    );
}