import type { ReactElement } from "react";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import type { OptionDataYuelemeAppointment } from "@app/yueleme-api";
import { Box } from "@mantine/core";

import { yuelemeApi } from "~/server/api/api-yueleme";
import { handleAuthentication } from "~/utils/getAuth";

interface Params {
  id: number;
}
export const loader: LoaderFunction = handleAuthentication(async (a, t) => {
  const params = a.params as unknown as Params;

  const r444 = await yuelemeApi.getApiYuelemeV1YuelemeAppointmentItemId({
    id: params.id,
    authorization: t,
  });

  console.log("r4444", r444);
  return r444;
});

export default function NamePage(): ReactElement {
  const data = useLoaderData<OptionDataYuelemeAppointment>();

  return <Box>dddddd{JSON.stringify(data)}</Box>;
}
