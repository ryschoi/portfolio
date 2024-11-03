import "./footer.css";
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <div id="footer">
            <Link to="/Portfolio/Home" id="navbar-home-link"><img src="images/name_new.png" width="110"/></Link>
            {/* <img id="footer-image" src="images/name_new.png" width="110" /> */}
            <p id="footer-text">
                This website was designed and prototyped using Figma,
                coded in Visual Studio Code, and deployed by Netlify.
                Created by me–thank you for stopping by!</p>
        </div>
    );
}
