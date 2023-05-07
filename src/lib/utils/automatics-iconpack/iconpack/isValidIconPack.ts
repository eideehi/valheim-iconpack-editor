import type { VirtualDirectory } from "@/lib/utils/virtual-file-system";
import { vfs } from "@/lib/utils/virtual-file-system";

export function isValidIconPack(files: VirtualDirectory): boolean {
  return isThunderstoreIconPack(files) || isNexusIconPack(files);
}

function isNexusIconPack(files: VirtualDirectory): boolean {
  const marker = vfs.find(
    files,
    (node) => vfs.isFile(node) && node.name === "automatics-child-mod"
  );
  if (marker == null || vfs.getDepth(marker) > 1) return false;
  const json = vfs.find(marker.parent || files, "Textures/custom-map-icon.json");
  return vfs.isFile(json);
}

function isThunderstoreIconPack(files: VirtualDirectory): boolean {
  return false;
}
