import type { FunctionComponent } from "react";

import { useAtom } from "jotai";

import { userAtom } from "~/auth/server2";

export const LoginedInfo: FunctionComponent = () => {
  // const [data] = useAtom(userInfo);
  // const [data1] = useAtom(fetchUserInfo);
  const [data2] = useAtom(userAtom);

  // useAtomValue(fetchUserInfo); // The value will be pre-loaded
  return (
    <>
      {/*logged data1*/}
      {/*{JSON.stringify(data)}*/}
      logged data2
      {JSON.stringify(data2)}
    </>
  );
};
