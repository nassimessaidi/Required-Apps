import React, { Component } from "react";
import "./styles/navbar.css";
import data from "./data";
import AppsCounter from "./appsCounter";
import { Link, useLocation } from "react-router-dom";

class Navbar extends Component {
  state = { data };
  render() {
    return (
      <nav className="nav-bar mt-4 mb-2">
        <Link to="/">
          <img
            className="mb-3"
            src="https://firebasestorage.googleapis.com/v0/b/requiredappstoinstall.appspot.com/o/Required%20Apps%2FImages%2Fblog%20logo.png?alt=media"
            alt="NASSIM ESSAIDI"
          />
        </Link>
        <p className="text-muted">
          Essential Apps And Software To Me every time I installed a fresh
          windows 10
        </p>
      </nav>
    );
  }
}

export default Navbar;
