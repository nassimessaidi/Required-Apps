import React, { Component } from "react";
import Card from "./card";
import "./styles/card.css";
import data from "./data";
import { Link } from "react-router-dom";
import AppsCounter from "./appsCounter";

class Cards extends Component {
  state = { data };
  render() {
    return (
      <>
        <AppsCounter
          msg={"Apps Number"}
          counter={this.state.data.apps.length}
        />
        <div className="cards">
          {console.log(this.state.data.apps.length)}

          {this.state.data.apps.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Cards;
