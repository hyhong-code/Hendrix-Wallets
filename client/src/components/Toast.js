import React from "react";

const Toast = ({ toast: { msg, type } }) => {
  return (
    <div class={`alert alert-${type} alert-dismissible fade show`} role="alert">
      <div className="d-flex align-items-center justify-content-between">
        <span className="header">
          {type === "danger" ? "Error" : "Success"}
        </span>
        <span
          class="py-0 px-2 d-block close-btn"
          data-dismiss="alert"
          aria-label="Close"
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
