export const convertBooleanOnOffText = (
  isOpen: boolean | undefined,
): string | undefined => {
  if (isOpen == null) {
    return undefined;
  }
  return isOpen ? "on" : "off";
};
export const revertBoolean = (isOpen?: string): boolean | undefined => {
  if (isOpen == undefined) {
    return undefined;
  }
  return isOpen === "on";
};

export const orUndefiendNumber = (text: string): undefined | number => {
  if (text === "") {
    return undefined;
  } else {
    return Number(text);
  }
};
