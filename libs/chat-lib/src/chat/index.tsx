import type { FunctionComponent } from 'react';
import React from 'react';

import { Avatar } from '@chatscope/chat-ui-kit-react';

export const ChatComponent: FunctionComponent = () => {
  return (
    <div>
      <Avatar
        src="https://chatscope.io/storybook/react/static/media/zoe.e31a4ff8.svg"
        name="Zoe"
      />
    </div>
  );
};
