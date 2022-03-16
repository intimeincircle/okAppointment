import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

import { CONST_TZ } from "~/utils/tz";

dayjs.extend(timezone);
dayjs.extend(utc);
// @ts-ignore
dayjs.tz.setDefault(CONST_TZ);

export const getCurrentDay = (): number =>
  dayjs.tz(new Date(), "Asia/Hong_Kong").endOf("day").toDate().getTime();
