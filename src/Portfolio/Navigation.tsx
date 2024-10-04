import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div id="port-navbar">
      <Link to="/Portfolio/Home" id="port-home-link"><img src="images/name_new.png" width="140"/></Link>
      <div id="port-navbar-items">
        <span><Link to="/Portfolio/Work" id="port-work-link">Work</Link></span>
        <span><Link to="/Portfolio/Resume" id="port-resume-link">Resume</Link></span>
        <span><Link to="/Portfolio/About" id="port-about-link">About</Link></span>
      </div>
    </div>
);
}
