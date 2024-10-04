import React from "react";
import Portfolio from "./Portfolio";
import { HashRouter, Route, Routes, Navigate} from "react-router-dom";

export default function App() {
 return (
  <HashRouter>
   <div>
    <Routes>
     <Route path="/" element={<Navigate to="Portfolio"/>}/>
     <Route path="/Portfolio/*" element={<Portfolio />} />
    </Routes>
   </div>
  </HashRouter>
  );
}
