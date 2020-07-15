import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary text-light sticky-top py-2">
      <div class="container d-flex">
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img src="img/logo.png" class="logo" alt="" />
          <span class="ml-2">Hendrix</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>

          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item d-lg-none">
              <a class="nav-link" href="#">
                Cart
              </a>
            </li>
            <li class="nav-item dropdown d-none d-lg-block">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Cart
              </a>
              <div
                class="dropdown-menu p-0 text-dark bg-light"
                aria-labelledby="navbarDropdown"
              >
                <div class="cart-dropdown">
                  <div class="card-body p-2">
                    <span class="mb-1 d-inline-block">Cart Total: $65.00</span>
                    <div class="list-group">
                      <a
                        href="#"
                        class="list-group-item list-group-item-action bg-light"
                      >
                        <div class="d-flex align-items-center justify-content-between">
                          <img
                            src="https://images.unsplash.com/photo-1532033375034-a29004ea9769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2200&q=80"
                            alt=""
                            class="img-fluid"
                          />
                          <div class="mr-1">
                            <p class="m-0">
                              <strong>ATTIC </strong>x 2
                            </p>
                            <small class="text-muted float-right">$30</small>
                          </div>
                        </div>
                      </a>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action bg-light"
                      >
                        <div class="d-flex align-items-center justify-content-between">
                          <img
                            src="https://images.unsplash.com/photo-1532033375034-a29004ea9769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2200&q=80"
                            alt=""
                            class="img-fluid"
                          />
                          <div class="mr-1">
                            <p class="m-0">
                              <strong>ATTIC </strong>x 2
                            </p>
                            <small class="text-muted float-right">$30</small>
                          </div>
                        </div>
                      </a>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action bg-light"
                      >
                        <div class="d-flex align-items-center justify-content-between">
                          <img
                            src="https://images.unsplash.com/photo-1532033375034-a29004ea9769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2200&q=80"
                            alt=""
                            class="img-fluid"
                          />
                          <div class="mr-1">
                            <p class="m-0">
                              <strong>ATTIC </strong>x 2
                            </p>
                            <small class="text-muted float-right">$30</small>
                          </div>
                        </div>
                      </a>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action bg-light"
                      >
                        <div class="d-flex align-items-center justify-content-between">
                          <img
                            src="https://images.unsplash.com/photo-1532033375034-a29004ea9769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2200&q=80"
                            alt=""
                            class="img-fluid"
                          />
                          <div class="mr-1">
                            <p class="m-0">
                              <strong>ATTIC </strong>x 2
                            </p>
                            <small class="text-muted float-right">$30</small>
                          </div>
                        </div>
                      </a>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action bg-light"
                      >
                        <div class="d-flex align-items-center justify-content-between">
                          <img
                            src="https://images.unsplash.com/photo-1532033375034-a29004ea9769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2200&q=80"
                            alt=""
                            class="img-fluid"
                          />
                          <div class="mr-1">
                            <p class="m-0">
                              <strong>ATTIC </strong>x 2
                            </p>
                            <small class="text-muted float-right">$30</small>
                          </div>
                        </div>
                      </a>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action bg-light"
                      >
                        <div class="d-flex align-items-center justify-content-between">
                          <img
                            src="https://images.unsplash.com/photo-1532033375034-a29004ea9769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2200&q=80"
                            alt=""
                            class="img-fluid"
                          />
                          <div class="mr-1">
                            <p class="m-0">
                              <strong>ATTIC </strong>x 2
                            </p>
                            <small class="text-muted float-right">$30</small>
                          </div>
                        </div>
                      </a>
                    </div>
                    <a
                      href=""
                      class="mt-1 btn btn-secondary btn-block text-white"
                    >
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown2"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Signin
              </a>
              <div
                class="dropdown-menu text-dark bg-light"
                aria-labelledby="navbarDropdown2"
              >
                <a class="dropdown-item signin" href="#">
                  Login
                </a>
                <a class="dropdown-item signin" href="#">
                  Signup
                </a>
              </div>
            </li>
          </ul>
          <form action="" class="form-inline my-2 my-lg-0">
            <input
              type="search"
              placeholder="Search Product..."
              class="form-control mr-sm-2 bg-light"
            />
            <button class="btn btn-outline-light my-2 my-sm-0">
              <fas class="fas fa-search"></fas>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
