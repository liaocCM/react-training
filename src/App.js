import React, { Component } from "react";

import { Basic } from "./Example";
// import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Basic number={2}/>
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
    );
  }
}

export default App;
