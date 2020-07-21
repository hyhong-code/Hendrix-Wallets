import React, { Fragment } from "react";

import HomeBanner from "../homeComponents/HomeBanner";
import Showcase from "../homeComponents/Showcase";
import DiscountedItems from "../homeComponents/DiscountedItems";
import About from "../homeComponents/About";

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
