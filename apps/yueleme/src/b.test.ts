// src/index.ts

// the implementation
import "whatwg-fetch";

import { quantApi } from "~/server/api/quant-cli";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function add(...args: number[]) {
  return args.reduce((a, b) => a + b, 0);
}

// in-source test suites
// @ts-ignore
if (import.meta.vitest) {
  // @ts-ignore
  const { it, expect } = import.meta.vitest;
  it("add", () => {
    expect(add()).toBe(0);
    expect(add(1)).toBe(1);
    expect(add(1, 2, 3)).toBe(6);
  });
}

// in-source test suites
// @ts-ignore
if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest;
  test("add11", async () => {
    const r = await quantApi.getQuantV2SecurityIndicatorChaodie({
      code: "002967",
    });
    expect(r.records?.length).toBeGreaterThan(1);
  });
}
