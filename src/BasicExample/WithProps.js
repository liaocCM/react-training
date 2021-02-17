import React, { Component } from 'react';
import { Button } from 'antd';

class WithProps extends Component {
  render() {
    return (
      <>
        <div>
        WithProps {this.props.number} {this.props.text}
        </div>
      </>
    );
  }
}

export default WithProps;
