import React, { useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({
  history,
  location,
  component: Component,
  isAuthenticated,
  ...otherProps
}) => {
  useEffect(() => {
    if (isAuthenticated) {
      sessionStorage.setItem("refreshPath", location.pathname);
    } else {
      history.replace("/login");
    }
  }, [location.pathname, isAuthenticated]);

  return <Route {...otherProps} component={Component} />;
};

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
  isAuthenticated,
});

export default connect(mapStateToProps)(withRouter(ProtectedRoute));
