import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import App from "components/App";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {
  Navigation,
  Home,
  Search
} from "./components";

window.name = "test123"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<Search/>}/>
        </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
