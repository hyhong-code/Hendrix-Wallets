import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(formData);
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <section id="signup" className="py-6 bg-light text-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="display-4 text-center text-primary mb-5">
              <span>LOG IN</span>
            </h1>
            <div className="form">
              <div className="card card-body py-5 px-3">
                <div className="row">
                  <div className="col-10 offset-1">
                    <form onSubmit={handleSubmit}>
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
                    </form>
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

export default Login;
