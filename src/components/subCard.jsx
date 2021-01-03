import React, { Component } from "react";
import AppsCounter from "./appsCounter";
import Card from "./card";
import Cards from "./cards";
import subdata from "./subData";

class SubCard extends Component {
  state = { subdata };
  render() {
    return (
      <>
        <AppsCounter
          msg={this.props.title}
          counter={this.state.subdata[`${this.props.subpage}`].length}
        />
        {console.log(this.state.subdata[`${this.props.subpage}`].length)}

        <div className="cards">
          {this.state.subdata[`${this.props.subpage}`].map((item) => (
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

export default SubCard;
