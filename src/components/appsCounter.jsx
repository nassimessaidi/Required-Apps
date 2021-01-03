import React, { Component } from "react";
import "./styles/navbar.css";

class AppsCounter extends Component {
  render() {
    const styles = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
    return (
      <div style={styles}>
        <button type="button" class="btn btn-primary mb-4">
          {this.props.msg}{" "}
          <span class="badge badge-light">{this.props.counter}</span>
          <span class="sr-only">unread messages</span>
        </button>
      </div>
    );
  }
}

export default AppsCounter;
