import { toPosix } from "./toPosix";

export function resolve(path: string, ...children: string[]): string {
  path = toPosix(path);
  children.forEach((child) => (path += toPosix(child)));
  return path;
}
