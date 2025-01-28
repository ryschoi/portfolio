import "./footer.css";
import { Link, useLocation } from "react-router-dom";


export default function Footer() {
    const { pathname } = useLocation();
    const links = [
        { label: "Work", test: "/", path: `/` },
        { label: "Resume", test: "/resume", path: `/resume` },
        { label: "About", test: "/about", path: `/about` }
    ];

    return (
        <div id="footer">
            <div>
                <Link to="/" id="navbar-home-link"><img src="images/name_new.png" alt="Logo" width="110" /></Link>
                <p id="skills" className="gray">UI/UX, information design, web development, data analysis & visualization</p>
            </div>
            <div id="contact">
                <p id="contact-info">
                    <a className="underline gray" href="choi.re@northeastern.edu">choi.re@northeastern.edu</a> | <a className="underline gray" href="https://www.linkedin.com/in/rebecca-choi-3479b916a">LinkedIn</a> | <a className="underline gray" href="images/Rebecca_Choi_Resume.pdf">Resume</a>
                </p>
            </div>
        </div>
    );
}
