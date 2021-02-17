import React from 'react';

const PlaylistRowCell2 = ({songItem}) => (

    // <div className="_5845794624a406a62eb5b71d3d1c4d63-scss" role="gridcell" aria-colindex="2" tabIndex="-1">
    //     <img aria-hidden="false" draggable="false" loading="eager"
    //     src="https://i.scdn.co/image/ab67616d000048512ea4b848296468f759304331" alt=""
    //     className="_64acb0e26fe0d9dff68a0e9725b2a920-scss fc0bebbbc5e1404f464fb4d8c17001dc-scss" width="40"
    //     height="40"/>
    //     <div className="_8ea0b892e971e6b90a252247c160b4f4-scss">
    //         <div
    //             className="da0bc4060bb1bdb4abb8e402916af32e-scss standalone-ellipsis-one-line _8a9c5cc886805907de5073b8ebc3acd8-scss"
    //             dir="auto" as="div"><span><span className="">不是因為天氣晴朗才愛你</span></span></div>
    //         <span
    //             className="_966e29b71d2654743538480947a479b3-scss standalone-ellipsis-one-line f3fc214b257ae2f1d43d4c594a94497f-scss"
    //             as="span"><a draggable="true" dir="auto" href="/artist/0Awqm7GXGiBp8fJNGvywra"
    //                          tabIndex="-1"><span><span className="">理想混蛋</span></span></a></span></div>
    // </div>

    <img src={songItem.track.album.images[1].url}></img>
);

export default PlaylistRowCell2;