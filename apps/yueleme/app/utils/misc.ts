export function typedBoolean<T>(
  value: T,
): value is Exclude<T, "" | 0 | false | null | undefined> {
  return Boolean(value);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function getDomainUrl(request: Request) {
  const host =
    request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  if (!host) {
    throw new Error("Could not determine domain URL.");
  }
  const protocol = host.includes("localhost") ? "http" : "https";
  return `${protocol}://${host}`;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function removeTrailingSlash(s: string) {
  return s.endsWith("/") ? s.slice(0, -1) : s;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function capitalize(value: string) {
  return value.substring(0, 1).toUpperCase() + value.substring(1);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function formatPhoneNumber(value: string) {
  return value.replace(/^(\d{3})(\d{2})(\d{3})$/, "$1 $2 $3");
}

/**
 * Simple deep equality checker. It will check value of every field in each object, as well as the length of their key sets.
 */
export function isEqual<T>(entry1: T, entry2: T): boolean {
  // 1. We can do simple type + equality check on primitive values
  if (typeof entry1 !== "object") {
    return typeof entry1 === typeof entry2 && entry1 === entry2;
  }

  // @ts-ignore
  const fieldsIn1 = Object.entries(entry1);
  // @ts-ignore
  const keysIn2 = Object.keys(entry2);

  // 2. Different key/entry count? Different objects
  if (fieldsIn1.length !== keysIn2.length) {
    return false;
  }

  return fieldsIn1.every(([key1, value1]) => {
    const containsField = keysIn2.includes(key1);

    // 3. Key in 1 not in 2? Different objects
    if (!containsField) {
      return false;
    }

    const value2 = entry2[key1 as keyof T];

    // 4. Recursion, here we come
    return isEqual(value1, value2);
  });
}

type ClassName = string | number | Record<string, boolean> | ClassName[];

/**
 * Simple utility function for creating conditional class names with a bit more
 * help than template strings gives you.
 *
 * Basically this: https://www.npmjs.com/package/classnames
 *
 * @param args {ClassName[]} - class names to combine.
 */
export function classNames(...args: ClassName[]): string {
  const resolved: (string | number)[] = [];
  for (const arg of args) {
    if (typeof arg === "number" || typeof arg === "string") {
      resolved.push(arg);
    } else if (Array.isArray(arg)) {
      resolved.push(classNames(...arg));
    } else if (typeof arg === "object") {
      resolved.push(...Object.keys(arg).filter((it) => arg[it]));
    }
  }
  return resolved.filter(typedBoolean).join(" ");
}
