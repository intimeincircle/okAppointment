import type { FC } from 'react';
import React from 'react';

import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core';
import { listener, listenerCtx } from '@milkdown/plugin-listener';
import { commonmark } from '@milkdown/preset-commonmark';
import { ReactEditor, useEditor } from '@milkdown/react';
import { nord } from '@milkdown/theme-nord';

interface Props {
  value?: string;
  onChange?: (v: string) => void;
}
export const MilkdownEditor: FC<Props> = (props) => {
  const editor = useEditor(
    (root) =>
      Editor.make()
        .config((ctx) => {
          ctx.set(rootCtx, root);
          // ctx.set(rootCtx, document.querySelector('#editor'));
          ctx.set(defaultValueCtx, props.value ?? 'input');
          ctx
            .get(listenerCtx)
            .markdownUpdated((ctx, markdown, prevMarkdown) => {
              console.log('m', markdown);
              props?.onChange?.(markdown);
            });
        })
        .use(nord)
        .use(listener)
        .use(commonmark)

    // .use(emoji)
  );

  return (
    <>
      {/*<div id="editor" />*/}
      {/* @ts-ignore*/}
      <ReactEditor editor={editor} />
    </>
  );
};
