import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

const OrderInfoModal = ({ history }) => {
  const handleClick = () => {
    history.push("/orderdetail");
  };
  return (
    <Fragment>
      <button
        className="btn btn-primary d-block mx-auto mt-4"
        type="button"
        data-toggle="modal"
        data-target="#staticBackdrop"
      >
        Fill out info
      </button>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Comfirm Order
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body px-3 px-md-5 py-3">
              <form action="" className="order-info-modal-form">
                <button className="btn btn-outline-dark btn-sm use-profile-btn">
                  Use Profile Info
                </button>
                <div className="form-group mb-2">
                  <label htmlFor="recepient">Recepient Name</label>
                  <input type="text" className="form-control" id="recepient" />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="address">Address</label>
                  <input type="text" className="form-control" id="address" />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="phone">Phone</label>
                  <input type="text" className="form-control" id="phone" />
                </div>
              </form>
            </div>
            <div className="modal-footer px-3 px-md-5">
              <button
                type="button"
                className="btn btn-secondary text-light"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={handleClick}
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(OrderInfoModal);
