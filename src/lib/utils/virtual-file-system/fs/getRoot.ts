import type { VirtualFileSystemNode } from "@/lib/utils/virtual-file-system";

export function getRoot(node: VirtualFileSystemNode): VirtualFileSystemNode {
  return node.parent == null ? node : getRoot(node.parent);
}
