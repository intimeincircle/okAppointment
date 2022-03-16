import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { expect, test } from "vitest";

// * as
dayjs.extend(timezone);
dayjs.extend(utc);
const a: Array<number> = [1, 2];

test("Math.sqrt()", () => {
  expect(a.length).toBe(2);

  // const time = dayjs
  //   .tz(new Date(), "America/New_York")
  //   .startOf("day")
  //   .toDate()
  //   .getTime();

  // .tz(new Date(), "Asia/Shanghai")
  // .tz(new Date(), "Asia/Shang_Hai")
  const time2 = dayjs
    .tz(new Date(), "Asia/Hong_Kong")
    .endOf("day")
    .toDate()
    .getTime();

  expect(time2).toEqual(1);

  // expect(time).toEqual(time1);
  expect(a.includes(1)).toBe(true);
});
