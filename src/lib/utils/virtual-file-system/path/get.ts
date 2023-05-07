import type { VirtualFileSystemNode } from "@/lib/utils/virtual-file-system";
import { getHierarchy } from "@/lib/utils/virtual-file-system/fs/getHierarchy";

export function get(node: Nullable<VirtualFileSystemNode>): string {
  return getHierarchy(node)
    .map((node) => node.name)
    .join("/");
}
