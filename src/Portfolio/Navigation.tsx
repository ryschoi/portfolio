import { Link, useLocation } from "react-router-dom";
import "./navigation.css";

export default function NavBar() {
  const { pathname } = useLocation();
  const links = [
    { label: "Work", path: `/Portfolio/Work` },
    { label: "Resume", path: `/Portfolio/Resume` },
    { label: "About", path: `/Portfolio/About` }
  ];
  const checkHome = (page: string) => { return pathname.includes("Home") && page.includes("Work") };

  return (
    <div id="navbar">
      <Link to="/Portfolio/Home" id="navbar-home-link"><img src="images/name_new.png" alt="Logo" width="120" /></Link>
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
