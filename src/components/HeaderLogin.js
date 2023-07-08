import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "./../assets/images/logo.png"

export default function HeaderLogin() {
  return (
    <div className="fixed-top mb-6">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
          <img src={logo} style={{width:"100px",height:"50px"}} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item order-last order-lg-first d-flex align-items-center">
                <i className="fab fa-facebook mx-2"></i>
                <i className="fab fa-twitter mx-2"></i>
                <i className="fab fa-instagram mx-4 ms-2"></i>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="nav-link" aria-current="page" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
