import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";
import { Navbar } from "./components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>,
);
