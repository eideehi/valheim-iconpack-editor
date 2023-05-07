import type { VirtualFileSystemNode } from "@/lib/utils/virtual-file-system";
import { isDirectory } from "./isDirectory";
import { isFile } from "./isFile";
import { segments } from "@/lib/utils/virtual-file-system/path/segments";

export type FindPredicate = Predicate1<VirtualFileSystemNode>;

export function find(
  node: VirtualFileSystemNode,
  predicate: FindPredicate
): Nullable<VirtualFileSystemNode>;
export function find(node: VirtualFileSystemNode, path: string): Nullable<VirtualFileSystemNode>;
export function find(
  node: VirtualFileSystemNode,
  arg2: FindPredicate | string
): Nullable<VirtualFileSystemNode> {
  if (typeof arg2 === "function") {
    return find1(node, arg2);
  } else if (typeof arg2 === "string") {
    return find2(node, arg2);
  }
}

function find1(
  node: VirtualFileSystemNode,
  predicate: FindPredicate
): Nullable<VirtualFileSystemNode> {
  if (predicate(node)) return node;
  if (!isDirectory(node)) return null;
  for (const child of node.files) {
    const result = find(child, predicate);
    if (result != null) return result;
  }
  return null;
}

function find2(node: VirtualFileSystemNode, path: string): Nullable<VirtualFileSystemNode> {
  const _segments = segments(path);
  if (!isDirectory(node)) {
    return _segments.length === 1 && node.name === _segments[0] ? node : null;
  }
  let dir = node;
  for (let i = 0; i < _segments.length; i++) {
    const name = _segments[i];
    const exist = dir.files.find((file) => file.name === name);
    if (exist == null) return null;
    if (i === _segments.length - 1) return exist;
    if (isFile(exist)) return null;
    dir = exist;
  }
  return null;
}
