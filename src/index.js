import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "normalize.css";

injectGlobal`
  * {
    font-family: 'Robot', sans-serif;
    box-sizing: border-box;
  }
`;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
