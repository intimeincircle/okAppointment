import { expect, test } from "vitest";

import { quantApi } from "~/server/api/quant-cli";

test("getApiV1TapirHorseSeriesCategoryGet1", async () => {
  const a = await quantApi.getQuantV2QuantBoatPig({
    symbol: "猪肉批发价",
  });

  expect(a).toBe({});
});
