import type { VirtualDirectory, VirtualFileSystemNode } from "@/lib/utils/virtual-file-system";
import _ from "~lodash";
import { getHierarchy } from "./getHierarchy";
import { move } from "./move";

export function add(dir: VirtualDirectory, node: VirtualFileSystemNode): boolean {
  if (node.parent != null) {
    const parents = getHierarchy(node);
    if (parents.includes(dir)) return false;
    return move(parents[0], dir);
  }

  const filterResult = _.filter(dir.files, (file) => file.name === node.name);
  if (_.isEmpty(filterResult)) {
    dir.files.push(node);
    node.parent = dir;
    return true;
  }

  const duplicate = filterResult[0];
  if (duplicate === node) return false;

  duplicate.parent = null;
  dir.files = [..._.without(dir.files, duplicate), node];
  node.parent = dir;
  return true;
}
