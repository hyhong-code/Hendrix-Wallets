import React, { useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const AdminRoute = ({
  component: Component,
  history,
  adminAuthenticated,
  ...otherProps
}) => {
  useEffect(() => {
    if (!adminAuthenticated) {
      history.replace("/admin");
    }
  }, [adminAuthenticated]);

  return <Route {...otherProps} component={Component} />;
};

const mapStateToProps = ({ admin: { adminAuthenticated } }) => ({
  adminAuthenticated,
});

export default connect(mapStateToProps)(withRouter(AdminRoute));
