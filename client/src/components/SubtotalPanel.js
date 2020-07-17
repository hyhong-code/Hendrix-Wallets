import React from "react";

import OrderInfoModal from "../components/OrderInfoModal";

const SubtotalPanel = ({ cartItems }) => {
  const subTotal = () =>
    cartItems.reduce((acc, { price, quantity }) => acc + price * quantity, 0);

  const saving = () =>
    cartItems.reduce(
      (acc, { discount, quantity }) => acc + discount * quantity,
      0
    );

  const totalAfterSaving = () =>
    cartItems.reduce(
      (acc, { price, discount, quantity }) =>
        acc + (price - discount) * quantity,
      0
    );

  const shipping = () => 699;

  const taxRate = 0.09;
  const tax = () => (totalAfterSaving() + shipping()) * taxRate;
  const finalTotal = () => (totalAfterSaving() + shipping()) * (1 + taxRate);

  return (
    <div className="card subtotal-panel mx-3">
      <div className="card-body py-3 py-md-5 px-4">
        <strong className="text-primary d-block">Your Order:</strong>
        <hr />
        <div className="row">
          <div className="col-6 mb-0 mb-md-2 text-primary">Subtotal:</div>
          <div className="col-6 mb-0 mb-md-2">${subTotal() / 100}</div>
          <div className="col-6 mb-0 mb-md-2 text-primary">Saving:</div>
          <div className="col-6 mb-0 mb-md-2 text-secondary">
            -$
            {saving() / 100}
          </div>
          <div className="col-6 mb-0 mb-md-2 text-primary">After Saving:</div>
          <div className="col-6 mb-0 mb-md-2 text-secondary">
            ${totalAfterSaving() / 100}
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-6 mb-0 mb-md-2 text-primary">Shipping:</div>
          <div className="col-6 mb-0 mb-md-2">+${shipping() / 100}</div>
          <div className="col-6 mb-0 mb-md-2 text-primary">Tax:</div>
          <div className="col-6 mb-0 mb-md-2">
            +${Math.round((tax() / 100 + Number.EPSILON) * 100) / 100}
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-6 mb-0 mb-md-2 text-primary">Final Total:</div>
          <div className="col-6 mb-0 mb-md-2">
            ${Math.round((finalTotal() / 100 + Number.EPSILON) * 100) / 100}
          </div>
        </div>
        <OrderInfoModal />
      </div>
    </div>
  );
};

export default SubtotalPanel;
