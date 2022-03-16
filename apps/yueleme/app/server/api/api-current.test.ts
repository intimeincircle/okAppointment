import { expect, test } from "vitest";

import { yuelemeApi } from "~/server/api/api-yueleme";

// test("getQuantV2SecurityIndicatorPanming1()", async () => {
//   const a = await quantApi.getQuantV2SecurityIndicatorPanming({
//     code: "000905",
//   });
//   expect(a).toBeTruthy();
// });
//
// test("postApiV1TapirHorseSeriesGetpubliclist", async () => {
//   const a = await oneOneApi.getApiV1TapirHorseSeriesAuthorQuery({
//     authorization: "",
//     userId: "1",
//   });
//   expect(a).toBe({});
// });

const t =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NjY4NTY3OTgsImlhdCI6MTY2Njg0MjM5OCwidXNlcl9pZCI6IjlkYzMyN2UwLTU0MjEtMTFlZC1iNjc2LWY5ODUwYWNjMTg1NyJ9.Fr01kf_6w5V09BXZPnS2VZLVHPvZcZf_Eprm5RJ6FPE";

test("getApiYuelemeV1YuelemeCanlendarMy", async () => {
  const r444 = await yuelemeApi.getApiYuelemeV1YuelemeCanlendarMy({
    authorization: t,
  });

  expect(r444).toBe({});
});

const data = {
  name: "dd",
  isDefault: false,
  d1Disabled: false,
  d2Disabled: false,
  d3Disabled: false,
  d4Disabled: false,
  d5Disabled: false,
  d6Disabled: false,
  d7Disabled: false,
};

test("getApiYuelemeV1YuelemeCanlendarMyCreate", async () => {
  const r444 = await yuelemeApi.postApiYuelemeV1YuelemeCalendarCreate({
    reqCreateSchedule: data,
    authorization: t,
  });

  expect(r444).toBe({});
});
