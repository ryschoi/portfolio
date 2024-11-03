import Home from "./Portfolio"
import { HashRouter, Route, Routes, Navigate} from "react-router-dom";

export default function App() {
 return (
  <HashRouter>
   <div>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/Portfolio/*" element={<Home />} />
    </Routes>
   </div>
  </HashRouter>
  );
}