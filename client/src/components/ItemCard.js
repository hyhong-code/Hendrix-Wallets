import React from "react";

const ItemCard = ({ item }) => {
  return (
    <div className="card text-dark">
      <img
        src={item.photo}
        className="card-img-top"
        alt={`wallet ${item.name}`}
      />
      <div className="card-body py-2">
        <h5 className="card-title mb-1 text-secondary">
          <small className="discount-text text-muted mr-1">
            ${item.price / 100}
          </small>
          ${(item.price - item.discount) / 100}
        </h5>
        <p className="card-text mb-1 text-primary">{item.name}</p>
        <a href="#!" className="btn btn-sm btn-outline-primary float-right">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default ItemCard;
