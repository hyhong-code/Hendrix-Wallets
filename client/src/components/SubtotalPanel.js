import React from "react";

import OrderInfoModal from "./orderComponents/OrderInfoModal";

const SubtotalPanel = ({ cart }) => {
  return (
    <div className="card subtotal-panel mx-3">
      <div className="card-body py-3 py-md-5 px-4">
        <strong className="text-primary d-block">Your Order:</strong>
        <hr />
        <div className="row">
          <div className="col-6 mb-0 mb-md-2 text-primary">Subtotal:</div>
          {cart && (
            <div className="col-6 mb-0 mb-md-2">
              $
              {Math.round(
                cart.cartItems.reduce(
                  (acc, { price, quantity }) => acc + price * quantity,
                  0
                ) + Number.EPSILON
              ) / 100}
            </div>
          )}
          <div className="col-6 mb-0 mb-md-2 text-primary">Saving:</div>
          {cart && (
            <div className="col-6 mb-0 mb-md-2 text-secondary">
              -$
              {Math.round(
                cart.cartItems.reduce(
                  (acc, { discount, quantity }) => acc + discount * quantity,
                  0
                ) + Number.EPSILON
              ) / 100}
            </div>
          )}
          <div className="col-6 mb-0 mb-md-2 text-primary">After Saving:</div>
          {cart && (
            <div className="col-6 mb-0 mb-md-2 text-secondary">
              $
              {Math.round(
                cart.cartItems.reduce(
                  (acc, { price, discount, quantity }) =>
                    acc + (price - discount) * quantity,
                  0
                ) + Number.EPSILON
              ) / 100}
            </div>
          )}
        </div>
        <hr />
        <div className="row">
          <div className="col-6 mb-0 mb-md-2 text-primary">Shipping:</div>
          {cart && (
            <div className="col-6 mb-0 mb-md-2">
              +${cart.cartItems.length ? parseInt(cart.shipping_cost) / 100 : 0}
            </div>
          )}
          <div className="col-6 mb-0 mb-md-2 text-primary">Tax:</div>
          {cart && (
            <div className="col-6 mb-0 mb-md-2">
              +$
              {cart.cartItems.length
                ? Math.round(
                    ((cart.cartItems.reduce(
                      (acc, { price, discount, quantity }) =>
                        acc + (price - discount) * quantity,
                      0
                    ) +
                      parseInt(cart.shipping_cost)) *
                      parseInt(cart.tax_rate_pct_basis)) /
                      10000 +
                      Number.EPSILON
                  ) / 100
                : 0}
            </div>
          )}
        </div>
        <hr />
        <div className="row">
          <div className="col-6 mb-0 mb-md-2 text-primary">Final Total:</div>
          {cart && (
            <div className="col-6 mb-0 mb-md-2">
              $
              {cart.cartItems.length
                ? Math.round(
                    (cart.cartItems.reduce(
                      (acc, { price, discount, quantity }) =>
                        acc + (price - discount) * quantity,
                      0
                    ) +
                      parseInt(cart.shipping_cost)) *
                      (1 + parseInt(cart.tax_rate_pct_basis) / 10000) +
                      Number.EPSILON
                  ) / 100
                : 0}
            </div>
          )}
        </div>
        <OrderInfoModal />
      </div>
    </div>
  );
};

export default SubtotalPanel;
