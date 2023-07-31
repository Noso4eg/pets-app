import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Pets from "./Pets";
import "semantic-ui-css/semantic.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Pets />
  </React.StrictMode>
);
