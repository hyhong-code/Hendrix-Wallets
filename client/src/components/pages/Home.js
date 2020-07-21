import React, { Fragment } from "react";

import HomeBanner from "../HomeBanner";
import Showcase from "../Showcase";
import DiscountedItems from "../DiscountedItems";
import About from "../About";

const Home = () => {
  return (
    <Fragment>
      <section id="home">
        <HomeBanner />
        <Showcase />
        <DiscountedItems />
        <About />
      </section>
    </Fragment>
  );
};

export default Home;
