import { expect, test } from "vitest";

import { quantApi } from "~/server/api/quant-cli";

test("getQuantV2HistoryIndexDailyChaodieEvents All Coment", async () => {
  const a = await quantApi.getQuantV2HistoryIndexDailyChaodieEvents({
    code: "000016",
    type: "",
    period: "",
  });
  expect(a.filter((r) => r.event != null)).toBe({});
});
