import React from "react";

const Topbar = () => {
  return (
    <div className="topbar bg-light text-primary py-1">
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center justify-content-lg-start align-items-center">
            <i className="fas fa-phone-alt mr-1"></i>{" "}
            <span className="text-contact">TEL: (206) 696-0214</span>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <i className="fas fa-envelope mr-1"></i>{" "}
            <span className="text-contact">Email: hong961127@gmail.com</span>
          </div>
          <div className="col-md-4 d-flex justify-content-center justify-content-lg-end align-items-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon mr-3"
              href="https://www.linkedin.com/in/denny-haiyang-hong-7a7230104/"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="social-icon mr-3"
              href="https://github.com/hyhong-code"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="social-icon mr-3"
              href="https://twitter.com/DennyHong3"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="social-icon"
              href="https://www.facebook.com/DennyHong1996"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
