import dayjs from "dayjs";
import { expect, test } from "vitest";

test("time", () => {
  expect(dayjs("2022-10-28 16:28").toDate()).toEqual(1);
  // expect(dayjs("2022-10-28 16:28:42").toDate()).toEqual(1);
  // expect(dayjs("2022-10-28 16:28:42").toDate()).toEqual(1);
  // expect(dayjs("03:00", "HH:mm").toDate()).toEqual(1);
});
