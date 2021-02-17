import React, { Component } from 'react';
import { Button } from 'antd';

class WithFunction extends Component {
  render() {
    return (
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => {
          // console.log('div clicked');
          alert('div clicked');
        }}
      >
        WithEvent
      </div>
    );
  }
}

export default WithFunction;
