import type { RequestContext, ResponseContext } from "@app/yueleme-api";
import {
  createConfiguration,
  DefaultApi,
  ServerConfiguration,
} from "@app/yueleme-api";

export const yuelemeApi = new DefaultApi(
  createConfiguration({
    baseServer: new ServerConfiguration("https://api.xunlianyinv.vip", {}),
    promiseMiddleware: [
      {
        post: (req) => {
          const a: Promise<ResponseContext> = new Promise((resolve, reject) =>
            resolve(req),
          );

          return a;
        },
        pre: async (req) => {
          console.log("req", req);
          const cookie1 = req.getHeaders();
          console.log("cookie1 ", cookie1);
          const cookie = req.getHeaders()["LQ_AUTH"];
          console.log("cookie", cookie);
          // try {
          // if (typeof window !== "undefined") {
          //   console.log("isServer", document.cookie);
          //   const r = parseCookie(document.cookie);
          //   console.log("hasUserVisitedPage ", r["LQ_AUTH"]);
          // }
          // } catch (e) {
          //   console.log("e", e);
          // }
          const a: Promise<RequestContext> = new Promise((resolve, reject) => {
            resolve(req);
          });

          return a;
        },
      },
    ],
  }),
);
