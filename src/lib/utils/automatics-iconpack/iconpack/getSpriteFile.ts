import type { VirtualDirectory, VirtualFile } from "@/lib/utils/virtual-file-system";
import type { AutomaticsJsonEntry } from "@/lib/utils/automatics-iconpack";
import { vfs } from "@/lib/utils/virtual-file-system";
import { getSpriteRoot } from "./getSpriteRoot";

export function getSpriteFile(
  files: VirtualDirectory,
  entry: AutomaticsJsonEntry
): Nullable<VirtualFile> {
  const textures = getSpriteRoot(files);
  if (textures == null) return;
  const exist = vfs.find(textures, entry.sprite.file);
  return vfs.isFile(exist) ? exist : null;
}
