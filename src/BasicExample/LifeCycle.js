import { Component } from 'react';
import { Button } from 'antd';

import Progress from './Progress';

class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      open: true,
    };
    // console.log('!construct');
  }

  componentDidMount() {
    // console.log('!component did mount');
  }

  componentDidUpdate() {
    // console.log('*component did update*');
  }

  componentWillUnmount() {
    // console.log('!component will unmount');
  }

  render() {
    // console.log('*render*');
    return (
      <div style={{ height: 200, textAlign: 'center' }}>
        <Button
          type="primary"
          onClick={() => {
            this.setState({ open: !this.state.open });
          }}
        >
          Toggle Element
        </Button>
        {/* {this.state.open && <div>Open chrome devtools to react console</div>} */}
        {this.state.open && <Progress/>}
      </div>
    );
  }
}

export default LifeCycle;
