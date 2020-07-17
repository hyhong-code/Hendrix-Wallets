import React from "react";

const OrderDetailItem = ({ cartItem }) => {
  return (
    <div className="card order-detail-item mb-3">
      <div className="card-body py-3 px-4">
        <div className="row">
          <div className="col-4">
            <img
              src={cartItem.photo}
              className="card-img order-detail-item-img"
              alt={cartItem.name}
            />
          </div>
          <div className="col-8">
            <h5 className="card-title d-flex">
              <span>{cartItem.name}</span>
              {cartItem.discount > 0 ? (
                <span className="ml-auto text-secondary text-price">
                  <small className="text-primary text-normal-price mr-2">
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
            <span>
              Qty Ordered: <strong>{cartItem.quantity}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailItem;
