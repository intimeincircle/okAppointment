/* eslint-disable */

import '../app.css';

import type { AppProps } from 'next/app';

import { ToolbarProvider } from '../components/Toolbar';
import s from './app.module.css';

import { ChakraProvider } from '@chakra-ui/react';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <ToolbarProvider>
        <>
          <main className={s.main}>
            <Component {...pageProps} />
          </main>
        </>
      </ToolbarProvider>
    </ChakraProvider>
  );
};

export default App;
