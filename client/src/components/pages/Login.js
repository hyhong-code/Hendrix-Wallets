import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { login } from "../../actions/authActions";
import { createToast } from "../../actions/toastActions";

const Login = ({ history, login, adminAuthenticated, createToast }) => {
  useEffect(() => {
    if (adminAuthenticated) {
      createToast("Logged in as admin, can't access user Route.");
      history.replace("/admin/dashboard");
    }
    // eslint-disable-next-line
  }, [adminAuthenticated]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (await login(formData)) {
      setFormData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <section id="signup" className="py-6 bg-light text-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="display-4 text-center text-primary mb-5">
              <span>LOGIN</span>
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb py-2">
                <li className="breadcrumb-item">
                  <Link to="/" className="text-secondary">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Login
                </li>
              </ol>
            </nav>
            <form onSubmit={handleSubmit}>
              <div className="card card-body py-5 px-3">
                <div className="row">
                  <div className="col-10 offset-1">
                    <div className="form-group">
                      <label htmlFor="email">EMAIL</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">PASSWORD</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                      />
                    </div>

                    <input
                      type="submit"
                      className="btn btn-primary btn-block"
                      value="LOG IN"
                    />
                    <small className="form-text text-muted mt-3">
                      Don't have an account?{" "}
                      <Link to="/signup" className="text-secondary">
                        Sign up <i className="fas fa-arrow-right"></i>
                      </Link>
                    </small>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ admin: { adminAuthenticated } }) => ({
  adminAuthenticated,
});

export default connect(mapStateToProps, { login, createToast })(Login);
