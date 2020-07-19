import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { adminLogin } from "../../actions/adminActions";
import { createToast } from "../../actions/toastActions";

const AdminLogin = ({
  history,
  adminAuthenticated,
  isAuthenticated,
  adminLogin,
  createToast,
}) => {
  useEffect(() => {
    if (adminAuthenticated) {
      history.replace("/admin/dashboard");
    }
    if (isAuthenticated) {
      createToast("Customers are restricted from this route");
      history.replace("/");
    }
    // eslint-disable-next-line
  }, [adminAuthenticated, isAuthenticated]);

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
    if (await adminLogin(formData)) {
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
              <span>ADMIN LOGIN</span>
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb py-2">
                <li className="breadcrumb-item">
                  <Link to="/" className="text-secondary">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Admin Login
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
                      value="LOGIN AS ADMIN"
                    />
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

const mapStateToProps = ({
  admin: { adminAuthenticated },
  auth: { isAuthenticated },
}) => ({
  adminAuthenticated,
  isAuthenticated,
});

export default connect(mapStateToProps, { adminLogin, createToast })(
  AdminLogin
);
