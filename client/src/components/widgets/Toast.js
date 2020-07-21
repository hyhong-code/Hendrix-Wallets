import React from "react";

const Toast = ({ toast: { msg, type, id }, clearToast }) => {
  return (
    <div className={`alert alert-${type}`}>
      <div className="d-flex align-items-center justify-content-between">
        <span className="header">
          {type === "danger" ? "Error" : "Success"}
        </span>
        <span
          className="py-0 px-2 d-block close-btn"
          aria-label="Close"
          onClick={() => clearToast(id)}
        >
          <span aria-hidden="true">&times;</span>
        </span>
      </div>
      <hr className="m-0 mb-1" />
      <p className="m-0 toast-text">{msg}</p>
    </div>
  );
};

export default Toast;
