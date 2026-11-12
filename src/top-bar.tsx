import { Link, useLocation } from "react-router-dom";

// Site header: name (home link) and tagline (work page only) on the left, page links on the right.
// On mobile the tagline drops below the name/links row.
export default function TopBar() {
  const { pathname } = useLocation();

  // Already home: the name scrolls back to the top instead of re-navigating.
  const handleHomeClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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
        {pathname === "/" && (
          <p className="nanum font-normal text-[1rem] order-last w-full md:order-none md:w-auto">
            Product designer building scalable systems and invisible interfaces
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
