import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div id="footer" className="mt-[8rem] mb-[4rem]">
            <hr />
            <br />
            <br />
            <div className="flex flex-row justify-between items-start">
                {/* Left side */}
                <div>
                    <Link to="/">Rebecca Choi</Link>
                    <br />
                    <br />
                    <p className="small-p gray">Coded and designed by me ◡̈</p>
                    <p className="small-p gray">Last updated: May 2025</p>
                </div>

                {/* Right side */}
                <div className="flex flex-wrap gap-[8rem]">
                    <div>
                        <Link to="/work">Work</Link><br />
                        <Link to="/resume">Resume</Link><br />
                        <Link to="/about">About</Link><br />
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