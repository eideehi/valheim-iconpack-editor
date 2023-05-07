import type { VirtualFileSystemNode } from "@/lib/utils/virtual-file-system";

export function getHierarchy(node: VirtualFileSystemNode): VirtualFileSystemNode[] {
  return _getHierarchy(node, []).reverse();
}

function _getHierarchy(
  node: Nullable<VirtualFileSystemNode>,
  hierarchy: VirtualFileSystemNode[]
): VirtualFileSystemNode[] {
  if (node == null) return hierarchy;
  hierarchy.push(node);
  return _getHierarchy(node.parent, hierarchy);
}
