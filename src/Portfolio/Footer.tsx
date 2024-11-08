import "./footer.css";
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <div id="footer">
            <Link to="/Portfolio/Home" id="navbar-home-link"><img src="images/name_new.png" alt="Logo" width="110"/></Link>
            {/* <img id="footer-image" src="images/name_new.png" width="110" /> */}
            <p id="footer-text">
                This website was designed and <a className="underline" href="https://www.figma.com/proto/D6w0M0SKBXxgUpWlnaoBF1/Website-mockup?node-id=17-43&node-type=canvas&t=D1FxF5oWeHH3jj2d-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1">prototyped using Figma</a>,
                coded in Visual Studio Code, and deployed by Netlify.
                Created by me–thank you for stopping by!</p>
        </div>
    );
}
