import type { FunctionComponent } from "react";
import type { ActionFunction } from "@remix-run/server-runtime";
import { json, redirect } from "@remix-run/server-runtime";

import dayjs from "dayjs";
import { validationError } from "remix-validated-form";

import { lqAuthCookie } from "~/hooks/cookie.server";
import { yuelemeApi } from "~/server/api/api-yueleme";
import {
  checkPhoneValidator,
  startPhoneSmsValidator,
} from "~/shared/validators/check-phone-validators";
import { checkIfSuccess } from "~/utils/checkIfSuccess";

export const action: ActionFunction = async ({ request }) => {
  const result1 = await request.formData();

  const { _action } = Object.fromEntries(result1);

  if (_action === "check") {
    const result = await checkPhoneValidator.validate(result1);
    if (result.error) return validationError(result.error);
    const data = result.data;
    const resultInfo = await yuelemeApi.postApiYuelemeV1TapirLoginByPhoneCheck({
      loginPhoneConfirm: {
        phone: data.phone,
        code: data.code,
      },
    });


    if (checkIfSuccess(resultInfo)) {
      const a1 = dayjs(new Date()).add(1, "year");

      console.log("resultINfo.msg", resultInfo.record);

      const r = await lqAuthCookie.serialize(
        {
          LQ_AUTH: resultInfo?.record?.token?.replaceAll?.(".", "@") ?? "",
        },
        {
          path: "/",
          expires: a1.toDate(),
        },
      );

      return redirect(`/setting`, {
        headers: {
          "Set-Cookie": r,
        },
      });
    } else {
      return resultInfo;
    }
  }

  if (_action === "sms") {
    const result = await startPhoneSmsValidator.validate(result1);
    if (result.error) return validationError(result.error);
    const data = result.data;
    const r = await yuelemeApi.postApiYuelemeV1TapirLoginByPhoneSms({
      loginPhoneConfirmCheck: {
        phone: data.phone,
      },
    });
    console.log('r', r)
    console.log('r', r)
    console.log('r', r)
    console.log('r', r)
    return json(r);
  }
};

const AV: FunctionComponent = () => <div>操作成功</div>;
export default AV;
