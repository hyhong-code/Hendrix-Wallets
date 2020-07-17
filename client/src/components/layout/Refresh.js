import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

const Refresh = ({ history }) => {
  history.goBack();
  return <Fragment></Fragment>;
};

export default withRouter(Refresh);
