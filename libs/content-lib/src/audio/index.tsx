import type { FunctionComponent } from 'react';
import React from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';

export const AudioPlayer: FunctionComponent<{ url?: string }> = ({ url }) => {
  return (
    <ReactJkMusicPlayer
      audioLists={[
        {
          name: 'title',
          musicSrc: url ?? 'http://www.xihakan.com/up/xihakan.mp3',
        },
      ]}
    />
  );
};
