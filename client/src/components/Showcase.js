import React from "react";

const Showcase = () => {
  return (
    <section className="showcase bg-light text-dark py-6">
      <div className="container">
        <div className="row">
          <div className="col-md-7 d-flex align-items-center">
            {/* <!-- CAROUSEL --> */}
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
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="carousel-overlay"></div>
                  <img
                    src="https://images.unsplash.com/photo-1576616074021-f6b73bbabde4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                    className="d-block w-100"
                    alt="..."
                  />

                  <div className="carousel-caption d-none d-md-block">
                    <div className="d-flex flex-column align-items-start text-left">
                      <h5>$12.99</h5>
                      <p className="my-2">
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                      <button className="btn btn-secondary btn-sm">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-overlay"></div>
                  <img
                    src="https://images.unsplash.com/photo-1530185657381-2668451ca7e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                    className="d-block w-100"
                    alt="..."
                  />

                  <div className="carousel-caption d-none d-md-block">
                    <div className="d-flex flex-column align-items-start text-left">
                      <h5>$12.99</h5>
                      <p className="my-2">
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                      <button className="btn btn-secondary btn-sm">
                        Learn more
                      </button>
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
                      <h5>$12.99</h5>
                      <p className="my-2">
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                      <button className="btn btn-secondary btn-sm">
                        Learn more
                      </button>
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
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="col-md-5">
            {/* <!-- COLLECTIONS --> */}
            <h3 className="text-center">SHOP COLLECTIONS</h3>
            <div className="row my-4">
              <div className="col-6">
                <div className="collection-card">
                  <span className="badge badge">MAREN</span>
                  <img
                    src="https://images.unsplash.com/photo-1560375821-bc93c77bb31d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="collection-card">
                  <span className="badge badge">CALEV</span>
                  <img
                    src="https://images.unsplash.com/photo-1556551999-7efff4f05f19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="collection-card">
                  <span className="badge badge">DEOIRIDH</span>
                  <img
                    src="https://images.unsplash.com/photo-1555859230-93d6c47fe787?ixlib=rb-1.2.1&auto=format&fit=crop&w=2551&q=80"
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="collection-card">
                  <span className="badge badge">ATTIS</span>
                  <img
                    src="https://images.unsplash.com/photo-1589822826129-7672be3b2eee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80"
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
            <a href="" className="btn btn-primary btn-block mt-4">
              Browse All
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
