import { toPosix } from "./toPosix";

export function dirname(path: string): string {
  path = toPosix(path);
  const slash = path.lastIndexOf("/");
  return slash === -1 ? path : path.substring(0, slash);
}
