import React, { Component } from "react";
import "./styles/navbar.css";
import data from "./data";

class Navbar extends Component {
  state = { data };
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
        <button type="button" class="btn btn-primary mt-2">
          Number of Apps{" "}
          <span class="badge badge-light">{this.state.data.apps.length}</span>
          <span class="sr-only">unread messages</span>
        </button>
      </nav>
    );
  }
}

export default Navbar;
