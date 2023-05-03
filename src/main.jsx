import React from "react";
import ReactDoom from "react-dom/client";
//import { HelloWorldApp } from "./HelloWorldApp";
//import { FirstApp } from "./FirstApp";
import { CounterApp } from "./CounterApp";

import './styles.css';

ReactDoom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={10} />
  </React.StrictMode>
);
