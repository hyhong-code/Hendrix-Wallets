import React from "react";
import { Link } from "react-router-dom";

import CollectionCard from "./CollectionCard";
import Carousel from "./Carousel";

const Showcase = () => {
  return (
    <section className="showcase bg-light text-dark py-6">
      <div className="container">
        <div className="row">
          <div className="col-md-7 d-flex align-items-center">
            <Carousel />
          </div>
          <div className="col-md-5">
            <h3 className="text-center mb-3">SHOP COLLECTIONS</h3>
            <div className="row">
              <CollectionCard />
              <CollectionCard />
              <CollectionCard />
              <CollectionCard />
            </div>
            <Link to="/items" className="btn btn-primary btn-block mt-4">
              Browse All
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
