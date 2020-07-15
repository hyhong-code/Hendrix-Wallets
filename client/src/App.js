import React, { Fragment } from "react";

import Navbar from "./components/layout/Navbar";
import Topbar from "./components/layout/Topbar";
import Home from "./components/pages/Home";
import Banner from "./components/layout/Banner";
import Showcase from "./components/Showcase";
import DiscountedItems from "./components/DiscountedItems";
import "./App.scss";

const App = () => {
  return (
    <Fragment>
      <Topbar />
      <Navbar />
      <Banner />
      <Showcase />
      <DiscountedItems />
    </Fragment>
  );
};

export default App;
