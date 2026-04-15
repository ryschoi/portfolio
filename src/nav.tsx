import NavBarItem from "./components/navbar-item";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function NavBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleWorkClick = () => {
    if (pathname === "/") {
      // already on home → just scroll
      const section = document.getElementById("filters");
      if (section) {
        const offset = 64;
        const y =
          section.getBoundingClientRect().top +
          window.pageYOffset -
          offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      // navigate home + tell it to scroll
      navigate("/", { state: { scrollTo: "filters" } });
    }
  };

  return (
    <div className="w-full flex mt-[2.5rem] mb-[4.5rem] justify-between items-start">
      <Link to="/" className="h-fit bold tracking-[-0.02rem]">
        Rebecca Choi
      </Link>

      <div className="flex gap-[3vw]">
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
  );
}
