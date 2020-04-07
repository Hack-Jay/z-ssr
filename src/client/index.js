import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import Home from "../client/page/Home";

ReactDom.hydrate(<App />, document.getElementById("root"));

if (module.hot) {
	module.hot.accept();
}
