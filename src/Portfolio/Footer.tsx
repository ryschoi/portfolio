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
            <div id="navbar-items">
                {links.map((page) => (
                    <Link key={page.path} to={page.path} className={`
            ${pathname.endsWith(page.test) ? "port-nav-link nav-active" : "port-nav-link"}`}>
                        {page.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}
