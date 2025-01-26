import "./footer.css";
import { Link, useLocation } from "react-router-dom";


export default function Footer() {
    const { pathname } = useLocation();
    const links = [
        { label: "Work", path: `/Portfolio/Work` },
        { label: "Resume", path: `/Portfolio/Resume` },
        { label: "About", path: `/Portfolio/About` }
    ];
    const checkHome = (page: string) => { return pathname.includes("Home") && page.includes("Work") };
    return (
        <div id="footer">
            <div>
                <Link to="/Portfolio/Home" id="navbar-home-link"><img src="images/name_new.png" alt="Logo" width="110" /></Link>
                <p className="gray">UI/UX, information design, web development, and data analysis & visualization</p>
            </div>
            <div id="navbar-items">
                {links.map((page) => (
                    <Link key={page.path} to={page.path} className={`
            ${pathname.includes(page.label) || checkHome(page.label) ? "port-nav-link nav-active" : "port-nav-link"}`}>
                        {page.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}
