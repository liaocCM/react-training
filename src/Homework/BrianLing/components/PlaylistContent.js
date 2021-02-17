import React from 'react';


import '../index.css';
import PlaylistRow from "./PlaylistRow";

const PlaylistContent = () => (
    <div className="contentSpacing">
        <div role="grid" aria-rowcount="51" aria-colcount="5" aria-label="週末清聽"
             className="_7effa9d9b3900e9698aa6e0423a1e841-scss _98a17d59ea3df3c60b9699a6afe43816-scss" tabIndex="0"
             data-testid="playlist-tracklist">
            <div className="_2dc8cce76d72af90f5e00e781db42541-scss">
                <div className="_3a60fe1505c09248ad7c72d04a0cf07f-scss bddcb131e9b40fa874148a30368d83f8-scss" role="row"
                     aria-rowindex="1">
                    <div className="_7c993111016a33a158645119f8a6fb12-scss" role="columnheader" aria-colindex="1"
                         aria-sort="none" tabIndex="-1">#
                    </div>
                    <div className="_5845794624a406a62eb5b71d3d1c4d63-scss" role="columnheader" aria-colindex="2"
                         aria-sort="none" tabIndex="-1">
                        <div className="e6a8097cf1730653c998b6c217f22180-scss"><span
                            className="standalone-ellipsis-one-line _61f284de1c56917f93c55a3ae121ba1c-scss"
                            as="span">標題</span></div>
                    </div>
                    <div className="c6287512c50a737d01bd9db32b301fab-scss" role="columnheader" aria-colindex="3"
                         aria-sort="none" tabIndex="-1">
                        <div className="e6a8097cf1730653c998b6c217f22180-scss"><span
                            className="standalone-ellipsis-one-line _61f284de1c56917f93c55a3ae121ba1c-scss"
                            as="span">專輯</span></div>
                    </div>
                    <div className="c6287512c50a737d01bd9db32b301fab-scss" role="columnheader" aria-colindex="4"
                         aria-sort="none" tabIndex="-1">
                        <div className="e6a8097cf1730653c998b6c217f22180-scss"><span
                            className="standalone-ellipsis-one-line _61f284de1c56917f93c55a3ae121ba1c-scss"
                            as="span">已新增日期</span></div>
                    </div>
                    <div className="b9f411c6b990949776c8edf3daeb26ad-scss" role="columnheader" aria-colindex="5"
                         aria-sort="none" tabIndex="-1">
                        <div aria-label="長度"
                             className="e6a8097cf1730653c998b6c217f22180-scss d4e605b704072b48bba794842cb8f78a-scss"
                             title="長度">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path
                                    d="M7.999 3H6.999V7V8H7.999H9.999V7H7.999V3ZM7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0ZM7.5 14C3.916 14 1 11.084 1 7.5C1 3.916 3.916 1 7.5 1C11.084 1 14 3.916 14 7.5C14 11.084 11.084 14 7.5 14Z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="c27f49a483c85a5b88b3f37fb918e497-scss" style={{height: 2800}}>
                <div data-testid="top-sentinel" className="dd70b10e35107a612cc6c1a443a483d2-scss"
                     style={{height: 1008}}>
                    <div className="bddcb131e9b40fa874148a30368d83f8-scss" data-testid="tracklist-row-placeholder"
                         style={{height: 100% - 1008}}>
                        <div
                            className="_918ff6c00e0a5647144abd99dcbd846d-scss _7c993111016a33a158645119f8a6fb12-scss a8dfb66bacdc192d63e516f45647f636-scss"></div>
                        <div
                            className="_918ff6c00e0a5647144abd99dcbd846d-scss _5845794624a406a62eb5b71d3d1c4d63-scss _5fdf8a340acfcd5f4ff7a8b7cb02568f-scss"></div>
                        <div
                            className="_918ff6c00e0a5647144abd99dcbd846d-scss c6287512c50a737d01bd9db32b301fab-scss b4463666733c582e1c439e58006adeed-scss"></div>
                        <div
                            className="_918ff6c00e0a5647144abd99dcbd846d-scss c6287512c50a737d01bd9db32b301fab-scss b4463666733c582e1c439e58006adeed-scss"></div>
                        <div
                            className="_918ff6c00e0a5647144abd99dcbd846d-scss c6287512c50a737d01bd9db32b301fab-scss b4463666733c582e1c439e58006adeed-scss"></div>
                        <div
                            className="_918ff6c00e0a5647144abd99dcbd846d-scss c6287512c50a737d01bd9db32b301fab-scss b4463666733c582e1c439e58006adeed-scss"></div>
                        <div
                            className="_918ff6c00e0a5647144abd99dcbd846d-scss b9f411c6b990949776c8edf3daeb26ad-scss _833421671c5a3968845edf034d46968e-scss"></div>
                    </div>
                    <div style={{height: 1008}}></div>
                </div>
                <PlaylistRow/>
                <div data-testid="bottom-sentinel" class="_32062b37790303f01122c302fafcfa11-scss" style={{height: 1008}}>
                    <div style={{height: 1008}}></div>
                    <div class="bddcb131e9b40fa874148a30368d83f8-scss" data-testid="tracklist-row-placeholder"
                         style={{height: 100% - 1008}}>
                        <div class="_918ff6c00e0a5647144abd99dcbd846d-scss _7c993111016a33a158645119f8a6fb12-scss a8dfb66bacdc192d63e516f45647f636-scss"></div>
                        <div class="_918ff6c00e0a5647144abd99dcbd846d-scss _5845794624a406a62eb5b71d3d1c4d63-scss _5fdf8a340acfcd5f4ff7a8b7cb02568f-scss"></div>
                        <div class="_918ff6c00e0a5647144abd99dcbd846d-scss c6287512c50a737d01bd9db32b301fab-scss b4463666733c582e1c439e58006adeed-scss"></div>
                        <div class="_918ff6c00e0a5647144abd99dcbd846d-scss c6287512c50a737d01bd9db32b301fab-scss b4463666733c582e1c439e58006adeed-scss"></div>
                        <div class="_918ff6c00e0a5647144abd99dcbd846d-scss c6287512c50a737d01bd9db32b301fab-scss b4463666733c582e1c439e58006adeed-scss"></div>
                        <div class="_918ff6c00e0a5647144abd99dcbd846d-scss c6287512c50a737d01bd9db32b301fab-scss b4463666733c582e1c439e58006adeed-scss"></div>
                        <div class="_918ff6c00e0a5647144abd99dcbd846d-scss b9f411c6b990949776c8edf3daeb26ad-scss _833421671c5a3968845edf034d46968e-scss"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default PlaylistContent;