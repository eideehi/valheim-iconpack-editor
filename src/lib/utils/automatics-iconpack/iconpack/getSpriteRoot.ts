import type { VirtualDirectory } from "@/lib/utils/virtual-file-system";
import { vfs } from "@/lib/utils/virtual-file-system";

export function getSpriteRoot(files: VirtualDirectory): Nullable<VirtualDirectory> {
  const node = vfs.find(files, (node) => {
    return /^textures$/gi.test(node.name);
  });
  //TODO: なければ作る
  return vfs.isDirectory(node) ? node : null;
}
