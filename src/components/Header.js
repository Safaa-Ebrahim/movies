import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LanguageContext } from "./../context/language";
import logo from "./../assets/images/logo.png"
export default function Header() {
  const favourite = useSelector((state) => state.favourite.movies.length);
  const { language,handleLanguageChange } = useContext(LanguageContext);

  return (
    <div className="fixed-top mb-6">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
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
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" aria-current="page" to="/movies">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/people">
                  People
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tv">
                  TV
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">
                  ContactUs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  AboutUs
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav">
              <div className="form-group mx-2">
                <select
                  value={language}
                  className="form-select"
                  onChange={(e) => handleLanguageChange(e.target.value)}
                >
                  <option value="en">English</option>
                  <option value="ar">Arabic</option>
                  <option value="fr">French</option>
                  <option value="es">Spanish</option>
                  <option value="ko">Korean</option>
                  <option value="zh">Chinese</option>
                </select>
              </div>

              <li className="nav-item order-last order-lg-first d-flex align-items-center">
                <Link to="/favourite" className="nav-link">
                  <i className="fas fa-heart text-white fa-lg m-1"></i>
                  <span className="mr-0 span-fav-icon">{favourite}</span>
                </Link>

                {/* <i className="fas fa-heart mx-3"></i><span className="mr-0">{favourite}</span> */}
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
              <li>
                <span className="nav-link" aria-current="page">
                  Logout
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
