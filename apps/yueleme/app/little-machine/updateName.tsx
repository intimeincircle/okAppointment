// @ts-ignore
import type { YuelemeServiceCard } from "@app/yueleme-api";

import type { GlobalState } from "~/types";

export function updateState(
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  state,
  payload: {
    selectedTime: undefined | string;
    selectedServiceId: undefined | number;
    selectedDate: undefined | Date;
    serviceCard?: YuelemeServiceCard;
  },
): GlobalState {
  return {
    ...state,
    book: {
      ...state.book,
      ...payload,
    },
  };
}
