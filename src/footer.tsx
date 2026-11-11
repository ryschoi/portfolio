import { Link, useLocation, useNavigate } from "react-router-dom";
import CopyText from "./components/copy-text";

export default function Footer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleWorkClick = () => {
    if (pathname !== "/") {
      navigate("/", { state: { scrollTo: "filters" } });
    } else {
      const section = document.getElementById("filters");
      if (section) {
        const offset = 64;
        const y =
          section.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const handleClick = (to: string) => {
    if (
      pathname === to &&
      ["/", "/background", "/about", "/resume"].includes(to)
    ) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      id="footer"
      className="w-slim mt-[6rem] mb-[2.5rem] md:w-full md:max-w-full"
    >
      <hr />
      <div className="flex flex-wrap justify-between items-start gap-y-[3.5rem] mt-[2rem]">
        <p className="caption">Coded and designed by me ◡̈</p>

        <div className="flex gap-[1rem]">
          <CopyText text="rebecca.choi05@gmail.com" followCursor />
          <a href="https://www.linkedin.com/in/ryschoi/">LinkedIn</a>
          <a href="/images/Rebecca_Choi_Resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <a href="https://github.com/ryschoi" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
