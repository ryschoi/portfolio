import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

// need to import font
{/* <link rel="preconnect" href="https://rsms.me/"> */}
{/* <link rel="stylesheet" href="https://rsms.me/inter/inter.css"> */}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>
);
reportWebVitals();