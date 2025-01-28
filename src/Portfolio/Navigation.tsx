import { Link, useLocation } from "react-router-dom";
import "./navigation.css";

export default function NavBar() {
  const { pathname } = useLocation();
  const links = [
    { label: "Work", test: "/", path: `/` },
    { label: "Resume", test: "/resume", path: `/resume` },
    { label: "About", test: "/about", path: `/about` }
  ];

  return (
    <div id="navbar">
      <Link to="/" id="navbar-home-link"><img src="images/name_new.png" alt="Logo" width="120" /></Link>
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
