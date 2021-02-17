import React from 'react';
import { Progress, Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

class ProgressDemo extends React.Component {
  state = {
    percent: 0,
  };

  increase = () => {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  };

  decline = () => {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  };

  componentDidMount() {
    this.intv = setInterval(() => {
      this.setState({ percent: this.state.percent + 1 });
      console.log('working');
    }, 500);
  }

  componentWillUnmount() {
    window.clearInterval(this.intv);
  } 

  render() {
    return (
      <div style={{ padding: '5px' }}>
        <Progress type="circle" percent={this.state.percent} />
        <Button.Group style={{ marginTop: '10px', display: 'block' }}>
          <Button onClick={this.decline} icon={<MinusOutlined />} />
          <Button onClick={this.increase} icon={<PlusOutlined />} />
        </Button.Group>
      </div>
    );
  }
}

export default ProgressDemo;
