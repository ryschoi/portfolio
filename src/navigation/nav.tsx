import { Link, useLocation } from "react-router-dom";
import "./nav.css";

export default function NavBar() {
  const { pathname } = useLocation();
  const links = [
    { label: "Work", path: `/` },
    // { label: "Misc", path: `/misc` },
    // { label: "Resume", path: `/resume` },
    { label: "Background", path: `/background` },
    { label: "About", path: `/about` }
  ];

  return (
    <div id="nav" className="w-full self-center h-[4rem] content-end mt-[5vh] mb-[3rem] flex flex-row justify-between">
        {/* <Link key='/' to='/' className="h2 leading-snug">Rebecca<br />Choi</Link> */}
        {links.map((page) => (
          <Link key={page.path} to={page.path}
            className={`${pathname.endsWith(page.path) ? "no-underline nav-active" : "gray no-underline"}`}>
            {page.label}
          </Link>
        ))}
    </div>
  );
}
