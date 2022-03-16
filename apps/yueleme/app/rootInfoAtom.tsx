import { atom } from "jotai";

export interface ACDDD {
  _T: string;
}
export const rootInfoAtom = atom<{
  _T: string;
}>({
  _T: "",
});
