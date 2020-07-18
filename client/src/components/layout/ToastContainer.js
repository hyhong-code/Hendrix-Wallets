import React from "react";
import { connect } from "react-redux";

import Toast from "../Toast";

const ToastContainer = ({ toasts }) => {
  return (
    <div className="toast-container">
      {toasts && toasts.map((toast) => <Toast />)}
    </div>
  );
};

const mapStateToProps = ({ toasts }) => ({ toasts });

export default connect(null, { mapStateToProps })(ToastContainer);
