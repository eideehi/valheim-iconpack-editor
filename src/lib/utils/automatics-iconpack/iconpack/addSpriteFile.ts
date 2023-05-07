import type { VirtualDirectory, VirtualFileSystemNode } from "@/lib/utils/virtual-file-system";
import { vfs } from "@/lib/utils/virtual-file-system";
import { getSpriteRoot } from "./getSpriteRoot";

export function addSpriteFile(files: VirtualDirectory, file: VirtualFileSystemNode): void {
  const textures = getSpriteRoot(files);
  if (textures == null) return;
  vfs.add(textures, file);
}
