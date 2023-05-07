import type { VirtualFileSystemNode } from "@/lib/utils/virtual-file-system";

export function getDepth(node: VirtualFileSystemNode): number {
  return _getDepth(node, 0);
}

function _getDepth(node: VirtualFileSystemNode, depth: number): number {
  if (node.parent == null) return depth;
  return _getDepth(node.parent, depth + 1);
}
