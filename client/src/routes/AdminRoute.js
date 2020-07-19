import React, { useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { createToast } from "../actions/toastActions";

const AdminRoute = ({
  component: Component,
  history,
  isAuthenticated,
  adminAuthenticated,
  ...otherProps
}) => {
  useEffect(() => {
    if (!adminAuthenticated && !isAuthenticated) {
      history.replace("/admin");
    } else if (!adminAuthenticated && isAuthenticated) {
      createToast("Customers are restricted from this route");
      history.replace("/");
    }
    // eslint-disable-next-line
  }, [adminAuthenticated, isAuthenticated]);

  return <Route {...otherProps} component={Component} />;
};

const mapStateToProps = ({
  admin: { adminAuthenticated },
  auth: { isAuthenticated },
}) => ({
  isAuthenticated,
  adminAuthenticated,
});

export default connect(mapStateToProps)(withRouter(AdminRoute));
