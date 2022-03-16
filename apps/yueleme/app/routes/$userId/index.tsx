import type { ReactElement } from "react";
import type { LoaderFunction } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { redirect } from "@remix-run/server-runtime";

import type { NoSqlPagingListDataPageMarkScheduleCard } from "@app/yueleme-api";

import { handleAuthentication } from "~/utils/getAuth";
import { yuelemeApi } from "~/server/api/api-yueleme";
import { CONST_CONFIG } from "../../../src/config";

type A = { userId: string };
export const action = handleAuthentication(async ({ request, params }, t) => {
  const a = params as A;
});

const a1 = new RegExp(/^[a-zA-Z0-9]{1,}$/);

export const loader: LoaderFunction = async (a) => {
  const pa = a.params as A;

  if (a1.test(pa.userId)) {
    const r444 = await yuelemeApi.getApiYuelemeV1YuelemeServiceUserNameList({
      userName: pa.userId,
    });
    console.log("r4444", r444);
    return r444;
  } else {
    redirect("/404");
  }
}

export const meta: MetaFunction = () => ({
  title: `用户-${CONST_CONFIG.title}`,
  description: CONST_CONFIG.slogan,
});

export default function Address(): ReactElement {
  const products = useLoaderData<NoSqlPagingListDataPageMarkScheduleCard>();

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
