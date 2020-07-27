import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./css/navbar.css";

const NavBar = () => {
  return (
    <div id="header">
      <nav className="navbar navbar-dark navbar-expand-sm">
        <div className="container-fluid">
          <span className="navbar-text">
            <Link className="nav-link" to="/">
              <img className="img-fluid logo" src="assets/logo.png" alt="Responsive image"/>
              <span className="text">Fotoshoppe</span>
            </Link>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/login">
                  Sign In
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/register">
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/cart">
                  <i className="fas fa-shopping-cart"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
