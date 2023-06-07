import type { VirtualDirectory, VirtualFileSystemNode } from "@/lib/utils/virtual-file-system";
import _ from "~lodash";
import { vfs, path } from "@/lib/utils/virtual-file-system";

export function remove(node: VirtualFileSystemNode): boolean;
export function remove(dir: VirtualDirectory, pathname: string): boolean;
export function remove(dir: VirtualDirectory, node: VirtualFileSystemNode): boolean;
export function remove(
  arg1: VirtualFileSystemNode | VirtualDirectory,
  arg2?: string | VirtualFileSystemNode
): boolean {
  if (arg2 == null) return remove1(arg1);
  if (!vfs.isDirectory(arg1)) return false;
  return typeof arg2 === "string" ? remove2(arg1, arg2) : remove3(arg1, arg2);
}

function remove1(node: VirtualFileSystemNode): boolean {
  if (node.parent == null) return false;
  return remove3(node.parent, node);
}

function remove2(dir: VirtualDirectory, pathname: string): boolean {
  const segments = path.segments(pathname);
  for (let i = 0; i < segments.length; i++) {
    const exist = dir.files.find((file) => file.name === segments[i]);
    if (exist == null) break;
    if (i === segments.length - 1) {
      _.remove(dir.files, exist);
      exist.parent = null;
      return true;
    }
    if (vfs.isFile(exist)) break;
    dir = exist;
  }

  return false;
}

function remove3(dir: VirtualDirectory, node: VirtualFileSystemNode): boolean {
  let targetPath = path.relative(path.get(dir), path.get(node));
  if (_.isEmpty(targetPath)) {
    targetPath = path.get(node);
  }
  return remove2(dir, targetPath);
}
