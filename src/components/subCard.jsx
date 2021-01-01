import React, { Component } from "react";
import Card from "./card";
import Cards from "./cards";
import subdata from "./subData";

class SubCard extends Component {
  state = { subdata };
  render() {
    return (
      <div className="cards">
        {this.state.subdata.python.map((item) => (
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
}

export default SubCard;
