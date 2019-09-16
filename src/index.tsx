import React, { FC } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./utility/serviceWorker";

// Styles
import "./index.css";

//=========================================================
const App: FC = () => {
  return <div className="App"></div>;
};

//=========================================================
ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
