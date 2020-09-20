import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Middle from "./components/Middle.js";

ReactDOM.render(
  <div>
    <Header />
    <Middle /> {/* <Footer className="footer" /> */}{" "}
  </div>,
  document.getElementById("root")
);
