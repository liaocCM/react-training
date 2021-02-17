import React from 'react';


const PlaylistRowCell5 = ({songItem}) => {

    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    // const ms = {songItem.track.duration_ms};

    return(

        <div className="desc">
            <div className="album">{millisToMinutesAndSeconds(36000)}</div>
        </div>
    );
};

export default PlaylistRowCell5;