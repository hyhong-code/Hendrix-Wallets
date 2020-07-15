import React from "react";

const Showcase = () => {
  return (
    <section class="showcase bg-light text-dark py-6">
      <div class="container">
        <div class="row">
          <div class="col-md-7 d-flex align-items-center">
            {/* <!-- CAROUSEL --> */}
            <div
              id="carouselExampleCaptions"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="0"
                  class="active"
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
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="carousel-overlay"></div>
                  <img
                    src="https://images.unsplash.com/photo-1576616074021-f6b73bbabde4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                    class="d-block w-100"
                    alt="..."
                  />

                  <div class="carousel-caption d-none d-md-block">
                    <div class="d-flex flex-column align-items-start text-left">
                      <h5>$12.99</h5>
                      <p class="my-2">
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                      <button class="btn btn-secondary btn-sm">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="carousel-overlay"></div>
                  <img
                    src="https://images.unsplash.com/photo-1530185657381-2668451ca7e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                    class="d-block w-100"
                    alt="..."
                  />

                  <div class="carousel-caption d-none d-md-block">
                    <div class="d-flex flex-column align-items-start text-left">
                      <h5>$12.99</h5>
                      <p class="my-2">
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                      <button class="btn btn-secondary btn-sm">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="carousel-overlay"></div>
                  <img
                    src="https://images.unsplash.com/photo-1512358958014-b651a7ee1773?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <div class="d-flex flex-column align-items-start text-left">
                      <h5>$12.99</h5>
                      <p class="my-2">
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                      <button class="btn btn-secondary btn-sm">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div class="col-md-5">
            {/* <!-- COLLECTIONS --> */}
            <h3 class="text-center">SHOP COLLECTIONS</h3>
            <div class="row my-4">
              <div class="col-6">
                <div class="collection-card">
                  <span class="badge badge">MAREN</span>
                  <img
                    src="https://images.unsplash.com/photo-1560375821-bc93c77bb31d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                    alt=""
                    class="img-fluid w-100"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="collection-card">
                  <span class="badge badge">CALEV</span>
                  <img
                    src="https://images.unsplash.com/photo-1556551999-7efff4f05f19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                    alt=""
                    class="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="collection-card">
                  <span class="badge badge">DEOIRIDH</span>
                  <img
                    src="https://images.unsplash.com/photo-1555859230-93d6c47fe787?ixlib=rb-1.2.1&auto=format&fit=crop&w=2551&q=80"
                    alt=""
                    class="img-fluid w-100"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="collection-card">
                  <span class="badge badge">ATTIS</span>
                  <img
                    src="https://images.unsplash.com/photo-1589822826129-7672be3b2eee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80"
                    alt=""
                    class="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
            <a href="" class="btn btn-primary btn-block mt-4">
              Browse All
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
