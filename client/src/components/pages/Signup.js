import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section id="signup" className="py-6 bg-light text-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="display-4 text-center text-primary mb-5">
              <span>SIGN UP</span>
            </h1>
            <div className="form">
              <div className="card card-body py-5 px-3">
                <div className="row">
                  <div className="col-10 offset-1">
                    <div className="form-group">
                      <label htmlFor="email">NAME</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">EMAIL</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">PASSWORD</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="passwordConfirm">CONFIRM PASSWORD</label>
                      <input
                        type="password"
                        className="form-control"
                        id="passwordConfirm"
                        name="passwordConfirm"
                      />
                    </div>
                    <input
                      type="submit"
                      className="btn btn-primary btn-block"
                      value="SIGN UP"
                    />
                    <small className="form-text text-muted mt-3">
                      Already have account?{" "}
                      <Link to="/login">
                        Log in <i className="fas fa-arrow-right"></i>
                      </Link>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
