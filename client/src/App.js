import React, { Fragment } from "react";

import Navbar from "./components/layout/Navbar";
import Topbar from "./components/layout/Topbar";
import Home from "./components/pages/Home";
import "./App.scss";

const App = () => {
  return (
    <Fragment>
      <Topbar />
      <Navbar />
      <Home />
    </Fragment>
  );
};

export default App;
