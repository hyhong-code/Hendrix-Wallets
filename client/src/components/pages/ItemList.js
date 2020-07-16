import React from "react";
import { connect } from "react-redux";

import ItemCard from "../ItemCard";
import ItemFilter from "../ItemFilter";

const ItemList = ({ categories, items }) => {
  return (
    <section id="itemsList" className="bg-light text-dark">
      <div className="itemslist-banner text-light d-flex align-items-center justify-content-center">
        <h1 className="display-4">BROWSE OUR PRODUCTS</h1>
      </div>
      <div className="container py-6">
        <div className="row">
          <div className="col-lg-3">
            {categories ? <ItemFilter categories={categories} /> : null}
          </div>
          <div className="col-lg-9">
            <div className="row items-container">
              {items
                ? items.map((item) => (
                    <div key={item.id} className="col-6 col-md-4 mb-4">
                      <ItemCard item={item} />
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ categories, items }) => ({ categories, items });

export default connect(mapStateToProps)(ItemList);
