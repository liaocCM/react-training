import React, { Component, useEffect, useState } from "react";
import { Spin } from "antd";

import "./index.css";

const Playlist = () => {
  const [song, setSong] = useState();

  useEffect(() => {
    fetch("https://api.jsonbin.io/b/6016d67eabdf9c55679577bd", {
      headers: {
        "secret-key":
          "$2b$10$2sZ69JBO5Bgct5LNaQrqCOZHWF5LCc47wFwAoiajQPqkUgx9K.OHi",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        setSong(json.albums);
      });
  }, []);

  return (
    <div className="wrapper">
      {!song ? (
        <div style={{ color: "white" }}>
          LOADING
          <Spin />
        </div>
      ) : (
        song.items.map((e, index) => (
          <div className="list">
            <div className="index">{index + 1}</div>
            <img src={e.images[1].url}></img>
            <div className="textArea">
              <div>
                <span className="song">{e.name}</span>
              </div>
              <div>
                <span className="artist">{e.artists[0].name}</span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Playlist;
