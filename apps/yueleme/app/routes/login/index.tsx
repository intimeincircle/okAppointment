import type { ReactElement } from "react";
import type { ActionFunction, MetaFunction } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import { redirect } from "@remix-run/server-runtime";

import { KunLoadingOverlay } from "@app/ui-lib";
import { Button } from "@mantine/core";
import { withZod } from "@remix-validated-form/with-zod";
import dayjs from "dayjs";
import { ValidatedForm, validationError } from "remix-validated-form";
import { z } from "zod";

import { FormInput } from "~/components/form/input";
import { SubmitButton } from "~/components/mySubmitButton";
import { lqAuthCookie } from "~/hooks/cookie.server";
import { yuelemeApi } from "~/server/api/api-yueleme";
import { startPhoneSmsValidator } from "~/shared/validators/check-phone-validators";
import { checkIfSuccess, HandleNotification } from "~/utils/checkIfSuccess";
import { CONST_CONFIG } from "../../../src/config";

export const validator = withZod(
  z.object({
    username: z.string().min(1, { message: "First name is required" }),
    password: z.string().min(1, { message: "Last name is required" }),
  }),
);

export const action: ActionFunction = async ({ request }) => {
  const result = await validator.validate(await request.formData());

  const h = request.headers;
  console.log("h", h);
  if (result.error) {
    // validationError comes from `remix-validated-form`
    return validationError(result.error);
  }
  try {
    const data = result.data;
    const resultInfo = await yuelemeApi.postApiYuelemeV1TapirLoginByPassword({
      loginTribeUser: {
        userName: data?.username ?? "",
        password: data?.password ?? "",
      },
    });

    console.log("resultInfo", resultInfo);

    const a1 = dayjs(new Date()).add(1, "year");
    console.log(
      'resultInfo.msg?.replaceAll?.(".", "@") ?? ""',
      resultInfo.msg?.replaceAll?.(".", "@") ?? "",
    );
    const r = await lqAuthCookie.serialize(
      {
        LQ_AUTH: resultInfo.msg?.replaceAll?.(".", "@") ?? "",
      },
      {
        path: "/",
        expires: a1.toDate(),
      },
    );

    if (checkIfSuccess(resultInfo)) {
      return redirect(CONST_CONFIG.urlAfterLogin, {
        headers: {
          "Set-Cookie": r,
        },
      });
    } else {
      return validationError(
        {
          fieldErrors: {
            password: resultInfo.msg ?? "",
          },
        },
        result.data,
      );
    }
  } catch (e) {
    console.error(e);
  }
};

export const meta: MetaFunction = () => ({
  title: `登录1-${CONST_CONFIG.title}`,
  description: CONST_CONFIG.slogan,
});

export default function LoginPage(): ReactElement {
  const newsletter = useFetcher<unknown>();
  const newsletter1 = useFetcher<unknown>();
  const newsletter2 = useFetcher<unknown>();

  HandleNotification(newsletter1);
  HandleNotification(newsletter2);
  return (
    <>
      <KunLoadingOverlay visible={newsletter.state === "submitting"}>
        <ValidatedForm
          fetcher={newsletter}
          validator={validator}
          method="post"
          action="/login?index"
        >
          <FormInput name="username" label="user name" />
          <FormInput name="password" label="pass word" />
          <SubmitButton />
        </ValidatedForm>
      </KunLoadingOverlay>

      <KunLoadingOverlay visible={newsletter1.state === "submitting"}>
        <ValidatedForm
          fetcher={newsletter1}
          validator={startPhoneSmsValidator}
          method="post"
          action="/actions/login-phone"
        >
          <FormInput name="phone" label="phone" />
          <SubmitButton actionName="sms" />
          {/*<Button*/}
          {/*  onClick={() => {*/}
          {/*    newsletter1.submit({}, {});*/}
          {/*  }}*/}
          {/*>*/}
          {/*  send sms*/}
          {/*</Button>*/}
        </ValidatedForm>
      </KunLoadingOverlay>

      <KunLoadingOverlay visible={newsletter2.state === "submitting"}>
        <ValidatedForm
          fetcher={newsletter2}
          validator={startPhoneSmsValidator}
          method="post"
          action="/actions/login-phone"
        >
          <FormInput name="phone" label="phone" />
          <FormInput name="code" label="code" />
          <SubmitButton actionName="check" />
          {/*<Button*/}
          {/*  onClick={() => {*/}
          {/*    newsletter1.submit({}, {});*/}
          {/*  }}*/}
          {/*>*/}
          {/*  send sms*/}
          {/*</Button>*/}
        </ValidatedForm>
      </KunLoadingOverlay>
    </>
  );
}
