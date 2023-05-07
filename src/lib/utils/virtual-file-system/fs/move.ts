import type { VirtualDirectory, VirtualFileSystemNode } from "@/lib/utils/virtual-file-system";
import _ from "~lodash";
import { isDirectory } from "./isDirectory";
import { merge } from "./merge";
import { remove } from "./remove";

export function move(node: VirtualFileSystemNode, dir: VirtualDirectory): boolean {
  if (node.parent != null && node.parent !== dir) {
    remove(node.parent, node);
  }

  const duplicate = dir.files.find((file) => file.name === node.name);
  if (duplicate != null) {
    dir.files = [..._.without(dir.files, duplicate), node];
    node.parent = dir;
    if (isDirectory(duplicate) && isDirectory(node)) {
      merge(duplicate, node);
    }
    return true;
  }

  dir.files.push(node);
  node.parent = dir;
  return true;
}
