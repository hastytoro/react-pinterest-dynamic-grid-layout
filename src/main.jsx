import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import "./main.css";

const html = document.getElementById("root");
const root = ReactDOM.createRoot(html);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
