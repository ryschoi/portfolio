import { Link, useLocation, useParams } from "react-router-dom";
import "./navigation.css";
import { Navigate, Route, Routes } from "react-router";

export default function NavBar() {
  const { pathname } = useLocation();
  const { cid } = useParams();
  const links = [
    { label: "Work", path: `/Portfolio/Work` },
    { label: "Resume", path: `/Portfolio/Resume` },
    { label: "About", path: `/Portfolio/About` }
  ];

  return (
    // <div id="port-navbar">
    //   <Link to="/Portfolio/Home" id="port-home-link"><img src="images/name_new.png" width="130"/></Link>
    //   <div id="port-navbar-items">
    //     <span><Link to="/Portfolio/Work" className="port-nav-link">Work</Link></span>
    //     <span><Link to="/Portfolio/Resume" className="port-nav-link">Resume</Link></span>
    //     <span><Link to="/Portfolio/About" className="port-nav-link">About</Link></span>
    //   </div>
    // </div>
    <div id="navbar">
      <Link to="/Portfolio/Home" id="navbar-home-link"><img src="images/name_new.png" width="130" /></Link>
      <div id="navbar-items">
        {links.map((page) => (
          <Link key={page.path} to={page.path} className={`
            ${pathname.includes(page.label) ? "port-nav-link nav-active" : "port-nav-link"}`}>
            {page.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
