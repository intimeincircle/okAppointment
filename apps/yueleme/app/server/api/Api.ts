import type { RequestContext, ResponseContext } from "@app/oneone-api";
import {
  createConfiguration,
  DefaultApi,
  ServerConfiguration,
} from "@app/oneone-api";

export const oneOneApi = new DefaultApi(
  createConfiguration({
    baseServer: new ServerConfiguration(process.env.BACKEND_API, {}),
    promiseMiddleware: [
      {
        post: (req) => {
          const a: Promise<ResponseContext> = new Promise((resolve, reject) =>
            resolve(req),
          );

          return a;
        },
        pre: async (req) => {
          const cookie = req.getHeaders()["LQ_AUTH"];
          console.log("cookie", cookie);
          const a: Promise<RequestContext> = new Promise((resolve, reject) => {
            resolve(req);
          });

          return a;
        },
      },
    ],
  }),
);
