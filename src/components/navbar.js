import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <ul class="nav justify-content-center  bg-light">
        <li class="nav-item">
          <Link class="nav-link" to="/">
            Home
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">
            About
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/signIn">
            SignIn
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/signup">
            SignUp
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default Navbar;
