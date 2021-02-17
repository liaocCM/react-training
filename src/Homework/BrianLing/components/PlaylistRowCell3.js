import React from 'react';

const PlaylistRowCell3 = ({songItem}) => (
    // <div className="c6287512c50a737d01bd9db32b301fab-scss" role="gridcell" aria-colindex="3" tabIndex="-1"><a
    //     draggable="true" className="standalone-ellipsis-one-line" href="/album/6JuW0a9a9irzx0QkYC9eLI"
    //     tabIndex="-1"><span><span className="">不是因為天氣晴朗才愛你</span></span></a></div>

    <div className="desc">
        <div className="song">{songItem.track.name}</div>
        <div className="artist">{songItem.track.album.artists[0].name}</div>
    </div>
);

export default PlaylistRowCell3;