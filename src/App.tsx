import ResetScroll from "./reset-scroll"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Work from "./work/work"
import Misc from "./misc/misc"
import Resume from "./resume/resume";
import About from "./about/about";
import NavBar from "./navigation/nav"
import Footer from "./footer/footer";

import Rockumentary from './projects/rockumentary';
import Morningtide from "./projects/morningtide"
import TextDiagram from "./projects/text-diagram"
import SnakebiteResponse from "./projects/snakebite-response"
import DissonantHarmony from "./projects/dissonant-harmony";
import SunFall from "./projects/sun-fall";
import SnakebiteData from "./projects/snakebite-data";
import BasicsOfTypography from "./projects/basics-of-typography";
import MyFavoriteThings from "./projects/my-favorite-things";
import DesignPhilosophy from "./projects/design-philosophy";
import SchoolStairs from "./projects/school-stairs";
import Radien from "./projects/radien";
import Cooper from "./projects/cooper"


export default function App() {
  return (
    <Router>
      <ResetScroll />
      <div>
        <NavBar />

        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/misc" element={<Misc />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />

          <Route path="/rockumentary" element={<Rockumentary />} />
          <Route path="/morningtide" element={<Morningtide />} />
          <Route path="/text-diagram" element={<TextDiagram />} />
          <Route path="/snakebite-response" element={<SnakebiteResponse />} />
          <Route path="/dissonant-harmony" element={<DissonantHarmony />} />
          <Route path="/sun-fall" element={<SunFall />} />
          <Route path="/snakebite-data" element={<SnakebiteData />} />
          <Route path="/basics-of-typography" element={<BasicsOfTypography />} />
          <Route path="/my-favorite-things" element={<MyFavoriteThings />} />
          <Route path="/design-philosophy" element={<DesignPhilosophy />} />
          <Route path="/school-stairs" element={<SchoolStairs />} />
          <Route path="/radien" element={<Radien />} />
          <Route path="/cooper" element={<Cooper />} />
        </Routes>

        <Footer />
      </div>
    </Router >
  );
}