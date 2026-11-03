import NavBarItem from "./components/navbar-item";
import Pill from "./components/pill";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import CopyText from "./components/copy-text";

// Left column of the 2-column layout: nav on top, landing statement at the
// bottom. Sticks to the viewport on desktop; stacks above the content on mobile.
export default function Sidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // On desktop, shrink the sticky sidebar by however much of the footer is on
  // screen, so the bottom section (contact/links) rides up above the footer
  // instead of getting covered, while the top section stays put.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const update = () => {
      const el = sidebarRef.current;
      const footer = document.getElementById("footer-wrap");
      if (!el) return;
      if (!desktop.matches || !footer) {
        el.style.height = "";
        return;
      }
      const overlap = Math.max(
        0,
        window.innerHeight - footer.getBoundingClientRect().top,
      );
      el.style.height = overlap > 0 ? `calc(100svh - ${overlap}px)` : "";
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    desktop.addEventListener("change", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      desktop.removeEventListener("change", update);
    };
  }, [pathname]);

  const handleWorkClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <div
      ref={sidebarRef}
      className="flex flex-col gap-[4rem] pt-[2.5rem] mb-[4.5rem] md:mb-0 md:pb-[3rem] md:sticky md:top-0 md:h-svh md:justify-between"
    >
      {/* NAV */}
      <div className="flex flex-col gap-[3rem]">
        <div className="flex flex-col gap-[0.5rem]">
          <Link
            to="/"
            className="h-fit bold tracking-[-0.02rem] hidden md:block"
          >
            <h1 className="nanum leading-[1.3]">Rebecca Choi</h1>
          </Link>
          <p className="gray">
            Product designer building scalable systems and invisible interfaces
          </p>
        </div>
        <p className="green tracking-[-0.25px] mb-[-0.75rem]">
          <span className="live-pulse green">●</span> Prev. at Apple, finishing
          up my CS & Design degree @ Northeastern
        </p>
        <div className="flex mx-[4%] justify-between md:m-0 md:flex-col md:items-start md:gap-[0.25rem]">
          <button
            onClick={handleWorkClick}
            className={`p-[0px] caption bg-transparent
              ${
                pathname === "/"
                  ? "nav-active green-hover"
                  : "gray work-hover green-hover"
              }`}
          >
            Work
          </button>
          {/* <NavBarItem
            name="Background"
            path="/background"
            currentPage={pathname}
          /> */}
          <NavBarItem name="Craft" path="/craft" currentPage={pathname} />
          <NavBarItem name="About" path="/about" currentPage={pathname} />
        </div>
        {/* contact */}
        {/* <div>
          <div className="flex flex-col gap-[0.25rem]">
            <CopyText text="rebecca.choi05@gmail.com" />
            <a href="https://www.linkedin.com/in/ryschoi/">LinkedIn</a>
            <a
              href="/images/Rebecca_Choi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a
              href="https://github.com/ryschoi"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}
