import type { VirtualDirectory, VirtualFileSystemNode } from "@/lib/utils/virtual-file-system";
import _ from "~lodash";
import { vfs, path } from "@/lib/utils/virtual-file-system";

export function remove(dir: VirtualDirectory, pathname: string): boolean;
export function remove(dir: VirtualDirectory, node: VirtualFileSystemNode): boolean;
export function remove(dir: VirtualDirectory, arg2: string | VirtualFileSystemNode): boolean {
  return typeof arg2 === "string" ? remove1(dir, arg2) : remove2(dir, arg2);
}

function remove1(dir: VirtualDirectory, pathname: string): boolean {
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

function remove2(dir: VirtualDirectory, node: VirtualFileSystemNode): boolean {
  let targetPath = path.relative(path.get(dir), path.get(node));
  if (_.isEmpty(targetPath)) {
    targetPath = path.get(node);
  }
  return remove1(dir, targetPath);
}
