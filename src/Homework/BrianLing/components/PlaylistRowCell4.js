import React from 'react';

const PlaylistRowCell4 = ({songItem}) => (
    // <div className="c6287512c50a737d01bd9db32b301fab-scss" role="gridcell" aria-colindex="4" tabIndex="-1"><span
    //     className="f3fc214b257ae2f1d43d4c594a94497f-scss" as="span">6 小時前</span></div>
    <div className="desc">
        <div className="album">{songItem.track.album.name}</div>
    </div>
);

export default PlaylistRowCell4;