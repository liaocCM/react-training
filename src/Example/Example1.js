import React, { Component } from "react";

class Example1 extends Component {
  state = {
    name: 'Example',
  };
  render() {
    return <div>{this.state.name} {this.props.number}</div>;
  }
}

export default Example1;
