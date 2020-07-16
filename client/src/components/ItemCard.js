import React, { Fragment } from "react";
import { connect } from "react-redux";
import ReactTooltip from "react-tooltip";

import { addItemToCart } from "../actions/cartActions";

const ItemCard = ({ item, addItemToCart, isAuthenticated }) => {
  const pricing = () =>
    item.discount > 0 ? (
      <h5 className="card-title mb-1 text-secondary">
        <small className="discount-text text-muted mr-1">
          ${item.price / 100}
        </small>
        ${(item.price - item.discount) / 100}
      </h5>
    ) : (
      <h5 className="card-title mb-1 text-secondary">${item.price / 100}</h5>
    );

  return (
    <Fragment>
      <div className="card text-dark">
        <img
          src={item.photo}
          className="card-img-top"
          alt={`wallet ${item.name}`}
        />
        <div className="card-body py-2">
          {pricing()}
          <p className="card-text mb-1 text-primary">{item.name}</p>
          <div className="d-flex justify-content-end">
            <a href="#!" className="btn btn-sm btn-outline-primary ">
              <i className="fas fa-info-circle"></i>
            </a>
            {isAuthenticated ? (
              <button
                onClick={() => addItemToCart(item.id)}
                className="btn btn-sm btn-outline-secondary ml-2"
              >
                <i className="fas fa-cart-plus"></i>
              </button>
            ) : (
              <button
                className="btn btn-sm btn-outline-secondary ml-2 disabled"
                data-tip="Please log in first"
              >
                <i className="fas fa-cart-plus"></i>
              </button>
            )}
          </div>
        </div>
      </div>
      <ReactTooltip />
    </Fragment>
  );
};

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
  isAuthenticated,
});

export default connect(mapStateToProps, { addItemToCart })(ItemCard);
