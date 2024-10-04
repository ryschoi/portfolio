import { Routes, Route, Navigate } from "react-router";
import Work from "./Work/work";
import Resume from "./Resume/resume";
import About from "./About/about";
import NavBar from "./Navigation";

export default function Home() {
  return (
    <div id="port-home">
      <NavBar />
      <Routes>
        {/* <Route path="/Home/*" element={<Home />} /> */}
        <Route path="/Work" element={<Work />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}
