import ResetScroll from "./Portfolio/ResetScroll"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Work from "./Portfolio/Work/work";
import Resume from "./Portfolio/Resume/resume";
import About from "./Portfolio/About/about";
import NavBar from "./Portfolio/Navigation";
import Footer from "./Portfolio/Footer";

import Rockumentary from "./Portfolio/Work/Projects/rockumentary";
import Morningtide from "./Portfolio/Work/Projects/morningtide";
import TextDiagram from "./Portfolio/Work/Projects/textDiagram";
import SnakebiteReponse from "./Portfolio/Work/Projects/snakebiteResponse";
import DissonantHarmony from "./Portfolio/Work/Projects/dissonantHarmony";
import SunFall from "./Portfolio/Work/Projects/sunFall";
import SnakebiteData from "./Portfolio/Work/Projects/snakebiteData";
import BasicsOfTypography from "./Portfolio/Work/Projects/basicsOfTypography";
import MyFavoriteThings from "./Portfolio/Work/Projects/myFavoriteThings";
import DesignPhilosophy from "./Portfolio/Work/Projects/designPhilosophy";
import SchoolStairs from "./Portfolio/Work/Projects/schoolStairs";
import Radien from "./Portfolio/Work/Projects/radien";
import Cooper from "./Portfolio/Work/Projects/cooper"


export default function App() {
  return (
    <Router>
      <ResetScroll />
      <div>
        <NavBar />

        <Routes>
          <Route path="/" element={<Work />} />
          {/* <Route path="/Portfolio/*" element={<Home />} /> */}

          {/* <Route path="/home/*" element={<Work />} /> */}
          <Route path="/" element={<Work />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />

          <Route path="/rockumentary" element={<Rockumentary />} />
          <Route path="/morningtide" element={<Morningtide />} />
          <Route path="/text-diagram" element={<TextDiagram />} />
          <Route path="/snakebite-response" element={<SnakebiteReponse />} />
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