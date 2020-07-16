import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item">
          <div className="carousel-overlay"></div>
          <img
            src="https://images.unsplash.com/photo-1576616074021-f6b73bbabde4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
            className="d-block w-100"
            alt="..."
          />

          <div className="carousel-caption d-none d-md-block">
            <div className="d-flex flex-column align-items-start text-left">
              <h5 className="mb-0 text-secondary">AROMA</h5>
              <p className="my-1">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <button className="btn btn-outline-light btn-sm">Browse</button>
            </div>
          </div>
        </div>
        <div className="carousel-item active">
          <div className="carousel-overlay"></div>
          <img
            src="https://images.unsplash.com/photo-1530185657381-2668451ca7e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
            className="d-block w-100"
            alt="..."
          />

          <div className="carousel-caption d-none d-md-block">
            <div className="d-flex flex-column align-items-start text-left">
              <h5 className="mb-0 text-secondary">ESSENSE</h5>
              <p className="my-1">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <button className="btn btn-outline-light btn-sm">Browse</button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-overlay"></div>
          <img
            src="https://images.unsplash.com/photo-1512358958014-b651a7ee1773?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <div className="d-flex flex-column align-items-start text-left">
              <h5 className="mb-0 text-secondary">MYSTIC</h5>
              <p className="my-1">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <button className="btn btn-outline-light btn-sm">Browse</button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-overlay"></div>
          <img
            src="https://images.unsplash.com/photo-1512358958014-b651a7ee1773?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <div className="d-flex flex-column align-items-start text-left">
              <h5 className="mb-0 text-secondary">SPICE</h5>
              <p className="my-1">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <button className="btn btn-outline-light btn-sm">Browse</button>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleCaptions"
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
