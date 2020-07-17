import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { createOrder } from "../actions/orderActions";

const OrderInfoModal = ({ history, user, createOrder }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    instructions: "",
  });

  const handleChange = (evt) => {
    const { value, name } = evt.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUseProfile = (evt) => {
    evt.preventDefault();
    setFormData((prev) => ({
      ...prev,
      name: user.name || "",
      address: user.address || "",
      email: user.email || "",
      phone: user.phone || "",
    }));
  };

  const handleClick = () => {
    createOrder(formData, history);
    // history.push("/orderdetail");
  };

  const { name, address, email, phone, instructions } = formData;

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
            <div className="modal-header border-secondary">
              <h5 className="modal-title text-primary" id="staticBackdropLabel">
                CONFIRM ORDER
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
              <form className="order-info-modal-form">
                <button
                  onClick={handleUseProfile}
                  className="btn btn-outline-dark btn-sm use-profile-btn"
                >
                  Use Profile Info
                </button>
                <div className="form-group mb-3">
                  <label htmlFor="recepient" className="mb-1 text-primary">
                    Recepient Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control text-dark"
                    id="recepient"
                    value={name}
                    onChange={handleChange}
                    placeholder="e.g. John Smith"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="address" className="mb-1 text-primary">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    className="form-control text-dark"
                    id="address"
                    value={address}
                    onChange={handleChange}
                    placeholder="e.g. 555 110th Ave NE, Bellevue, WA 98004"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email" className="mb-1 text-primary">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control text-dark"
                    id="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="e.g. example@email.com"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="phone" className="mb-1 text-primary">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control text-dark"
                    id="phone"
                    value={phone}
                    onChange={handleChange}
                    placeholder="e.g. 2060001234"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="instruction" className="mb-1 text-primary">
                    Instructions
                  </label>
                  <textarea
                    name="instructions"
                    className="form-control text-dark"
                    id="instruction"
                    value={instructions}
                    onChange={handleChange}
                    placeholder="e.g. Use discreet packaging"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer px-3 px-md-5">
              <button
                type="button"
                className="btn btn-secondary text-light"
                data-dismiss="modal"
              >
                CLOSE
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={handleClick}
              >
                CONFIRM
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ auth: { user } }) => ({ user });

export default connect(mapStateToProps, { createOrder })(
  withRouter(OrderInfoModal)
);
