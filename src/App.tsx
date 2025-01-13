import Home from "./Portfolio"
import ResetScroll from "./Portfolio/ResetScroll"
import { HashRouter, Route, Routes } from "react-router-dom";


export default function App() {
  return (
    <HashRouter>
      <ResetScroll />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portfolio/*" element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  );
}