import type { FunctionComponent } from 'react';
import React from 'react';

import { EditPage } from '../components/edit';
import { ToolbarProvider } from '../components/Toolbar';
import { MilkdownEditor } from './editor';

export const BXXXXXXXXXEditor: FunctionComponent = () => (
  <MilkdownEditor value="xxxxx" />
);

export const B: FunctionComponent = () => (
  <ToolbarProvider>
    <EditPage id="dd" />
  </ToolbarProvider>
);
