import React from 'react';

import Player from 'griffith';

const sources = {
  hd: {
    id: 'item.cardId',
    play_url:
      'http://imagecdn.xunlianying.vip/lux/54b00390-21fc-11ed-8596-b7284399ee81.mp4',
  },
};
export const PlayerSimple = () => <Player sources={sources} id="item.cardId" />;
