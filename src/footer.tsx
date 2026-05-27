import { Link, useLocation, useNavigate } from "react-router-dom";

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
                    section.getBoundingClientRect().top +
                    window.pageYOffset -
                    offset;

                window.scrollTo({ top: y, behavior: "smooth" });
            }
        }
    };


    const handleClick = (to: string) => {
        if (pathname === to && ['/', '/background', '/about', '/resume'].includes(to)) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div id="footer" className="w-slim mt-[8rem] mb-[4.5rem] md:w-full md:max-w-full">
            <hr />
            <br />
            <br />
            <div className="flex flex-wrap justify-between items-start gap-y-[3.5rem]">
                {/* Left side */}
                <div className="flex flex-col gap-[3vw]">
                    <Link to="/" onClick={() => handleClick('/')} className="font-[350]">Rebecca Choi</Link>
                    <div>
                        <p className="caption">Coded and designed by me ◡̈</p>
                        <p className="caption">Last updated: Mar 2026</p>
                    </div>
                </div>

                {/* Right side */}
                <div className="flex justify-between w-[28rem]">
                    <div>
                        <p className="caption mb-[0.5rem]">Pages</p>
                        <button
                            onClick={handleWorkClick}
                            className="cursor-pointer bg-transparent p-style green-hover p-[0px] block">
                            Work
                        </button>
                        <Link to="/background" onClick={() => handleClick('/background')}>Background</Link><br />
                        <Link to="/about" onClick={() => handleClick('/about')}>About</Link><br />
                    </div>
                    <div>
                        <p className="caption mb-[0.5rem]">Contact</p>
                        <p>rebecca.choi05@gmail.com</p>
                        <p>(510) 682-0020</p>
                        {/* <a href="https://www.linkedin.com/in/ryschoi/" className="underline">LinkedIn</a> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
