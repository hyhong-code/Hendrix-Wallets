import React from "react";

import ItemCard from "../ItemCard";
import ItemFilter from "../ItemFilter";

const ItemList = () => {
  return (
    <section id="itemsList" className="bg-light text-dark">
      <div className="itemslist-banner text-light d-flex align-items-center justify-content-center">
        <h1 className="display-4">BROWSE OUR PRODUCTS</h1>
      </div>
      <div className="container py-6">
        <div className="row">
          <div className="col-md-3">
            <ItemFilter />
          </div>
          <div className="col-md-9">
            <div className="row items-container">
              <div className="col-6 col-md-4 mb-4">
                <ItemCard />
              </div>
              <div className="col-6 col-md-4 mb-4">
                <ItemCard />
              </div>
              <div className="col-6 col-md-4 mb-4">
                <ItemCard />
              </div>
              <div className="col-6 col-md-4 mb-4">
                <ItemCard />
              </div>
              <div className="col-6 col-md-4 mb-4">
                <ItemCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemList;
