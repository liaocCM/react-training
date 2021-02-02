import React, { Component, useEffect, useState } from "react";

import { Basic } from "./Example";
import Playlist from "./Spotify/PlayList";
import "./App.css";

class App extends React.Component {
  render() {
    return <Playlist/>
    // return (
    //   <div className="App">
    //     <div className="App-header">
    //       <Basic number={2} />
    //     </div>
    //   </div>
    // );
  }
}

export default App;
