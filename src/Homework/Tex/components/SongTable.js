import { useState } from 'react';

function millisToMinutesAndSeconds(millis) {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

const SongTable = ({ songData }) => {
  const [select, setSelect] = useState('');
  return (
    <div className="song-table">
      {songData.map((songItem, index) => {
        const id = songItem.track.id;
        const isSelect = id === select;
        const artist = songItem.track.album.artists[0];
        const album = songItem.track.album;
        return (
          <div
            className={`song-table-list ${isSelect ? 'select' : ''}`}
            key={id}
            onClick={() => {
              setSelect(id);
            }}
          >
            <div className="song-table-list-index">{index + 1}</div>
            <div className="song-table-list-title">
              <img src={album.images[1].url} alt="album-cover" />
              <div className="song-desc">
                <div className="song-desc-name">{songItem.track.name}</div>
                <div className="song-desc-artist">
                  <a href={artist.external_urls.spotify}>{artist.name}</a>
                </div>
              </div>
            </div>
            <div className="song-table-list-album">
              <a href={album.external_urls.spotify}>{album.name}</a>
            </div>
            <div className="song-table-list-duration">
              {millisToMinutesAndSeconds(songItem.track.duration_ms)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SongTable;
