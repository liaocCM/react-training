import React, { useEffect, useState } from 'react';

import { Loading, SongTable } from './components';
import './style/index.scss';

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
      <div className="container">
        <Loading />
      </div>
    );

  return (
    <React.Fragment>
      <div className="container">
        <div className="background-mask" />
        <SongTable songData={song} />
      </div>
    </React.Fragment>
  );
};

export default Playlist;
