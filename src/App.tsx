import './index.css'
import ResetScroll from "./reset-scroll"
import ScrollToTopButton from './components/scroll-top';
import ProcessButton from './components/process-button';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Work from "./work/work"
import Misc from "./misc/misc"
import Background from "./background";
import About from "./about/about";
import NavBar from "./nav"
import Footer from "./footer";

import Rockumentary from './projects/rockumentary';
import SnakebiteResponse from "./projects/snakebite-response"
import DissonantHarmony from "./projects/dissonant-harmony";
import SnakebiteData from "./projects/snakebite-data";
import SchoolStairs from "./projects/school-stairs";
import Radien from "./projects/radien";
import Cooper from "./projects/cooper"
import OpenForum from "./projects/open-forum";
import AliHacks from "./projects/ali-hacks";
import BostonBeer from "./projects/bostonbeer";
import PortfolioWebsite from "./projects/portfolio";

export default function App() {
  return (
    <Router>
      <ResetScroll />
      <div className="flex flex-col place-content-center">
        <NavBar />
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/misc" element={<Misc />} />
          <Route path="/background" element={<Background />} />
          <Route path="/about" element={<About />} />

          <Route path="/rockumentary" element={<Rockumentary />} />
          <Route path="/snakebite-response" element={<SnakebiteResponse />} />
          <Route path="/dissonant-harmony" element={<DissonantHarmony />} />
          <Route path="/snakebite-data" element={<SnakebiteData />} />
          <Route path="/school-stairs" element={<SchoolStairs />} />
          <Route path="/radien" element={<Radien />} />
          <Route path="/cooper" element={<Cooper />} />
          <Route path="/open-forum" element={<OpenForum />} />
          <Route path="/ali-hacks" element={<AliHacks />} />
          <Route path="/boston-beer" element={<BostonBeer />} />
          <Route path="/portfolio-website" element={<PortfolioWebsite />} />
        </Routes>

        <Footer />
      </div>
      {/* <ProcessButton /> */}
      <ScrollToTopButton />
    </Router >
  );
}