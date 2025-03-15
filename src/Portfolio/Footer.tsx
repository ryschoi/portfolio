import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <div id="footer">
            <Link to="/" id="navbar-home-link"><img src="images/name_new.png" alt="Logo" width="110" /></Link>
            <p>Coded and designed by me–thank you for stopping by!</p>
            <p className="gray small-text italic">Last updated: Mar 2025</p>
        </div>
    );
}
