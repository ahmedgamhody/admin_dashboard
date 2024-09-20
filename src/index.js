import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import ModeContext from "./components/context/ModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ModeContext>
    <Router>
      <App></App>
    </Router>
  </ModeContext>
);
