import "./index.css";
import ResetScroll from "./reset-scroll";
import ScrollToTopButton from "./components/scroll-top";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Work from "./work/work";
import Craft from "./craft";
import About from "./about/about";
import TopBar from "./top-bar";
import Footer from "./footer";

import Rockumentary from "./projects/rockumentary";
import SnakebiteResponse from "./projects/snakebite-response";
import DissonantHarmony from "./projects/dissonant-harmony";
import SnakebiteData from "./projects/snakebite-data";
import SchoolStairs from "./projects/school-stairs";
import Radien from "./projects/radien";
import Cooper from "./projects/cooper";
import OpenForum from "./projects/open-forum";
import AliHacks from "./projects/ali-hacks";
import BostonBeer from "./projects/bostonbeer";
import PortfolioWebsite from "./projects/portfolio";
import UnderConstruction from "./under-construction";
import Apple from "./projects/apple";

export default function App() {
  return <UnderConstruction />;

  return (
    <Router>
      <ResetScroll />
      <Layout />
      <ScrollToTopButton />
    </Router>
  );
}

function Layout() {
  // The craft page is locked to the window: the photo map fills the space
  // between the top bar and footer and scrolls on its own, the page doesn't.
  const fitToWindow = useLocation().pathname === "/craft";

  return (
    <div
      className={`flex flex-col ${fitToWindow ? "h-svh overflow-hidden" : "min-h-svh"}`}
    >
      <TopBar />
      <main
        className={`flex flex-col flex-1 min-w-0 ${fitToWindow ? "min-h-0" : ""}`}
      >
        <Routes>
          <Route path="/" element={<Work hero={null} showFilters={false} />} />
          <Route path="/craft" element={<Craft />} />
          <Route path="/about" element={<About />} />
          <Route path="/snakebite-response" element={<SnakebiteResponse />} />
          <Route path="/dissonant-harmony" element={<DissonantHarmony />} />
          <Route path="/snakebite-data" element={<SnakebiteData />} />
          <Route path="/cooper" element={<Cooper />} />
          <Route path="/open-forum" element={<OpenForum />} />
          <Route path="/ali-hacks" element={<AliHacks />} />
          <Route path="/apple" element={<Apple />} />
        </Routes>
      </main>
      <Footer compact={fitToWindow} />
    </div>
  );
}
