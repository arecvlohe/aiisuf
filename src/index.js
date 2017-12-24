import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";

import "normalize.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

injectGlobal`
  * {
    font-family: 'Robot', sans-serif;
    box-sizing: border-box;
  }
`;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
