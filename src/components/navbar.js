import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <div id="header">
      <nav className="navbar navbar-dark navbar-expand-sm">
        <div className="container-fluid">
          <span className="navbar-text">
            <Link className="nav-link" to="/">
              <h1>Fotoshoppe</h1>
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
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/register">
                  Register
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
