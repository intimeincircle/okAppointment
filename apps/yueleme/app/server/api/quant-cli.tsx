import {
  createConfiguration,
  DefaultApi,
  ServerConfiguration,
} from "@app/quant-api";

export const quantApi = new DefaultApi(
  createConfiguration({
    baseServer: new ServerConfiguration("https://oneone.fun/quant/v2", {}),
  }),
);
