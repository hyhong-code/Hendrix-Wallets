import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import CartItem from "./CartItem";
import Tooltip from "./Tooltip";

const ShoppingCart = ({ history, cart }) => {
  const [show, setShow] = useState(false);

  const handleCheckout = () => {
    setShow(false);
    history.push("/checkout");
  };

  return (
    <li className="nav-item dropdown d-none d-lg-block">
      <span
        className="nav-link dropdown-toggle"
        id="navbarDropdown"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={() => setShow((prev) => !prev)}
      >
        My Cart
      </span>
      <div
        className={`${
          show && "show"
        } dropdown-menu dropdown-menu-right p-0 text-dark bg-light`}
        aria-labelledby="navbarDropdown"
      >
        <span onClick={() => setShow(false)} className="badge badge-danger">
          x
        </span>
        <div className="cart-dropdown">
          <div className="card-body p-2">
            <p className="mb-2 mt-1 text-center">
              {cart && (
                <span className="d-inline-block border-bottom border-secondary mb-2 d-inline-block">
                  Cart Total: $
                  {Math.round(
                    cart.cartItems.reduce(
                      (acc, cartItem) =>
                        acc +
                        (cartItem.price - cartItem.discount) *
                          cartItem.quantity,
                      0
                    ) + Number.EPSILON
                  ) / 100}
                </span>
              )}
            </p>
            <ul className="list-group">
              {cart && cart.cartItems.length ? (
                cart.cartItems.map((cartItem) => (
                  <CartItem key={cartItem.cart_item_id} cartItem={cartItem} />
                ))
              ) : (
                <small className="text-primary ml-5">
                  Your cart is empty...
                </small>
              )}
            </ul>
            {cart && cart.cartItems.length ? (
              <button
                onClick={handleCheckout}
                className="mt-1 btn btn-secondary btn-block text-white"
              >
                CHECK OUT
              </button>
            ) : (
              <Tooltip
                placement="top"
                trigger="click"
                tooltip="Add some items first"
              >
                <button
                  data-tip="Add some items first"
                  className="mt-1 btn btn-secondary btn-block text-white disabled"
                >
                  CHECK OUT
                </button>
              </Tooltip>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

const mapStateToProps = ({ cart }) => ({
  cart,
});

export default connect(mapStateToProps)(withRouter(ShoppingCart));
