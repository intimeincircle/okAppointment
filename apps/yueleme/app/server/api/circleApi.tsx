import {
  createConfiguration,
  DefaultApi,
  ServerConfiguration,
} from "@app/circle-api";

export const circleApi = new DefaultApi(
  createConfiguration({
    baseServer: new ServerConfiguration("https://oneone.fun", {}),
  }),
);
