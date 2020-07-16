import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CartItem from "./CartItem";

const ShoppingCart = ({ cartItems }) => {
  const [show, setShow] = useState(false);

  return (
    <li className="nav-item dropdown d-none d-lg-block">
      <a
        className="nav-link dropdown-toggle"
        href="#!"
        id="navbarDropdown"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={() => setShow((prev) => !prev)}
      >
        My Cart
      </a>
      <div
        className={`${
          show && "show"
        } dropdown-menu dropdown-menu-right p-0 text-dark bg-light`}
        aria-labelledby="navbarDropdown"
      >
        <div className="cart-dropdown">
          <div className="card-body p-2">
            <span className="mb-1 d-inline-block">
              Cart Total: $
              {cartItems &&
                Math.round(
                  (cartItems.reduce(
                    (acc, cartItem) =>
                      acc +
                      ((cartItem.price - cartItem.discount) *
                        cartItem.quantity) /
                        100,
                    0
                  ) +
                    Number.EPSILON) *
                    100
                ) / 100}
            </span>
            <ul className="list-group">
              {cartItems &&
                cartItems.map((cartItem) => (
                  <CartItem key={cartItem.cart_item_id} cartItem={cartItem} />
                ))}
            </ul>
            <Link
              to="/checkout"
              className="mt-1 btn btn-secondary btn-block text-white"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

const mapStateToProps = ({ cartItems }) => ({ cartItems });

export default connect(mapStateToProps)(ShoppingCart);
