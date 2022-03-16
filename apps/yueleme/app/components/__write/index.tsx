import type { ReactElement } from "react";

import { Center } from "@mantine/core";
import { ClientOnly } from "remix-utils";

export default function WritePage(): ReactElement {
  return (
    <>
      <Center style={{ width: 400, height: 200 }}>
        <div>All elements inside Center are centered</div>
      </Center>
      <ClientOnly fallback={<></>}>{() => <>ddd dddddddddd</>}</ClientOnly>
    </>
  );
}
