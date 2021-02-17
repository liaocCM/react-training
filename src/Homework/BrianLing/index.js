import React, {useEffect, useState} from 'react';

import {Spinner} from './components/Loading';
import './style/index.css';
import PlaylistRowCell1 from "./components/PlaylistRowCell1";
import PlaylistRowCell2 from "./components/PlaylistRowCell2";
import PlaylistRowCell3 from "./components/PlaylistRowCell3";
import PlaylistRowCell4 from "./components/PlaylistRowCell4";
import PlaylistRowCell5 from "./components/PlaylistRowCell5";

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
                <Spinner/>
            </div>
        );

    return (
        <div className="wrapper">
            {song.map((songItem, index) => (
                <div className="list">
                    <PlaylistRowCell1 index={index + 1}/>
                    <div className="songWrapper">
                        <PlaylistRowCell2 songItem={songItem}/>
                        <PlaylistRowCell3 songItem={songItem}/>
                        <PlaylistRowCell4 songItem={songItem}/>
                        <PlaylistRowCell5 songItem={songItem}/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Playlist;
