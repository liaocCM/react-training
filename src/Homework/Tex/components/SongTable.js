import { useState } from 'react';
import SongTableHeader from './SongTableHeader';
import SongTableList from './SongTableList';

const SongTable = ({ songData }) => {
  const [selectID, setSelectID] = useState('');
  return (
    <div className="song-table">
      <SongTableHeader />
      {songData.map((songItem, index) => (
        <SongTableList
          index={index}
          songItem={songItem}
          selectID={selectID}
          setSelectID={setSelectID}
        />
      ))}
    </div>
  );
};

export default SongTable;
