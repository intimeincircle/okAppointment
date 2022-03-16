import type { ReactElement } from "react";
import type { LoaderFunction } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";

import type { OptionDataKunUser } from "@app/yueleme-api";

import { yuelemeApi } from "~/server/api/api-yueleme";
import { handleAuthentication } from "~/utils/getAuth";
import { CONST_CONFIG } from "../../../src/config";

type A = { userId: string; name: string };

export const action = handleAuthentication(async ({ request, params }, t) => {
  const a = params as A;

  const resultInfo = await yuelemeApi.postApiYuelemeV1YuelemeAppointment({
    reqStartAppointment: {
      serviceCardId: 1,
      fromTime: 0,
    },
    authorization: t,
  });
  return resultInfo;
});

export const loader: LoaderFunction = handleAuthentication(async (a, t) => {
  const r444 = await yuelemeApi.getApiYuelemeV1TapirHorseLoginUser({
    authorization: t,
  });

  console.log("r4444", r444);
  return r444;
});

export const meta: MetaFunction = () => ({
  title: `profile-${CONST_CONFIG.title}`,
  description: CONST_CONFIG.slogan,
});

export default function Appointment(): ReactElement {
  const products = useLoaderData<OptionDataKunUser>();

  return (
    <>
      <Form method="post">
        <p>
          <button type="submit">new </button>
        </p>
      </Form>

      {JSON.stringify(products)}
    </>
  );
}
