import React from "react";

const Topbar = () => {
  return (
    <div class="topbar bg-light text-primary py-1">
      <div class="container">
        <div class="row">
          <div class="col-md-4 d-flex justify-content-center justify-content-lg-start align-items-center">
            <i class="fas fa-phone-alt mr-1"></i>TEL: (206) 696-0214
          </div>
          <div class="col-md-4 d-flex justify-content-center align-items-center">
            <i class="fas fa-envelope mr-1"></i> Email: hong961127@gmail.com
          </div>
          <div class="col-md-4 d-flex justify-content-center justify-content-lg-end align-items-center">
            <a class="social-icon mr-3" href="">
              <i class="fab fa-linkedin"></i>
            </a>
            <a class="social-icon mr-3" href="">
              <i class="fab fa-facebook"></i>
            </a>
            <a class="social-icon mr-3" href="">
              <i class="fab fa-instagram"></i>
            </a>
            <a class="social-icon" href="">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
