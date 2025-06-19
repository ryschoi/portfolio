import { Link, useLocation } from "react-router-dom";
import "./nav.css";

export default function NavBar() {
  const { pathname } = useLocation();
  const links = [
    { label: "Work", path: `/` },
    // { label: "Misc", path: `/misc` },
    { label: "Resume", path: `/resume` },
    { label: "About", path: `/about` }
  ];

  return (
    <div id="nav" className="h-[4rem] content-end mb-[4rem]">
      <div className="flex flex-row justify-between">
        {links.map((page) => (
          <Link key={page.path} to={page.path}
            className={`${pathname.endsWith(page.path) ? "no-underline nav-active" : "gray no-underline"}`}>
            {page.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
