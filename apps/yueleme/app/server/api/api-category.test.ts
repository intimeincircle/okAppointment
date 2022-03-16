import { expect, test } from "vitest";

import { oneOneApi } from "./Api";

test("getApiV1TapirHorseSeriesCategoryGet", async () => {
  const a = await oneOneApi.getApiV1TapirHorseSeriesCategoryGet({});
  expect(a).toBeTruthy();
});

test("getApiV1TapirHorseSeriesCategoryGet All Coment", async () => {
  const a = await oneOneApi.getApiV1TapirHorseCardCommentList({
    id: "2LRaapRb",
  });
  expect(a).toBe({});
});

test("getApiV1TapirHorseSeriesCreateComment All Coment", async () => {
  const a = await oneOneApi.getApiV1TapirHorseCardCommentList({
    id: "2LRaapRb",
  });
  expect(a).toBe({});
});
