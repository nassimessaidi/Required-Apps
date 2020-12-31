import React, { Component } from "react";
import "./styles/navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="nav-bar mt-4 mb-2">
        <img
          className="mb-3"
          src="https://4.bp.blogspot.com/-i2NtKpGy0yU/X4ol9mCxRjI/AAAAAAAACic/ba4Nj3Q7gDgdjgsmHacXaJHIpsH9bQJEwCK4BGAYYCw/s1600/blog%2Blogo.png"
          alt="NASSIM ESSAIDI"
        />
        <p className="text-muted">
          Essential apps and software to me when I will install a fresh windows
          10
        </p>
      </nav>
    );
  }
}

export default Navbar;
