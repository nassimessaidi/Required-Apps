import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/card.css";

class Card extends Component {
  render() {
    return (
      <>
        {this.props.link[0] === "/" ? (
          <Link to={this.props.link}>
            <div className="card">
              <div className="img-frame im1">
                <img
                  src={this.props.image}
                  alt="Thumbnail"
                  className="img-thumbnail"
                />
              </div>

              <h3 className="text-center mt-4 title">{this.props.name}</h3>
            </div>
          </Link>
        ) : (
          <a href={this.props.link} target="_blank">
            <div className="card">
              <div className="img-frame im1">
                <img
                  src={this.props.image}
                  alt="Thumbnail"
                  className="img-thumbnail"
                />
              </div>

              <a href={this.props.link} target="_blank">
                <h3 className="text-center mt-4 title">{this.props.name}</h3>
              </a>
            </div>
          </a>
        )}
      </>
    );
  }
}

export default Card;
