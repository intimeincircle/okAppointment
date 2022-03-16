// @ts-ignore
export const parseCookie = (str: string): React<string, string> =>
  str
    .split(";")
    // @ts-ignore
    .map((v) => v.split("="))
    // @ts-ignore
    .reduce((acc: Record<string, string>, v) => {
      return {
        ...acc,
        [decodeURIComponent(v[0].trim())]: decodeURIComponent(v[1].trim()),
      };
    }, {});
