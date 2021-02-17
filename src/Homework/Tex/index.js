import React, { useEffect, useState } from 'react';

import { Spinner } from './components/Loading';
import './style/index.css';

const Playlist = () => {
  const [song, setSong] = useState();

  useEffect(() => {
    fetch('https://api.jsonbin.io/b/601a661a5415b40ac2227233', {
      headers: {
        'secret-key':
          '$2b$10$2sZ69JBO5Bgct5LNaQrqCOZHWF5LCc47wFwAoiajQPqkUgx9K.OHi',
      },
    })
      .then((data) => data.json())
      .then((json) => setSong(json.items));
  }, []);

  if (!song)
    return (
      <div className="wrapper">
        <Spinner />
      </div>
    );

  return (
    <div className="wrapper">
      {song.map((songItem, index) => (
        <div className="list">
          <div className="index">{index + 1}</div>
          <div className="songWrapper">
            <img src={songItem.track.album.images[1].url}></img>
            <div className="desc">
              <div className="song">{songItem.track.name}</div>
              <div className="artist">
                {songItem.track.album.artists[0].name}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Playlist;
