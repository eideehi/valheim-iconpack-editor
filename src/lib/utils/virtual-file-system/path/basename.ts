import { toPosix } from "./toPosix";

export function basename(path: string): string {
  path = toPosix(path);
  const slash = path.lastIndexOf("/");
  return slash === -1 ? path : path.substring(slash + 1);
}
