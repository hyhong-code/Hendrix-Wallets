import React from "react";

const ItemFilter = () => {
  return (
    <div className="card mb-3 mb-lg-0">
      <div className="card-body">
        <p className="lead text-primary mb-1 mb-lg-3">Collections</p>
        <div className="d-flex flex-row flex-wrap flex-wrap flex-lg-column align-items-start">
          <div className="custom-control custom-checkbox mb-1 mb-lg-3 mr-3 mr-lg-0 ">
            <input
              type="checkbox"
              className=" custom-control-input"
              id="customCheck1"
            />
            <label htmlFor="customCheck1" className="custom-control-label">
              AROMA
            </label>
          </div>
          <div className="custom-control custom-checkbox mb-1 mb-lg-3 mr-3 mr-lg-0 ">
            <input
              type="checkbox"
              className=" custom-control-input"
              id="customCheck2"
            />
            <label htmlFor="customCheck2" className="custom-control-label">
              ESSENSE
            </label>
          </div>
          <div className="custom-control custom-checkbox mb-1 mb-lg-3 mr-3 mr-lg-0 ">
            <input
              type="checkbox"
              className=" custom-control-input"
              id="customCheck3"
            />
            <label htmlFor="customCheck3" className="custom-control-label">
              MYSTIC
            </label>
          </div>
          <div className="custom-control custom-checkbox mb-1 mb-lg-3 mr-3 mr-lg-0 ">
            <input
              type="checkbox"
              className=" custom-control-input"
              id="customCheck4"
            />
            <label htmlFor="customCheck4" className="custom-control-label">
              SPICE
            </label>
          </div>
        </div>
        <hr className="my-1 my-lg-3" />
        <p className="lead text-primary mb-1 mb-lg-3">Promotion</p>
        <div className="d-flex flex-row flex-wrap flex-lg-column align-items-start">
          <div className="custom-control custom-checkbox mb-1 mb-lg-3 mr-3 mr-lg-0 ">
            <input
              type="checkbox"
              className=" custom-control-input"
              id="customCheck5"
            />
            <label htmlFor="customCheck5" className="custom-control-label">
              DISCOUNT
            </label>
          </div>
        </div>
        <hr className="my-1 my-lg-3" />
        <div className="d-flex flex-column align-items-center">
          <div className="mt-3">
            <button className="btn btn-outline-primary">All</button>
            <button className="btn btn-outline-secondary ml-3">Clear</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemFilter;
