import React, { Component } from 'react';
import {
  Base,
  WithEvent,
  WithState,
  WithProps,
  LifeCycle,
  Progress,
} from '../BasicExample';

import { LifeCycle as LifeCycleHook } from '../HookExample';
import './index.css';

/**
 * Base => WithEvent => WithState => WithProps => LifeCycle => Progress
 */

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Base/> */}
        {/* <Base /> */}
        {/* <WithEvent /> */}
        {/* <WithState /> */}
        {/* {[1, 2, 3, 4, 5].map((e) => (
            <WithProps number={e} text="Test"/>
          ))} */}
        <LifeCycleHook />
        {/* <Progress /> */}
      </div>
    );
  }
}

export default App;
