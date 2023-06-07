import type { AutomaticsJsonEntry } from "@/lib/utils/automatics-iconpack";
import type { VirtualDirectory } from "@/lib/utils/virtual-file-system";
import _ from "~lodash";
import { vfs, path } from "@/lib/utils/virtual-file-system";
import { getSpriteRoot } from "./getSpriteRoot";

export function removeSpriteFile(files: VirtualDirectory, entry: AutomaticsJsonEntry): boolean {
  const textures = getSpriteRoot(files);
  if (textures == null) return false;
  const result = vfs.remove(textures, entry.sprite.file);
  const parent = vfs.find(textures, path.dirname(entry.sprite.file));
  if (vfs.isDirectory(parent) && _.isEmpty(parent.files)) {
    vfs.remove(parent);
  }
  return result;
}
