import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/404.css";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
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
          <h6>Looks like the page you were looking for is no longer here.</h6>
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
