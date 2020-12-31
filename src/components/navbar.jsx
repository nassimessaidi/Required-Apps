import React, { Component } from "react";
import "./styles/navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="nav-bar mt-4 mb-2">
        <h1 className="heading1">NASSIM ESSAIDI</h1>
        <p className="text-muted">
          Essential apps and software to me when I install a fresh windows 10
        </p>
      </nav>
    );
  }
}

export default Navbar;
