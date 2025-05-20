import { Link, useLocation } from "react-router-dom";
import "./nav.css";

export default function NavBar() {
  const { pathname } = useLocation();
  const links = [
    { label: "Work", test: "/", path: `/` },
    { label: "Resume", test: "/resume", path: `/resume` },
    { label: "About", test: "/about", path: `/about` }
  ];

  return (
    <div className="h-[4.5rem] content-end mb-[4rem]">
      <div className="flex flex-row justify-between">
        <Link to="/"><img src="images/name.png" alt="Logo" className="w-[7rem]" /></Link>
        <div className="flex flex-row gap-[4rem]">
          {links.map((page) => (
            <Link key={page.path} to={page.path}
            className={`${pathname.endsWith(page.path) ? "no-underline nav-active link" : "no-underline link"}`}>
              {page.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
