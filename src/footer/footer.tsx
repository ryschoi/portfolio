import "./footer.css";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
    const location = useLocation();

    const handleClick = (to: string) => {
        if (location.pathname === to && ['/', '/background', '/about', '/resume'].includes(to)) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div id="footer" className="mt-[8rem] mb-[4.5rem]">
            <hr />
            <br />
            <br />
            <div className="flex flex-wrap justify-between items-start gap-y-[3.5rem]">
                {/* Left side */}
                <div className="flex flex-col gap-[3vw]">
                    <Link to="/" onClick={() => handleClick('/')}>Rebecca Choi</Link>
                    <div>
                        <p className="caption">Coded and designed by me ◡̈</p>
                        <p className="caption">Last updated: Sept 2025</p>
                    </div>
                </div>

                {/* Right side */}
                <div className="flex justify-between w-[28rem]">
                    <div>
                        <p className="caption mb-[0.5rem]">Pages</p>
                        <Link to="/" onClick={() => handleClick('/')}>Work</Link><br />
                        <Link to="/resume" onClick={() => handleClick('/resume')}>Resume</Link><br />
                        <Link to="/background" onClick={() => handleClick('/background')}>Background</Link><br />
                        <Link to="/about" onClick={() => handleClick('/about')}>About</Link><br />
                    </div>
                    <div>
                        <p className="caption mb-[0.5rem]">Contact</p>
                        <p>choi.re@northeastern.edu</p>
                        <p>(510) 682-0020</p>
                        <a href="https://www.linkedin.com/in/ryschoi/" className="underline">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    );
}