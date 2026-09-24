import { toPosix } from "./toPosix";

export type SplitResult = { dirName: string; fileName: string; extension: string };

export function split(path: string): SplitResult {
  path = toPosix(path);
  const slash = path.lastIndexOf("/");
  const dirName = slash === -1 ? "" : path.substring(0, slash);
  const baseName = path.substring(slash + 1);
  const dot = baseName.lastIndexOf(".");
  const fileName = dot === -1 ? baseName : baseName.substring(0, dot);
  const extension = dot === -1 ? "" : baseName.slice(dot + 1);
  return { dirName, fileName, extension };
}
