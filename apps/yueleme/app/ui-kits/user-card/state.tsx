import { atomWithImmer } from "jotai-immer";
import { atomWithProxy } from "jotai-valtio";
import { proxy } from "valtio";

const proxyState = proxy({ selectedDate: undefined });
export const stateAtom = atomWithProxy<{
  selectedDate: Date | undefined;
}>(proxyState);

export const selectedDateAtom = atomWithImmer<{
  selectedDate: Date | undefined;
  selectedHour: string | undefined;
}>({ selectedDate: undefined, selectedHour: undefined });
