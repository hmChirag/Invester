import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      class=" navbar navbar-expand-lg border-bottom "
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container my-2 px-5">
        <Link class="navbar-brand" to="/">
          <img src="assets/logo.svg" style={{ width: "130px",margin:"0 70px"}}></img>
        </Link>
        <div>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item ">
                <Link
                  class="nav-link"
                  to="/products"
                >
                  Products
                </Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link " to="/pricing">
                  Princing
                </Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
