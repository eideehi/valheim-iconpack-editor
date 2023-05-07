import type { VirtualFile } from "@/lib/utils/virtual-file-system";
import { vfs, path } from "@/lib/utils/virtual-file-system";
import { getSpriteRoot } from "./getSpriteRoot";

export function getSpritePath(file: VirtualFile): { parent: string; filename: string } {
  //TODO: あまり有用ではないので代替方法を考える
  const root = vfs.getRoot(file);
  if (!vfs.isDirectory(root)) return { parent: "", filename: file.name };
  const textures = getSpriteRoot(root);
  if (textures == null) return { parent: path.get(file.parent), filename: file.name };
  return { parent: path.relative(path.get(textures), path.get(file.parent)), filename: file.name };
}
