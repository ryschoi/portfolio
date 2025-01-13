import "./footer.css";
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        // <div id="footer">
        //     {/* <hr /> */}
        //     <Link to="/Portfolio/Home" id="navbar-home-link"><img src="images/name_new.png" alt="Logo" width="110" /></Link>
        //     <div id="footer-content">
        //         <p id="footer-contact">
        //             <br />
        //             <a href="choi.re@northeastern.edu">choi.re@northeastern.edu</a><br />
        //             <a href="rebecca.choi05@gmail.com">rebecca.choi05@gmail.com</a><br />
        //             {/* (510) 682-0020 */}
        //         </p>
        //         <p id="footer-text">
        //         <br />
        //             This website was designed and <a href="https://www.figma.com/proto/D6w0M0SKBXxgUpWlnaoBF1/Website-mockup?node-id=17-43&node-type=canvas&t=D1FxF5oWeHH3jj2d-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1">prototyped using Figma</a>,
        //             coded in Visual Studio Code, and deployed by Netlify.
        //             Created by me–thank you for stopping by!</p>
        //     </div>
        // </div>
        <div id="footer">
            <Link to="/Portfolio/Home" id="navbar-home-link"><img src="images/name_new.png" alt="Logo" width="110"/></Link>
            <p id="footer-text">
                This website was designed and <a className="underline" href="https://www.figma.com/proto/D6w0M0SKBXxgUpWlnaoBF1/Website-mockup?node-id=17-43&node-type=canvas&t=D1FxF5oWeHH3jj2d-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1">prototyped using Figma</a>,
                coded in Visual Studio Code, and deployed by Netlify.
                Created by me–thank you for stopping by!</p>
        </div>
    );
}
