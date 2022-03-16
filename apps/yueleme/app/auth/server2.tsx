import type { FunctionComponent, ReactNode } from "react";
import { Suspense } from "react";

import { Text } from "@mantine/core";
import { atom } from "jotai";
import { atomsWithQuery } from "jotai-tanstack-query";

import type { ACDDD } from "~/rootInfoAtom";
import { rootInfoAtom } from "~/rootInfoAtom";
import { yuelemeApi } from "~/server/api/api-yueleme";

export const fetchUserInfo = atom(null);

const [userAtom] = atomsWithQuery((get) => ({
  queryKey: ["users", get(rootInfoAtom)],
  // enabled: get(rootInfoAtom)?._T !== "",
  staleTime: 60 * 1000,
  cacheTime: 60 * 1000,
  queryFn: async ({ queryKey: [_, ACDDD1] }) => {
    const r2 = ACDDD1 as ACDDD;
    if (r2._T === "") {
      return null;
    }
    try {
      return await yuelemeApi.getApiYuelemeV1TapirHorseLoginUser({
        authorization: r2._T,
      });
    } catch (e) {
      console.log("e", e);
      return null;
    }
  },
}));
export { userAtom };

export const WithUserStatus: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <>{children}</>
    </Suspense>
  );
};
