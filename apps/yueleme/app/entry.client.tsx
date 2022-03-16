import React, { useState } from "react";
import { hydrateRoot } from "react-dom/client";
import { RemixBrowser } from "@remix-run/react";

import { CacheProvider } from "@emotion/react";
import { ClientProvider } from "@mantine/remix";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { ClientStyleContext } from "./context";
import createEmotionCache from "./createEmotionCache";

interface ClientCacheProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = useState(createEmotionCache());

  function reset() {
    setCache(createEmotionCache());
  }

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <QueryClientProvider client={queryClient}>
        <ClientProvider>
          <CacheProvider value={cache}>{children}</CacheProvider>
        </ClientProvider>
      </QueryClientProvider>
    </ClientStyleContext.Provider>
  );
}

hydrateRoot(
  document,
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>,
);
