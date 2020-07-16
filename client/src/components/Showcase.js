import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CollectionCard from "./CollectionCard";
import Carousel from "./Carousel";
import Spinner from "./layout/Spinner";

const Showcase = ({ categories }) => {
  return (
    <section className="showcase bg-light text-dark py-6">
      {categories ? (
        <div className="container">
          <div className="row">
            <div className="col-md-7 d-flex align-items-center">
              <Carousel categories={categories} />
            </div>
            <div className="col-md-5">
              <h3 className="text-center mb-3 text-primary">
                SHOP COLLECTIONS
              </h3>
              <div className="row">
                {categories.map((category) => (
                  <CollectionCard key={category.id} category={category} />
                ))}
              </div>
              <Link to="/items/all" className="btn btn-primary btn-block mt-4">
                Explore All
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </section>
  );
};

const mapStateToProps = ({ categories }) => ({ categories });

export default connect(mapStateToProps)(Showcase);
