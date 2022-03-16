import type { FunctionComponent } from "react";
import type { ActionFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import { redirect } from "@remix-run/server-runtime";

import { withZod } from "@remix-validated-form/with-zod";
import dayjs from "dayjs";
import { validationError } from "remix-validated-form";
import { z } from "zod";

import { lqAuthCookie } from "~/hooks/cookie.server";
import { yuelemeApi } from "~/server/api/api-yueleme";
import { checkIfSuccess } from "~/utils/checkIfSuccess";

export const validator = withZod(
  z.object({
    username: z.string(),
    password: z.string(),
  }),
);
export const action: ActionFunction = async ({ request }) => {
  const result = await validator.validate(await request.formData());
  if (result.error) return validationError(result.error);
  const data = result.data;
  const resultInfo = await yuelemeApi.postApiYuelemeV1TapirLoginByPassword({
    loginTribeUser: {
      userName: data?.username ?? "",
      password: data?.password ?? "",
    },
  });

  if (checkIfSuccess(resultInfo)) {
    const a1 = dayjs(new Date()).add(1, "year");

    console.log("resultINfo.msg", resultInfo.record);

    const r = await lqAuthCookie.serialize(
      {
        LQ_AUTH: resultInfo.msg?.replaceAll?.(".", "@") ?? "",
      },
      {
        path: "/",
        expires: a1.toDate(),
      },
    );

    return redirect(`/circle/task`, {
      headers: {
        "Set-Cookie": r,
      },
    });
  } else {
    // return validationError(
    //   {
    //     fieldErrors: {
    //       username: "This username is already taken",
    //     },
    //     // data: resultInfo,
    //     // 🚨 Important!
    //     // If you're using the `subaction` prop,
    //     // you need to specify a subaction here
    //     // or else the errors won't be displayed.
    //     // subaction: result.data.subaction,
    //     // You can also provide a `formId` instead of a `subaction`
    //     // if your form has an `id` prop
    //     // formId: result.formId,
    //   },
    //   result.data,
    // );

    // return resultInfo;
    return json(resultInfo);
  }
  // console.log("resultInfo", resultInfo);
  // return resultInfo;
};

const AV: FunctionComponent = () => <div>操作成功</div>;
export default AV;
