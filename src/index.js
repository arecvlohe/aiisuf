import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal, ThemeProvider } from "styled-components";

import "normalize.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

injectGlobal`
  * {
    font-family: 'Robot', sans-serif;
    box-sizing: border-box;
    color: #333;
  }
  a {
    color: #F75F3B;
    text-decoration: none;
  }
`;

const theme = {
  black: "#333",
  indianpaintbrush: "#F75F3B"
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
