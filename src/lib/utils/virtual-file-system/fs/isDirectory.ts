import type { VirtualDirectory, VirtualFileSystemNode } from "@/lib/utils/virtual-file-system";

export function isDirectory(node: Nullable<VirtualFileSystemNode>): node is VirtualDirectory {
  return node != null && node.type === "directory";
}
