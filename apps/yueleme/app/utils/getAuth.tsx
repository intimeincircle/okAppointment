import type { DataFunctionArgs } from "@remix-run/server-runtime";
import { redirect } from "@remix-run/server-runtime";

import { pipe } from "fp-ts/lib/function";
import type { Task } from "fp-ts/lib/Task";
import * as T from "fp-ts/lib/Task";
import type { TaskEither } from "fp-ts/lib/TaskEither";
import { getOrElse, tryCatch } from "fp-ts/lib/TaskEither";

import { lqAuthCookie } from "~/hooks/cookie.server";

type AppData = unknown;

export const getAuth = async (data: { request: Request }): Promise<string> => {
  console.log("h", data.request);
  console.log("headers", data.request.headers);
  const t1: Task<{
    LQ_AUTH: string;
  }> = () => lqAuthCookie.parse(data.request.headers.get("Cookie"));
  const value1: TaskEither<string, { LQ_AUTH: string }> = tryCatch(t1, String);

  const value = pipe(
    value1,
    getOrElse(() =>
      T.of({
        LQ_AUTH: "",
      }),
    ),
    T.map((r1) => {
      console.log("r1", r1);
      const r2 = r1 ?? { LQ_AUTH: "" };
      return r2?.LQ_AUTH?.replaceAll?.("@", ".");
    }),
  );

  const a1 = await value();
  return a1 ?? "";
};

export interface LoaderFunction1 {
  (args: DataFunctionArgs): Promise<Response | AppData>;
}

export interface LoaderFunction2 {
  (args: DataFunctionArgs, auth: string): Promise<Response | AppData>;
}

export const handleAuthentication = (a: LoaderFunction2): LoaderFunction1 => {
  const res: LoaderFunction1 = async (result: DataFunctionArgs) => {
    try {
      console.log("starting");
      const t = await getAuth(result);
      const r = await a(result, t);
      return {
        // @ts-ignore
        ...r,
        _T: t,
      };
    } catch (e) {
      console.error("eeeee", e);
      console.error("eeeee", e);
      const r1 = e as Error;
      if (r1.message.includes(`user not found danger found`)) {
        return redirect("/login");
      }
    }
  };
  return res as LoaderFunction1;
};
