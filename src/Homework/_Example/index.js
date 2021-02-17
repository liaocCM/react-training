import React, { useEffect, useState } from 'react';

import { Spinner } from './Loading';
import './index.css';

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

  // early return
  if (!song)
    return (
      <div className="wrapper">
        <Spinner />
      </div>
    );

  return (
    <div className="wrapper">
      {song.map((e, index) => (
        <div>{e.track.name}</div>
      ))}
    </div>
  );
};

export default Playlist;
