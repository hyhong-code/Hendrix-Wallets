import React, { Fragment } from "react";
import { connect } from "react-redux";

import {
  cancelOrder,
  shipOrder,
  deliverOrder,
} from "../../actions/orderActions";
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

const OrderSummaryPanel = ({
  order,
  cancelOrder,
  shipOrder,
  adminAuthenticated,
  deliverOrder,
}) => {
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
          Email: <br /> <small className="text-dark">{order.email}</small>
        </div>
        <div className="text-primary mb-2 py-1 border-bottom">
          Instructions: <br />
          {order.instructions ? (
            <small className="text-dark">{order.instructions}</small>
          ) : (
            <small className="text-muted">NO INSTRUCTIONS</small>
          )}
        </div>
        {!adminAuthenticated && order.status === "CONFIRMED" && (
          <Fragment>
            <div className="d-flex align-items-center justify-content-center mt-4">
              <Stripe order={order} />
            </div>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <button
                className="cancel-btn btn btn-outline-primary btn-sm"
                onClick={() => cancelOrder(order.id)}
              >
                Cancel
              </button>
            </div>
          </Fragment>
        )}
        {adminAuthenticated && order.status === "CONFIRMED" && (
          <div className="d-flex align-items-center justify-content-center mt-4">
            <small className="text-muted">
              Waiting for customer to pay for this order...
            </small>
          </div>
        )}
        {adminAuthenticated && order.status === "PAID" && (
          <div className="d-flex align-items-center justify-content-center mt-4">
            <button
              onClick={() => shipOrder(order.id)}
              className="cancel-btn btn btn-outline-primary btn-sm"
            >
              ORDER SHIPPED
            </button>
          </div>
        )}
        {adminAuthenticated && order.status === "SHIPPED" && (
          <div className="d-flex align-items-center justify-content-center mt-4">
            <button
              onClick={() => deliverOrder(order.id)}
              className="cancel-btn btn btn-outline-success btn-sm"
            >
              ORDER DELIVERED
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default connect(null, { cancelOrder, shipOrder, deliverOrder })(
  OrderSummaryPanel
);
