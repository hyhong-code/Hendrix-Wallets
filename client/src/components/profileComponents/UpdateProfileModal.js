import React, { Fragment, useState } from "react";
import { connect } from "react-redux";

import { updateProfile } from "../../actions/profileAction";
import ProfilePicUpdate from "./ProfilePicUpdate";

const UpdateProfileModal = ({ user, updateProfile }) => {
  const [formData, setFormData] = useState({
    name: user.name || "",
    phone: user.phone || "",
    email: user.email || "",
    address: user.address || "",
  });

  const { name, phone, email, address } = formData;

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    updateProfile(formData);
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#profile-modal"
      >
        UPDATE PROFILE
      </button>

      <div
        className="modal fade"
        id="profile-modal"
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
                UPDATE PROFILE
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
            <div className="modal-body">
              <div className="px-2 px-md-5">
                <img
                  src={user.photo}
                  className="d-block mx-auto mb-4"
                  alt="user profile"
                />
                <ProfilePicUpdate />
                <form>
                  <div className="form-group mt-3">
                    <input
                      placeholder="Name"
                      type="text"
                      name="name"
                      className="form-control"
                      value={name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      placeholder="Phone Number"
                      type="text"
                      name="phone"
                      className="form-control"
                      value={phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      placeholder="Email"
                      type="text"
                      name="email"
                      className="form-control"
                      value={email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      placeholder="Address"
                      type="text"
                      name="address"
                      className="form-control"
                      value={address}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer px-2 px-md-5">
              <div className="px-3">
                <button
                  type="button"
                  className="btn btn-secondary text-light"
                  data-dismiss="modal"
                >
                  CLOSE
                </button>
                <button
                  onClick={handleClick}
                  type="button "
                  className="btn btn-primary ml-2"
                  data-dismiss="modal"
                >
                  UPDATE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { updateProfile })(UpdateProfileModal);
