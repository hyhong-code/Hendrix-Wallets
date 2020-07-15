import React, { Fragment } from "react";

import Banner from "../layout/Banner";
import Showcase from "../Showcase";
import DiscountedItems from "../DiscountedItems";
import About from "../About";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <Showcase />
      <DiscountedItems />
      <About />
    </Fragment>
  );
};

export default Home;
