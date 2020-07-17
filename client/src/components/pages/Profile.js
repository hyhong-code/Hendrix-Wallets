import React from "react";
import { connect } from "react-redux";

import UpdateProfileModal from "../UpdateProfileModal";

const Profile = ({ user }) => {
  return (
    <section id="profile" className="py-6 text-dark bg-light">
      <h1 className="display-4 text-center text-primary mb-4">MY PROFILE</h1>
      <div className="row">
        <div className="col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <div className="card card-body">
            {user && (
              <img
                src={user.photo}
                className="d-block mx-auto mb-5"
                alt="user profile photo"
              />
            )}
            <div className="row">
              <div className="col-4 mb-5 pb-2 border-bottom text-prompt">
                Name:
              </div>
              {user && (
                <div className="col-8 mb-5 pb-2 border-bottom">{user.name}</div>
              )}
              <div className="col-4 mb-5 pb-2 border-bottom text-prompt">
                Phone Number:
              </div>
              {user && user.phone ? (
                <div className="col-8 mb-5 pb-2 border-bottom">
                  {user.phone}
                </div>
              ) : (
                <div className="col-8 mb-5 pb-2 border-bottom text-muted">
                  <small>NOT ON PROFILE</small>
                </div>
              )}
              <div className="col-4 mb-5 pb-2 border-bottom text-prompt">
                Email:
              </div>
              {user && (
                <div className="col-8 mb-5 pb-2 border-bottom">
                  {user.email}
                </div>
              )}
              <div className="col-4 mb-5 pb-2 text-prompt border-bottom">
                Address:
              </div>
              {user && user.address ? (
                <div className="col-8 mb-5 pb-2 border-bottom">
                  {user.address}
                </div>
              ) : (
                <div className="col-8 mb-5 pb-2 text-muted border-bottom">
                  <small>NOT ON PROFILE</small>
                </div>
              )}
            </div>
            {user && <UpdateProfileModal user={user} />}
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ auth: { user } }) => ({ user });

export default connect(mapStateToProps)(Profile);
