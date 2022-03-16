/* eslint-disable */
import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core';
import { clipboard } from '@milkdown/plugin-clipboard';
import { history } from '@milkdown/plugin-history';
import { listener, listenerCtx } from '@milkdown/plugin-listener';
import { slash } from '@milkdown/plugin-slash';
import { upload } from '@milkdown/plugin-upload';
import { commonmark } from '@milkdown/preset-commonmark';
import { ReactEditor, useEditor } from '@milkdown/react';
import { tokyo } from '@milkdown/theme-tokyo';
import { insert } from '@milkdown/utils';
import s from '../pages/page/page.module.css';
import { Button, Input } from '@chakra-ui/react';
import { nord } from '@milkdown/theme-nord';
import { useToolbar } from './Toolbar';
import { useRouter } from 'next/router';

const STORAGE_AUTOSAVE_KEY = 'AmplifyNotes__isAutoSaveEnabled';

interface PropsEditor {
  content: string;
  title: string;
}
export const UpdatePage: FunctionComponent<{
  value: PropsEditor;
  onChange?: (item: PropsEditor) => void;
}> = ({ value, onChange }) => {
  const [input, setInput] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [page, setPage] = useState<any>();
  const [content, setContent] = useState<any>('');
  const [isAutoSaveEnabled, setIsAutoSaveEnabled] = useState(() => true);
  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [, toolbar] = useToolbar();

  const localVarPath = '/api/v1/tapir/horse/series/card/create';

  const { editor, getInstance } = useEditor((root) =>
    Editor.make()
      .config((ctx) => {
        ctx.set(defaultValueCtx, content);
        ctx.set(rootCtx, root);
        ctx.get(listenerCtx).markdownUpdated((ctx, markdown, prevMarkdown) => {
          // setContent(markdown);
          onChange?.({
            content: markdown,
            title: input,
          });
        });
      })
      .use(listener)
      .use(clipboard)
      .use(history)
      .use(nord)
      // .use(diagram)
      .use(slash)
      .use(upload)
      .use(commonmark)
  );

  const save: () => Promise<void> = useCallback(async () => {
    setIsLoading(false);
    setIsSaved(true);
  }, [page, content]);

  const handleOnBlur = () => {
    if (isAutoSaveEnabled) {
      save();
    }
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setContent('sssssss');
      setIsLoading(false);
    })();
  }, [page]);

  useEffect(() => {
    try {
      getInstance()?.action?.(insert(content));
    } catch (error) {
      // swallow getInstance() cannot read properties `matchesNode` of undefined
    }
  }, [isLoading]);

  useEffect(() => {
    // effect to auto-save document after 3 second delay (i.e. user stopped typing)
    if (!isAutoSaveEnabled) return;
    const delayDebounceFn = setTimeout(() => {
      save();
    }, 3000);

    return () => clearTimeout(delayDebounceFn);
  }, [content, isAutoSaveEnabled, save]);

  useEffect(() => {
    // effect to remove/hide the "Saved!" message after 3 seconds
    if (!isSaved) return;

    const displayTimerFn = setTimeout(() => {
      setIsSaved(false);
    }, 3000);

    return () => displayTimerFn && clearTimeout(displayTimerFn);
  }, [isSaved]);

  const SaveButton = useCallback(
    () => <button onClick={save}>Save</button>,
    [save]
  );
  const AutoSaveToggleButton = useCallback(
    () => (
      <button
        onClick={() => {
          setIsAutoSaveEnabled(!isAutoSaveEnabled);
          localStorage.setItem(STORAGE_AUTOSAVE_KEY, `${isAutoSaveEnabled}`);
        }}
      >
        {isAutoSaveEnabled ? 'Disable' : 'Enable'} Auto-Save
      </button>
    ),
    [isAutoSaveEnabled]
  );

  useEffect(() => {
    // we _only_ want this to run on mount. If we provide the toolbar as a dependency it will run infinitely
    toolbar.add(SaveButton);
    toolbar.add(AutoSaveToggleButton);
    return () => {
      toolbar.remove(SaveButton);
      toolbar.remove(AutoSaveToggleButton);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const a = useRouter();
  console.log('a.', a.query);
  const inputAuth: string = (a.query?.auth ?? '') as unknown as string;
  // if (isLoading) return <p>loading...</p>
  console.log('inputAuth', inputAuth);

  return (
    <div>
      <Input value={input} onChange={(e) => setInput(e.target.value)} />
      <section onBlur={handleOnBlur}>
        <div className={isLoading ? s.isLoading : ''}></div>
        <ReactEditor editor={editor} />
      </section>
    </div>
  );
};
