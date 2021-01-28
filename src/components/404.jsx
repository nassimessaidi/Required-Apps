import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/404.css";
import HomeIcon from "@material-ui/icons/Home";
class NotFound extends Component {
  state = {};
  render() {
    return (
      <section className="section">
        <div className="section-content">
          <h1>
            <span className="col-color">404</span> Not Found
          </h1>
          <div className="text-infos">
            <h5>
              Sorry! The page you’re looking for does not exist. Instead, try
              one of the following:
            </h5>
            <ol className="order-list">
              <li>Hit the home button.</li>
              <li>Hit the "back" button on your browser.</li>
            </ol>
          </div>

          <Link to="/">
            <button className="butn">
              <HomeIcon />
              &nbsp;Home
            </button>
          </Link>
        </div>
      </section>
    );
  }
}

export default NotFound;
