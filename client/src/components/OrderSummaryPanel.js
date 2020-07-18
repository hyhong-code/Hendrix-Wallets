import React from "react";

import Stripe from "./Stripe";

const subtotal = (items) =>
  Math.round(
    items.reduce(
      (acc, item) => acc + parseInt(item.price) * parseInt(item.quantity),
      0
    ) + Number.EPSILON
  ) / 100;

const savings = (items) =>
  Math.round(
    items.reduce(
      (acc, item) => acc + parseInt(item.discount) * parseInt(item.quantity),
      0
    ) + Number.EPSILON
  ) / 100;

const discounted = (items) =>
  Math.round(
    items.reduce(
      (acc, item) =>
        acc +
        (parseInt(item.price) - parseInt(item.discount)) *
          parseInt(item.quantity),
      0
    ) + Number.EPSILON
  ) / 100;

const tax = (items, shipping, taxRate) =>
  Math.round(
    (items.reduce(
      (acc, item) =>
        acc +
        (parseInt(item.price) - parseInt(item.discount)) *
          parseInt(item.quantity),
      0
    ) +
      parseInt(shipping)) *
      (parseInt(taxRate) / 10000) +
      Number.EPSILON
  ) / 100;

const OrderSummaryPanel = ({ order }) => {
  return (
    <div className="card order-summary-panel mx-3">
      <div className="card-body py-5 px-4">
        <strong className="text-primary d-block">Your Order:</strong>
        <hr className="m-1" />
        <div className="row">
          <div className="col-6 mb-2 text-primary">Subtotal:</div>
          <div className="col-6 mb-2">${subtotal(order.cart.cartItems)}</div>
          <div className="col-6 mb-2 text-primary">Saving:</div>
          <div className="col-6 mb-2 text-secondary">
            -${savings(order.cart.cartItems)}
          </div>
          <div className="col-6 mb-2 text-primary">After Saving:</div>
          <div className="col-6 mb-2 text-secondary">
            ${discounted(order.cart.cartItems)}
          </div>
        </div>
        <hr className="m-1" />
        <div className="row">
          <div className="col-6 mb-2 text-primary">Shipping:</div>
          <div className="col-6 mb-2">+${order.cart.shipping_cost / 100}</div>
          <div className="col-6 mb-2 text-primary">Tax:</div>
          <div className="col-6 mb-2">
            +$
            {tax(
              order.cart.cartItems,
              order.cart.shipping_cost,
              order.cart.tax_rate_pct_basis
            )}
          </div>
        </div>
        <hr className="m-1" />
        <div className="row">
          <div className="col-6 mb-1 text-primary">Final Total:</div>
          <div className="col-6 mb-1">${order.final_price / 100}</div>
        </div>
        <hr className="m-1" />
        <div className="text-primary mb-2 py-1 border-bottom">
          Recipient: <br />
          <small className="text-dark">{order.name}</small>
        </div>
        <div className="text-primary mb-2 py-1 border-bottom">
          Address: <br />
          <small className="text-dark">{order.address}</small>
        </div>
        <div className="text-primary mb-2 py-1 border-bottom">
          Phone: <br /> <small className="text-dark">{order.phone}</small>
        </div>
        <div className="text-primary mb-2 py-1 border-bottom">
          Instructions: <br />
          <small className="text-dark">{order.instructions}</small>
        </div>

        <div className="d-flex align-items-center justify-content-center mt-4">
          <Stripe order={order} />
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryPanel;
