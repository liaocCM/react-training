import React, { Component, useEffect, useState } from "react";
import { Spin } from "antd";

import { Spinner } from "./Loading";

import "./index.css";
import styles from "./index.module.css";

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
    <div className={styles.wrapper}>
      {!song ? (
        <Spinner />
      ) : (
        song.items.map((e, index) => (
          <div className={styles.list}>
            <div className="index">{index + 1}</div>
            <img src={e.images[1].url}></img>
            <div className="textArea">
              <div className="song">{e.name}</div>
              <div className="artist">{e.artists[0].name}</div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Playlist;
