import NavBarItem from "./components/navbar-item";
import Pill from "./components/pill";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Left column of the 2-column layout: nav on top, landing statement at the
// bottom. Sticks to the viewport on desktop; stacks above the content on mobile.
export default function Sidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleWorkClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col gap-[4rem] pt-[2.5rem] mb-[4.5rem] md:mb-0 md:pb-[3rem] md:sticky md:top-0 md:h-svh md:justify-between">
      {/* NAV */}
      <div className="flex flex-col gap-[1.5rem]">
        <Link to="/" className="h-fit bold tracking-[-0.02rem] hidden md:block">
          Rebecca Choi
        </Link>
        <div className="flex mx-[4%] justify-between md:m-0 md:flex-col md:items-start md:gap-[0.25rem]">
          <button
            onClick={handleWorkClick}
            className={`p-[0px] caption bg-transparent
              ${pathname === "/"
                ? "nav-active green-hover"
                : "gray work-hover green-hover"
              }`}
          >
            Work
          </button>
          <NavBarItem name="Background" path="/background" currentPage={pathname} />
          <NavBarItem name="About" path="/about" currentPage={pathname} />
        </div>
      </div>

      {/* LANDING STATEMENT */}
      <div className="w-slim md:w-full flex flex-col gap-[2rem] md:gap-[1.75rem]">
        <p className="green caption tracking-[-0.25px] mb-[-0.75rem]"><span className="live-pulse caption green">●</span> Prev. Design Intern @ Apple, cs & Design @ Northeastern</p>
        <h1 className="nanum leading-[1.3]">Hi, I'm Rebecca. Product designer building scalable and invisible systems.</h1>
        <div className="flex flex-wrap gap-[0.5rem] mt-[-0.5rem]">
          <Pill
            hover={true}
            clicked={false}
            path="/background"
            tooltip="What are my design principles? Why tech + design? How did I get here??"
          >
            <span className="hidden md:inline">Read about my work background</span>
            <span className="md:hidden">Work background</span>
          </Pill>
          <Pill
            hover={true}
            clicked={false}
            path="/about#contacts"
            text="Contact me"
            tooltip="Email, resume, LinkedIn..."
          />
        </div>
      </div>
    </div>
  );
}
