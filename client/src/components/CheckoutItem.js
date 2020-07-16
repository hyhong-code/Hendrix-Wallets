import React from "react";

const CheckoutItem = () => {
  return (
    <div className="card checkout-card mb-3">
      <div class="card-body py-3 px-4">
        <div className="row">
          <div class="col-4">
            <img
              src="https://ae01.alicdn.com/kf/He1a2d422f7314d60b11c8e7d352b3433J.jpg?width=800&height=800&hash=1600"
              class="card-img checkout-card-img"
              alt="..."
            />
          </div>
          <div className="col-8">
            <h5 class="card-title d-flex">
              <span>Monvelli</span>
              <span className="ml-auto text-secondary text-price">
                <small className="text-primary text-normal-price mr-2">
                  $18.99
                </small>
                $12.99
              </span>
            </h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, quos.
            </p>
            <div>
              <button className="btn btn-outline-dark btn-sm mr-2">-</button>
              <span>Qty: 2</span>
              <button className="btn btn-outline-dark btn-sm ml-2">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
