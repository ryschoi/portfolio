import { Routes, Route, Navigate } from "react-router";
import Work from "./Work/work";
import Resume from "./Resume/resume";
import About from "./About/about";
import NavBar from "./Navigation";
import Footer from "./Footer";

// import the components from the files
import Rockumentary from "./Work/Projects/rockumentary";
import Morningtide from "./Work/Projects/morningtide";
import TextDiagram from "./Work/Projects/textDiagram";
import DissonantHarmony from "./Work/Projects/dissonantHarmony";
import SunFall from "./Work/Projects/sunFall";
import BasicsOfTypography from "./Work/Projects/basicsOfTypography";
import MyFavoriteThings from "./Work/Projects/myFavoriteThings";
import DesignPhilosophy from "./Work/Projects/designPhilosophy";

export default function Home() {
  return (
    <div id="port-home">
      <NavBar />

      <Routes>
      <Route path="/" element={<Work />} />
        <Route path="/Home/*" element={<Work />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/About" element={<About />} />

        // setting the path, what the url displays
        <Route path="/Work/Projects/rockumentary" element={<Rockumentary />} />
        <Route path="/Work/Projects/morningtide" element={<Morningtide />} />
        <Route path="/Work/Projects/textDiagram" element={<TextDiagram />} />
        <Route path="/Work/Projects/dissonantHarmony" element={<DissonantHarmony />} />
        <Route path="/Work/Projects/sunFall" element={<SunFall />} />
        <Route path="/Work/Projects/basicsOfTypography" element={<BasicsOfTypography />} />
        <Route path="/Work/Projects/myFavoriteThings" element={<MyFavoriteThings />} />
        <Route path="/Work/Projects/designPhilosophy" element={<DesignPhilosophy />} />
      </Routes>

      <Footer />
    </div>
  );
}