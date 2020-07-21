import React from "react";
import { connect } from "react-redux";

import Toast from "./Toast";
import { clearToast } from "../../actions/toastActions";

const ToastContainer = ({ toasts, clearToast }) => {
  return (
    <div className="toast-container">
      {toasts &&
        toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} clearToast={clearToast} />
        ))}
    </div>
  );
};

const mapStateToProps = ({ toasts }) => ({ toasts });

export default connect(mapStateToProps, { clearToast })(ToastContainer);
