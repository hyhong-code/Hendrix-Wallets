import React, { useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const GuestRoute = ({
  location,
  history,
  component: Component,
  isAuthenticated,
  ...otherProps
}) => {
  useEffect(() => {
    if (isAuthenticated) {
      const refreshPath = sessionStorage.getItem("refreshPath");
      if (refreshPath) {
        history.replace(refreshPath);
      } else {
        history.replace("/");
      }
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return <Route {...otherProps} component={Component} />;
};

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
  isAuthenticated,
});

export default connect(mapStateToProps)(withRouter(GuestRoute));
