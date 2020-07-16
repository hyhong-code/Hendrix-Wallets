import React from "react";

const CartItem = () => {
  return (
    <a href="#!" className="list-group-item list-group-item-action bg-light">
      <div className="d-flex align-items-center justify-content-between">
        <img
          src="https://images.unsplash.com/photo-1532033375034-a29004ea9769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2200&q=80"
          alt=""
          className="img-fluid"
        />
        <div className="mr-1">
          <p className="m-0">
            <strong>ATTIC </strong>x 2
          </p>
          <small className="text-muted float-right">$30</small>
        </div>
      </div>
    </a>
  );
};

export default CartItem;
