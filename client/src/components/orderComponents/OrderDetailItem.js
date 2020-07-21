import React from "react";

const OrderDetailItem = ({ cartItem }) => {
  return (
    <div className="card order-detail-item mb-3">
      <div className="card-body py-2 px-3 py-md-3 px-md-4">
        <div className="row">
          <div className="col-6 col-md-4">
            <img
              src={cartItem.photo}
              className="card-img order-detail-item-img"
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
            <p className="card-text mb-1 mb-md-4">{cartItem.description}</p>
            <span className="d-none d-md-inline">
              Qty Ordered: <strong>{cartItem.quantity}</strong>
            </span>
            <small className="d-md-none">
              Qty Ordered: <strong>{cartItem.quantity}</strong>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailItem;
