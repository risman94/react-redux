import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import Perf from "react-addons-perf"; // tidak dibutuhkan di production

import App from "./App";

const renderApp = () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("app")
  );
};

renderApp();
