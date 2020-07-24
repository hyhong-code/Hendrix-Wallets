import React, { Fragment, useEffect, useCallback } from "react";
import { connect } from "react-redux";

import { getCategories } from "../../actions/categoryActions";
import { getItems } from "../../actions/itemActions";
import HomeBanner from "../homeComponents/HomeBanner";
import Showcase from "../homeComponents/Showcase";
import DiscountedItems from "../homeComponents/DiscountedItems";
import About from "../homeComponents/About";

const Home = ({ getCategories, getItems }) => {
  const fetchResources = useCallback(() => {
    getCategories();
    getItems();
  }, [getCategories, getItems]);

  useEffect(() => {
    fetchResources();
  }, [fetchResources]);

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

export default connect(null, { getCategories, getItems })(Home);
