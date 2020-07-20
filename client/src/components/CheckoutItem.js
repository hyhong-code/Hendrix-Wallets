import React from "react";
import { connect } from "react-redux";

import { addItemToCart, removeItemFromCart } from "../actions/cartActions";

const CheckoutItem = ({ cartItem, addItemToCart, removeItemFromCart }) => {
  return (
    <div className="card checkout-card mb-3">
      <div className="card-body py-3 px-4">
        <div className="row">
          <div className="col-6 col-md-4">
            <img
              src={cartItem.photo}
              className="card-img checkout-card-img"
              alt={cartItem.name}
            />
          </div>
          <div className="col-6 col-md-8">
            <h5 className="card-title d-flex">
              <span>{cartItem.name}</span>
              {cartItem.discount > 0 ? (
                <span className="ml-auto text-secondary text-price">
                  <small className="text-primary text-normal-price mr-2 d-block d-md-inline mb-1 mb-md-0">
                    ${cartItem.price / 100}
                  </small>
                  ${(cartItem.price - cartItem.discount) / 100}
                </span>
              ) : (
                <span className="ml-auto text-secondary text-price">
                  ${cartItem.price / 100}
                </span>
              )}
            </h5>
            <p className="card-text">{cartItem.description}</p>
            <div>
              <button
                onClick={() =>
                  removeItemFromCart(cartItem.item_id, cartItem.cart_item_id)
                }
                className="btn btn-outline-dark btn-sm mr-2"
              >
                -
              </button>
              <span>Qty: {cartItem.quantity}</span>
              <button
                onClick={() => addItemToCart(cartItem.item_id)}
                className="btn btn-outline-dark btn-sm ml-2"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addItemToCart, removeItemFromCart })(
  CheckoutItem
);
