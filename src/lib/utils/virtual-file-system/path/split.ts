import { toPosix } from "./toPosix";

export type SplitResult = { dirName: string; fileName: string; extension: string };

export function split(path: string): SplitResult {
  path = toPosix(path);
  const slash = path.lastIndexOf("/");
  const dot = path.lastIndexOf(".");
  const dirName = slash === -1 ? "" : path.substring(0, slash);
  const fileName =
    slash === -1 ? path : dot === -1 ? path.substring(slash + 1) : path.substring(slash + 1, dot);
  const extension = dot === -1 ? "" : path.slice(dot + 1);
  return { dirName, fileName, extension };
}
