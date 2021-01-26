import React, { Component } from "react";
import { Button } from "antd";

class Example1 extends Component {
  state = {
    name: "Example",
    count: 0,
  };

  addOne() {
    console.log("this", this);
    this.setState((prevState) => ({ count: (prevState.count += 1) }));
  }

  addTwo = () => {
    console.log("this", this);
    this.setState((prevState) => ({ count: (prevState.count += 2) }));
  };

  render() {
    return (
      <>
        <div>
          {this.state.name} {this.props.number}
        </div>
        <div style={{ marginTop: "10px" }}>
          {" "}
          count now: {this.state.count}
        </div>
        <div>
          <Button
            style={{ display: "inline-block", marginRight: 10 }}
            type="primary"
            onClick={this.addOne.bind(this)}
          >
            +1
          </Button>
          <Button
            style={{ display: "inline-block" }}
            type="primary"
            onClick={this.addTwo}
          >
            +2
          </Button>
        </div>
      </>
    );
  }
}

export default Example1;
