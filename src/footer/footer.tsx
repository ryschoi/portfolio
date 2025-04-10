import React from 'react';
import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <div id="footer">
            <div className="footer-content">
                <Link to="/" id="navbar-home-link"><img src="images/name.png" alt="Logo" width="110" /></Link>
                <div>
                    <p>Coded and designed by me–thank you for stopping by!</p>
                    <p className="gray small-text">Last updated: Apr 2025</p>
                </div>
            </div>

            {/* <p>Design is a methodology, development is a tool, data is the substance, and humans are the reason.</p> */}
        </div>
    );
}