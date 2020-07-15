import React from "react";

const ItemCard = () => {
  return (
    <div class="col-md-3 mb-4">
      <div class="card text-dark">
        <img
          src="https://images.unsplash.com/photo-1570549667552-8a73ebf96469?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2397&q=80"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body py-2">
          <h5 class="card-title mb-1 text-secondary">
            <small class="discount-text text-muted mr-1">$15.99</small>
            $8.99
          </h5>
          <p class="card-text mb-1 text-primary">FARREN</p>
          <a href="#" class="btn btn-sm btn-outline-primary float-right">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
