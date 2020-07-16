import React from "react";

const ItemCard = () => {
  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div className="card text-dark">
        <img
          src="https://images.unsplash.com/photo-1570549667552-8a73ebf96469?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2397&q=80"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body py-2">
          <h5 className="card-title mb-1 text-secondary">
            <small className="discount-text text-muted mr-1">$15.99</small>
            $8.99
          </h5>
          <p className="card-text mb-1 text-primary">FARREN</p>
          <a href="#!" className="btn btn-sm btn-outline-primary float-right">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
