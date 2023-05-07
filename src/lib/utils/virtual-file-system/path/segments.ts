import { toPosix } from "./toPosix";

export function segments(path: string): string[] {
  return toPosix(path)
    .split("/")
    .filter((segment) => segment.length > 0);
}
