import React from "react";

import Carousel from "../Carousel";
import Collections from "../Collections";

const Home = () => {
  return (
    <section className="home-page ">
      <div className="showcase text-light">
        <h1>
          <span className="display-3">HENDRIX APPAREL</span>
          <span className="lead">SIMPLE MEETS ELEGANT</span>
        </h1>
      </div>

      <div className="promo bg-light text-dark py-6">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h3 className="text-center mb-3">NEW IN</h3>
              <Carousel />
            </div>
            <div className="col-md-4">
              <h3 className="text-center mb-3">COLLECTIONS</h3>
              <Collections />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
