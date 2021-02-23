import { useState } from 'react';

const SongTable = ({ songData }) => {
  const [select, setSelect] = useState('');
  return (
    <div className="song-table">
      {songData.map((songItem, index) => {
        const id = songItem.track.id;
        const isSelect = id === select;
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
              <img
                src={songItem.track.album.images[1].url}
                alt="album-cover"
              ></img>
              <div className="song-desc">
                <div className="song-desc-name">{songItem.track.name}</div>
                <div className="song-desc-artist">
                  {songItem.track.album.artists[0].name}
                </div>
              </div>
            </div>
            <div className="song-table-list-album">
              {songItem.track.album.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SongTable;
