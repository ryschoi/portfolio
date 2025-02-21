import { Routes, Route } from "react-router";
import Work from "./Work/work";
import Resume from "./Resume/resume";
import About from "./About/about";
import NavBar from "./Navigation";
import Footer from "./Footer";

import Rockumentary from "./Work/Projects/rockumentary";
import Morningtide from "./Work/Projects/morningtide";
import TextDiagram from "./Work/Projects/textDiagram";
import SnakebiteReponse from "./Work/Projects/snakebiteResponse";
import DissonantHarmony from "./Work/Projects/dissonantHarmony";
import SunFall from "./Work/Projects/sunFall";
import SnakebiteData from "./Work/Projects/snakebiteData";
import BasicsOfTypography from "./Work/Projects/basicsOfTypography";
import MyFavoriteThings from "./Work/Projects/myFavoriteThings";
import DesignPhilosophy from "./Work/Projects/designPhilosophy";
import SchoolStairs from "./Work/Projects/schoolStairs";

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

        <Route path="/rockumentary" element={<Rockumentary />} />
        <Route path="/Work/Projects/morningtide" element={<Morningtide />} />
        <Route path="/Work/Projects/text-diagram" element={<TextDiagram />} />
        <Route path="/Work/Projects/snakebite-response" element={<SnakebiteReponse />} />
        <Route path="/Work/Projects/dissonant-harmony" element={<DissonantHarmony />} />
        <Route path="/Work/Projects/sun-fall" element={<SunFall />} />
        <Route path="/Work/Projects/snakebite-data" element={<SnakebiteData />} />
        <Route path="/Work/Projects/basics-of-typography" element={<BasicsOfTypography />} />
        <Route path="/Work/Projects/my-favorite-things" element={<MyFavoriteThings />} />
        <Route path="/Work/Projects/design-philosophy" element={<DesignPhilosophy />} />
        <Route path="/Work/Projects/school-stairs" element={<SchoolStairs />} />
      </Routes>

      <Footer />
    </div>
  );
}
