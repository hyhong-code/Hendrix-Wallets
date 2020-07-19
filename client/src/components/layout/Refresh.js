import React from "react";
import { withRouter } from "react-router-dom";

import Spinner from "./Spinner";

const Refresh = ({ history }) => {
  history.goBack();
  return (
    <section id="refresh" className="bg-light text-dark">
      <Spinner />
    </section>
  );
};

export default withRouter(Refresh);
