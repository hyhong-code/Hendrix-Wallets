import React from "react";

const OrderDetailItem = () => {
  return (
    <div className="card order-detail-item mb-3">
      <div className="card-body py-3 px-4">
        <div className="row">
          <div className="col-4">
            <img
              src="https://ae01.alicdn.com/kf/He1a2d422f7314d60b11c8e7d352b3433J.jpg?width=800&height=800&hash=1600"
              className="card-img order-detail-item-img"
              alt="..."
            />
          </div>
          <div className="col-8">
            <h5 className="card-title d-flex">
              <span>Monvelli</span>
              <span className="ml-auto text-secondary text-price">
                <small className="text-primary text-normal-price mr-2">
                  $18.99
                </small>
                $12.99
              </span>
            </h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, quos.
            </p>
            <span>
              Qty Ordered: <strong>2</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailItem;
