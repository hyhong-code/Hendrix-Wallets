import React from "react";

import ItemCard from "../ItemCard";

const ItemList = () => {
  return (
    <section id="itemsList" className="bg-light text-dark">
      <div className="itemslist-banner text-light d-flex align-items-center justify-content-center">
        <h1 className="display-4">BROWSE OUT PRODUCTS</h1>
      </div>
      <div className="container py-6">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <p className="lead">Collections</p>
                <div className="d-flex flex-column align-items-center">
                  <div className="custom-control custom-checkbox mb-3 w-75">
                    <input
                      type="checkbox"
                      class=" custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      htmlFor="customCheck1"
                      className="custom-control-label"
                    >
                      AROMA
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-3 w-75">
                    <input
                      type="checkbox"
                      class=" custom-control-input"
                      id="customCheck2"
                    />
                    <label
                      htmlFor="customCheck2"
                      className="custom-control-label"
                    >
                      ESSENSE
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-3 w-75">
                    <input
                      type="checkbox"
                      class=" custom-control-input"
                      id="customCheck3"
                    />
                    <label
                      htmlFor="customCheck3"
                      className="custom-control-label"
                    >
                      MYSTIC
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-3 w-75">
                    <input
                      type="checkbox"
                      class=" custom-control-input"
                      id="customCheck4"
                    />
                    <label
                      htmlFor="customCheck4"
                      className="custom-control-label"
                    >
                      SPICE
                    </label>
                  </div>
                </div>
                <hr />
                <p className="lead">Promotion</p>
                <div className="d-flex flex-column align-items-center">
                  <div className="custom-control custom-checkbox mb-3 w-75">
                    <input
                      type="checkbox"
                      class=" custom-control-input"
                      id="customCheck5"
                    />
                    <label
                      htmlFor="customCheck5"
                      className="custom-control-label"
                    >
                      DISCOUNT
                    </label>
                  </div>
                </div>
                <hr />
                <div className="d-flex flex-column align-items-center">
                  <div className="w-75 mt-3">
                    <button className="btn btn-outline-primary">All</button>
                    <button className="btn btn-outline-secondary ml-3">
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row items-container">
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemList;
