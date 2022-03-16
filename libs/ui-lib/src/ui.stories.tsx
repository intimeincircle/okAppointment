import type { FunctionComponent } from 'react';
import React from 'react';

import { Container, MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';

import { NotFoundImage } from './components/404';
import { CalendarComp } from './components/Calendar';
import { UiComponents } from './components/Collapse';
import { CommentHtml } from './components/comment';
import { DemoComp } from './components/confirm';
import { CropComp } from './components/Crop';
import { DemoDialog } from './components/dialog';
import { HeaderMegaMenu } from './components/header';
import { KunImage } from './components/LazyImage';
import { KunLoadingOverlay } from './components/LoadingOverlay';
import { AuthenticationForm } from './components/login';
import { NavbarSimpleColored } from './components/Sidebar';

export const OverlayVisible: FunctionComponent = () => (
  <KunLoadingOverlay visible={false}>ABBC</KunLoadingOverlay>
);

export const OverlayIVisible: FunctionComponent = () => (
  <KunLoadingOverlay visible={true}>ABBC</KunLoadingOverlay>
);

export const NotFoundImageStories: FunctionComponent = () => (
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <NotFoundImage
      onPrimary={() => {
        window.location.href = 'https://baidu.com';
      }}
    />
  </MantineProvider>
);

export const AuthenticationFormDemo: FunctionComponent = () => (
  <Container size={560}>
    <AuthenticationForm />
  </Container>
);

export const CropComponent: FunctionComponent = () => {
  return <CropComp />;
};

export const LazyImageDemo: FunctionComponent = () => {
  return (
    <KunImage
      image={{
        src: 'https://lf3-static.bytednsdoc.com/obj/iconpark/main_banner_2.png',
      }}
    />
  );
};

export const CalendarDemo: FunctionComponent = () => {
  return <CalendarComp />;
};

export const NavbarSimpleColoredDemo: FunctionComponent = () => {
  return <NavbarSimpleColored />;
};

export const HeaderV: FunctionComponent = () => <HeaderMegaMenu />;

export const ConfirmComp: FunctionComponent = () => (
  <MantineProvider>
    <ModalsProvider>
      <DemoComp></DemoComp>
    </ModalsProvider>
  </MantineProvider>
);

export const UiComponentComp: FunctionComponent = () => <UiComponents />;

export const DemoDialogDemo: FunctionComponent = () => <DemoDialog />;

export const CommentHtmlDemo: FunctionComponent = () => (
  <CommentHtml
    postedAt="10 minutes ago"
    body={
      '<p>I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.</p>'
    }
    author={{
      name: 'Jacob Warnhalter',
      image:
        'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    }}
  />
);
