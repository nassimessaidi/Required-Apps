import React, { Component } from "react";
import "./styles/card.css";

class Card extends Component {
  render() {
    return (
      <a href={this.props.link} target="_blank">
        <div className="card">
          <a href={this.props.link} target="_blank">
            <div className="img-frame im1">
              <img
                src={this.props.image}
                alt="Thumbnail"
                className="img-thumbnail"
              />
            </div>
          </a>

          <a href="">
            <h3 className="text-center mt-4 title">{this.props.name}</h3>
          </a>
        </div>
      </a>
    );
  }
}

export default Card;
