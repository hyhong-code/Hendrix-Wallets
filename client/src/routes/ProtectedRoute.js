import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  ...otherProps
}) => {
  return isAuthenticated ? (
    <Route {...otherProps} component={Component} />
  ) : (
    <Redirect to="/login" />
  );
};

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
  isAuthenticated,
});

export default connect(mapStateToProps)(ProtectedRoute);
