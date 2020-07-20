import React from "react";
import { connect } from "react-redux";

import ItemCard from "./ItemCard";

const DiscountedItems = ({ items }) => {
  return (
    <section className="discount bg-dark text-light py-6">
      <div className="container">
        <h3 className="text-center mb-5">DISCOUNT STOCKS</h3>
        <div className="row">
          {items &&
            items
              .filter((item) => item.discount > 0)
              .slice(0, 8)
              .map((item) => (
                <div key={item.id} className=" col-6 col-lg-3 mb-4">
                  <ItemCard item={item} />
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ items }) => ({ items });

export default connect(mapStateToProps)(DiscountedItems);
