import React from 'react';
import '../index.css';

import PlaylistRowCell1 from "./PlaylistRowCell1";
import PlaylistRowCell2 from "./PlaylistRowCell2";
import PlaylistRowCell3 from "./PlaylistRowCell3";
import PlaylistRowCell4 from "./PlaylistRowCell4";
import PlaylistRowCell5 from "./PlaylistRowCell5";

const PlaylistRow = () => (
    <div role="grid" aria-rowcount="51" aria-colcount="4" aria-label="週末清聽"
         className="_7effa9d9b3900e9698aa6e0423a1e841-scss _98a17d59ea3df3c60b9699a6afe43816-scss" tabIndex="0"
         data-testid="playlist-tracklist">
        <div data-testid="tracklist-row"
             className="e8ea6a219247d88aa936a012f6227b0d-scss bddcb131e9b40fa874148a30368d83f8-scss" draggable="true">
            <PlaylistRowCell1/><PlaylistRowCell2/><PlaylistRowCell3/><PlaylistRowCell4/><PlaylistRowCell5/>
        </div>
    </div>
);

export default PlaylistRow;