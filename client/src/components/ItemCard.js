import React from "react";
import { connect } from "react-redux";

import { addItemToCart } from "../actions/cartActions";

const ItemCard = ({ item, addItemToCart }) => {
  const pricing = () =>
    item.discount > 0 ? (
      <h5 className="card-title mb-1 text-secondary">
        <small className="discount-text text-muted mr-1">
          ${item.price / 100}
        </small>
        ${(item.price - item.discount) / 100}
      </h5>
    ) : (
      <h5 className="card-title mb-1 text-secondary">${item.price / 100}</h5>
    );

  return (
    <div className="card text-dark">
      <img
        src={item.photo}
        className="card-img-top"
        alt={`wallet ${item.name}`}
      />
      <div className="card-body py-2">
        {pricing()}
        <p className="card-text mb-1 text-primary">{item.name}</p>
        <div className="d-flex justify-content-end">
          <a href="#!" className="btn btn-sm btn-outline-primary ">
            <i className="fas fa-info-circle"></i>
          </a>
          <button
            onClick={() => addItemToCart(item.id)}
            className="btn btn-sm btn-outline-secondary ml-2"
          >
            <i className="fas fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addItemToCart })(ItemCard);
