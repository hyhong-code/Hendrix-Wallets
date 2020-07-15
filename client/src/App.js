import React, { Fragment } from "react";

import Navbar from "./components/layout/Navbar";
import Topbar from "./components/layout/Topbar";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import "./App.scss";

const App = () => {
  return (
    <Fragment>
      <Topbar />
      <Navbar />
      <Home />
      <Footer />
    </Fragment>
  );
};

export default App;
