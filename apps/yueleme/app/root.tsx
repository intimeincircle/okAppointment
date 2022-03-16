import type { ReactElement } from "react";
import { useContext, useEffect } from "react";
import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from "@remix-run/react";

import { ChakraProvider } from "@chakra-ui/react";
import { withEmotionCache } from "@emotion/react";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { StylesPlaceholder } from "@mantine/remix";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { useAtomValue } from "jotai";
import { createStore, StateMachineProvider } from "little-state-machine";

import { ClientStyleContext, ServerStyleContext } from "~/context";
import { rootInfoAtom } from "~/rootInfoAtom";
import { getAuth } from "~/utils/getAuth";
import { CONST_TZ } from "~/utils/tz";
import { CONST_CONFIG } from "../src/config";
import globalStyles from "./global.css";
import tailwindStyles from "./tailwind.css";
import MusicStyle from "react-jinke-music-player/assets/index.css";
import iconParkStyles from "@icon-park/react/styles/index.css";


// * as
dayjs.extend(timezone);
dayjs.extend(utc);
// @ts-ignore
dayjs.tz.setDefault(CONST_TZ);

createStore({
  book: {
    selectedTime: undefined,
    selectedServiceId: undefined,
    selectedDate: undefined,
  },
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: iconParkStyles },
  { rel: "stylesheet", href: globalStyles },
  { rel: "stylesheet", href: MusicStyle },
  { rel: "stylesheet", href: tailwindStyles },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: CONST_CONFIG.title,
  viewport: "width=device-width,initial-scale=1",
});

interface DocumentProps {
  children: React.ReactNode;
}

export const loader: LoaderFunction = async ({ request }) => {
  const t = await getAuth({ request });
  return {
    _T: t,
  };
};

const App = withEmotionCache(({ children }: DocumentProps, emotionCache) => {
  const serverStyleData = useContext(ServerStyleContext);
  const clientStyleData = useContext(ClientStyleContext);

  const ad1 = useLoaderData<{
    _T: string;
  }>();
  useAtomValue(rootInfoAtom);
  rootInfoAtom.onMount = (setValue) => {
    (async () => {
      console.log("ad1", ad1);
      setValue(ad1);
    })();
  };
  // Only executed on client
  useEffect(() => {
    // re-link sheet container
    // eslint-disable-next-line no-param-reassign
    emotionCache.sheet.container = document.head;
    // re-inject tags
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      // eslint-disable-next-line
      (emotionCache.sheet as any)._insertTag(tag);
    });
    // reset cache to reapply global styles
    clientStyleData?.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <html lang="en">
      <head>
        <StylesPlaceholder />
        <Meta />
        <Links />
        {serverStyleData?.map(({ key, ids, css }) => (
          <style
            key={key}
            data-emotion={`${key} ${ids.join(" ")}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        ))}
      </head>

      <script
        dangerouslySetInnerHTML={{
          __html: `window.ENV = ${JSON.stringify(ad1)}`,
        }}
      />

      {/*h-full*/}
      <body className="flex flex-col ">
        <main className="flex-grow flex flex-col items-center overflow-x-hidden md:overflow-x-auto h-full bg-gray-50">
          <MantineProvider withGlobalStyles withNormalizeCSS>
            <NotificationsProvider>
              <ChakraProvider>
                <StateMachineProvider>
                  <Outlet />
                </StateMachineProvider>
              </ChakraProvider>
            </NotificationsProvider>
          </MantineProvider>
        </main>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
});
export default App;

// export default function App() {
//   return (
//     <html lang="no">
//       <head>
//         <Meta />
//         <Links />
//       </head>
//       <body className="flex flex-col h-full">
//         <Header />
//         <main className="flex-grow flex flex-col items-center gap-12 md:gap-36 py-[50px] overflow-x-hidden md:overflow-x-auto">
//           <Outlet />
//         </main>
//         <Footer />
//
//         <ScrollRestoration />
//         <Scripts />
//         <LiveReload />
//       </body>
//     </html>
//   );
// }

export function CatchBoundary(): ReactElement {
  // Her fanges alle errors
  // Den mest vanlige som kommer til å skje er 404
  // Vi trenger å håndtere to cases:
  //
  // 1. 404 - Når brukeren har blitt navigert til noe som ikke eksisterer
  // 2. 500 - Når noe går feil på server siden
  const caught = useCatch();

  console.log(caught);
  return (
    <html>
      <head>
        <title>TODO Error side</title>
        <Meta />
        <Links />
      </head>
      <body>
        {JSON.stringify(caught)}
        {/*<Header />*/}
        <main className="flex flex-col h-screen">
          {caught.status === 404 && <>404</>}

          {/* Alt annet, hovedsaklig 500 */}
          {caught.status !== 404 && <>404</>}
        </main>
        {/*<Footer />*/}
        <Scripts />
      </body>
    </html>
  );
}

// export function CatchBoundary() {
//   const caught = useCatch();
//
//   console.log("caught", caught);
//
//   return (
//     <div>
//       <h1>Caught</h1>
//       <p>Status: {caught.status}</p>
//       <pre>
//         <code>{JSON.stringify(caught.data, null, 2)}</code>
//       </pre>
//     </div>
//   );
// }
