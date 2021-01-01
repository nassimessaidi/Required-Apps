import React, { Component } from "react";
import "./styles/navbar.css";

class AppsCounter extends Component {
  render() {
    return (
      <button type="button" class="btn btn-primary mt-2">
        {this.props.msg}{" "}
        <span class="badge badge-light">{this.props.counter}</span>
        <span class="sr-only">unread messages</span>
      </button>
    );
  }
}

export default AppsCounter;
