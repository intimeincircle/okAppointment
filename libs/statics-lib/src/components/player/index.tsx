import type { FunctionComponent } from 'react';
import React from 'react';

import Player from 'griffith';

export const SimplePlayer: FunctionComponent<{
  url: string;
}> = ({ url }) => {
  const sources = {
    hd: {
      id: 'item.cardId',
      play_url: url,
    },
  };
  return <Player sources={sources} id="item.cardId" />;
};
