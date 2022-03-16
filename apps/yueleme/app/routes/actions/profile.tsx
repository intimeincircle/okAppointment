import type { FunctionComponent } from "react";
import type { ActionFunction } from "@remix-run/server-runtime";

import { yuelemeApi } from "~/server/api/api-yueleme";
import { getAuth } from "~/utils/getAuth";

export const action: ActionFunction = async ({ request, params }) => {
  try {
    const a = await getAuth({ request });
    const r = await yuelemeApi.getApiYuelemeV1TapirHorseLoginUser({
      authorization: a,
    });
    console.log("rrrrr", r);
    return r;
  } catch (e) {
    console.log("eeeeee", e);
  }
};

const AV: FunctionComponent = () => <></>;

export default AV;
