import React from "react";

import pic1 from "../assets/1.jpg";
import pic2 from "../assets/2.jpg";
import pic3 from "../assets/3.jpg";
import pic4 from "../assets/4.jpg";

const Carousel = () => {
  return (
    <div id="carousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" className="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
        <li data-target="#carousel" data-slide-to="3"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="carousel-overlay"></div>
          <img src={pic1} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block text-left">
            <h5>$29.99</h5>
            <p>TEXTURED EVERYDAY SUIT JACKET</p>
            <a href="" className="btn btn-outline-light btn-sm">
              Learn more
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-overlay"></div>
          <img src={pic2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block text-left">
            <h5>$29.99</h5>
            <p>TEXTURED EVERYDAY SUIT JACKET</p>
            <a href="" className="btn btn-outline-light btn-sm">
              Learn more
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-overlay"></div>
          <img src={pic3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block text-left">
            <h5>$29.99</h5>
            <p>TEXTURED EVERYDAY SUIT JACKET</p>
            <a href="" className="btn btn-outline-light btn-sm">
              Learn more
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-overlay"></div>
          <img src={pic4} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block text-left">
            <h5>$29.99</h5>
            <p>TEXTURED EVERYDAY SUIT JACKET</p>
            <a href="" className="btn btn-outline-light btn-sm">
              Learn more
            </a>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
