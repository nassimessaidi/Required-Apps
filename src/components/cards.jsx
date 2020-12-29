import React, { Component } from "react";
import Card from "./card";
import "./styles/card.css";
import data from "./data";

class Cards extends Component {
  state = { data };
  render() {
    return (
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
    );
  }
  loopOverApps() {
    return (
      <Card
        key={this.state.data.apps.item.id}
        name={this.state.data.apps.name}
        image={this.state.data.apps.image}
        link={this.state.data.apps.link}
      />
    );
  }
}

export default Cards;
