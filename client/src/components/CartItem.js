import React from "react";
import { connect } from "react-redux";

import { addItemToCart, removeItemFromCart } from "../actions/cartActions";

const CartItem = ({ cartItem, addItemToCart, removeItemFromCart }) => {
  return (
    <li className="list-group-item bg-light">
      <div className="row no-gutters">
        <div className="col-3">
          <img
            src={cartItem.photo}
            alt={`cart item ${cartItem.name}`}
            className="img-fluid"
          />
        </div>
        <div className="col-4">
          <div className="h-100 d-flex align-items-center justify-content-end text-primary">
            <span
              onClick={() =>
                removeItemFromCart(cartItem.item_id, cartItem.cart_item_id)
              }
              className="p-2 cart-item-action-arr"
            >
              <i className="fas fa-chevron-left"></i>
            </span>

            <span className="text-dark">{cartItem.quantity}</span>
            <span
              onClick={() => addItemToCart(cartItem.item_id)}
              className="p-2 cart-item-action-arr"
            >
              <i className="fas fa-chevron-right"></i>
            </span>
          </div>
        </div>
        <div className="col-5">
          <div className="h-100 d-flex flex-column align-items-end justify-content-center mr-1">
            <p className="m-0 item-name">
              <strong>{cartItem.name} </strong>
            </p>
            <small className="text-muted float-right">
              ${(cartItem.price - cartItem.discount) / 100} / pc
            </small>
          </div>
        </div>
      </div>
    </li>
  );
};

export default connect(null, { addItemToCart, removeItemFromCart })(CartItem);
