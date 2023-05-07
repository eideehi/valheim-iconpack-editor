import type { VirtualFile, VirtualFileSystemNode } from "@/lib/utils/virtual-file-system";

export function isFile(node: Nullable<VirtualFileSystemNode>): node is VirtualFile {
  return node != null && node.type === "file";
}
