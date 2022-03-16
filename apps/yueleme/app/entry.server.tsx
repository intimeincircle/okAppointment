import { PassThrough } from "node:stream";
import { renderToPipeableStream, renderToString } from "react-dom/server";
import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";

import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import { createStylesServer, injectStyles } from "@mantine/remix";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// @ts-ignore
import createEmotionCache from "~/createEmotionCache";
import { ServerStyleContext } from "./context";

const server = createStylesServer();

const ABORT_DELAY = 5000;

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
): Promise<unknown> {
  // We don't want to do streaming for bots
  const callbackName = "onShellReady";

  if (process.env.NODE_ENV !== "production") {
    responseHeaders.set("Cache-Control", "no-store");
  }

  const queryClient = new QueryClient();

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  const html = renderToString(
    <ServerStyleContext.Provider value={null}>
      <QueryClientProvider client={queryClient}>
        <CacheProvider value={cache}>
          <RemixServer context={remixContext} url={request.url} />
        </CacheProvider>
      </QueryClientProvider>
    </ServerStyleContext.Provider>,
  );

  const html1 = `<!DOCTYPE html>${injectStyles(html, server)}`;
  const chunks = extractCriticalToChunks(html1);

  // return new Promise((resolve, reject) => {
  //   const didError = false;

  // let markup = renderToString(<RemixServer context={remixContext} url={request.url} />);
  // responseHeaders.set('Content-Type', 'text/html');
  //
  // return new Response(`<!DOCTYPE html>${injectStyles(markup, server)}`, {
  //   status: responseStatusCode,
  //   headers: responseHeaders,
  // });
  const markup = renderToString(
    <ServerStyleContext.Provider value={chunks.styles}>
      <QueryClientProvider client={queryClient}>
        <CacheProvider value={cache}>
          <RemixServer context={remixContext} url={request.url} />
        </CacheProvider>
      </QueryClientProvider>
    </ServerStyleContext.Provider>,
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response(`<!DOCTYPE html>${injectStyles(markup, server)}`, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
  // {
  //   [callbackName]() {
  //     const body = new PassThrough();
  //     responseHeaders.set("Content-Type", "text/html");
  //     resolve(
  //       // @ts-expect-error TS complains that the body is not a ReadableStream, but it is, it's just the nodejs implementation, so the types are different (but compatible).
  //       new Response(body, {
  //         status: didError ? 500 : responseStatusCode,
  //         headers: responseHeaders,
  //       }),
  //     );
  //     pipe(body);
  //   },
  //   onShellError(err) {
  //     reject(err);
  //   },
  //   onError(error) {
  //     didError = true;
  //     console.error(error);
  //   },
  // },
  // );
  // setTimeout(abort, ABORT_DELAY);
  // });
}
