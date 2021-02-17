import React, { useEffect, useState } from 'react';

import { Spinner } from './Loading';
import styles from './style/index.module.css';

function toMin(timestamp){
  timestamp = timestamp / 1000;
  let hours = Math.floor(timestamp / 60 / 60);
  let minutes = Math.floor(timestamp / 60) - (hours * 60);
  let seconds = Math.round(timestamp % 60) ;
  let formatted = minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);
  return formatted;
}

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

  return (
    <div className={styles.wrapper}>
      {!song ? (
        <Spinner />
      ) : (
        <table className={styles.tb}>
          <tbody>
            <tr>
              <th>#</th><th colSpan='2'>標題</th><th>專輯</th><th>時間</th>
            </tr>
            {
              song.map((e, index) => (
                <tr key={index}>
                  {/* <div className={styles.list}>{e.track.name}</div> */}
                  <td>{index}</td><td><img src={e.track.album.images[0].url}></img></td><td>{e.track.name}</td><td>{e.track.album.name}</td><td>{toMin(e.track.duration_ms)}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Playlist;
