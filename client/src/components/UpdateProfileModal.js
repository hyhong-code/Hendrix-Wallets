import React, { Fragment } from "react";

import ProfilePicUpdate from "./ProfilePicUpdate";

const UpdateProfileModal = ({ user }) => {
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
            <div className="modal-header">
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
              <div className="px-3">
                <img
                  src={user.photo}
                  className="d-block mx-auto mb-3"
                  alt="user profile photo"
                />
                <ProfilePicUpdate />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateProfileModal;
