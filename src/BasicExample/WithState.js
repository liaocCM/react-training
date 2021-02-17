import React, { Component } from 'react';
import { Button } from 'antd';

class WithState extends Component {
  constructor() {
    this.state = {
      count: 0,
    };
  }

  addOne = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  addTwo = () => {
    this.setState((prevState) => ({ count: prevState.count + 2 }));
  };

  render() {
    // this.setState({count: 1})
    return (
      <>
        <div>WithState</div>
        <div style={{ marginTop: '10px' }}>scount now: {this.state.count}</div>
        <div>
          <Button
            style={{ display: 'inline-block', marginRight: 10 }}
            type="primary"
            onClick={this.addOne}
          >
            +1
          </Button>
          <Button
            style={{ display: 'inline-block' }}
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

export default WithState;
