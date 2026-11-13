import { Link, useLocation } from "react-router-dom";
import { projects } from "./database";

// Site header: name (home link) and a subtitle on the left, page links on the right.
// The subtitle is the tagline on the work page and "work/" + the project's name followed
// by its year in gray on a project page.
// On mobile the subtitle drops below the name/links row.
export default function TopBar() {
  const { pathname } = useLocation();

  // Already home: the name scrolls back to the top instead of re-navigating.
  const handleHomeClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isHome = pathname === "/";
  const project = projects.find((p) => p.path === pathname);
  const subtitle = isHome
    ? "Product designer building scalable systems and invisible interfaces"
    : project && (
        <>
          <a href="/" className="nanum gray no-underline hover:no-underline hover:font-medium">
            <span className="nanum gray">Work</span>
          </a>
          <span className="nanum gray"> / </span>
          {project.name}
          <span className="nanum gray ml-[0.25rem]">{project.year}</span>
        </>
      );

  const links = [
    { name: "Craft", path: "/craft" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="nanum flex flex-wrap md:flex-nowrap items-baseline justify-between gap-y-[0.75rem] pt-[1.875rem] md:mb-[2rem] mb-[2.5rem]">
      <div className="contents md:flex md:items-baseline">
        <Link
          to="/"
          onClick={handleHomeClick}
          className="nanum font-bold text-[1.125rem] tracking-[-0.02em] no-underline md:w-[13.125rem] md:shrink-0"
        >
          Rebecca Choi
        </Link>
        {subtitle && (
          // On desktop, a project's name lines up with the project header's centered
          // column (mob-mid-w: min(85vw, 832px) inside #root's 92vw), offset by the
          // name's fixed width; it falls back to sitting right after the name when
          // that column starts further left than the name ends.
          <p
            className={`nanum font-normal text-[1rem] order-last w-full md:order-none md:w-auto ${
              isHome
                ? ""
                : "md:ml-[max(0px,calc((92vw_-_min(85vw,832px))_/_2_-_13.125rem))]"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
      <nav className="flex gap-[1.75rem]">
        {links.map(({ name, path }) => (
          <Link
            key={path}
            to={path}
            className={`nanum font-normal text-[1rem] no-underline green-hover ${pathname === path ? "nav-active" : ""}`}
          >
            {name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
