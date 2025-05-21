import "./footer.css";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
    const location = useLocation();

    const handleClick = (to: string) => {
        if (location.pathname === to && ['/', '/about', '/resume'].includes(to)) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div id="footer" className="mt-[8rem] mb-[4.5rem]">
            <hr />
            <br />
            <br />
            <div className="flex flex-row justify-between items-end">
                {/* Left side */}
                <div>
                    <Link to="/" onClick={() => handleClick('/')}>Rebecca Choi</Link>
                    <br />
                    <br />
                    <p className="caption">Coded and designed by me ◡̈</p>
                    <p className="caption">Last updated: May 2025</p>
                </div>

                {/* Right side */}
                <div className="flex flex-wrap gap-[8rem]">
                    <div>
                        <Link to="/" onClick={() => handleClick('/')}>Work</Link><br />
                        <Link to="/resume" onClick={() => handleClick('/resume')}>Resume</Link><br />
                        <Link to="/about" onClick={() => handleClick('/about')}>About</Link><br />
                    </div>
                    <div>
                        <p>choi.re@northeastern.edu</p>
                        <p>(510) 682-0020</p>
                        <a href="https://www.linkedin.com/in/ryschoi/" className="underline">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    );
}