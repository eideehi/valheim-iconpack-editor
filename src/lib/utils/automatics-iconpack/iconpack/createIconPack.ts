import type { VirtualDirectory } from "@/lib/utils/virtual-file-system";
import { vfs } from "@/lib/utils/virtual-file-system";
import { createMarkerFile } from "./createMarkerFile";
import { createIconPackJson } from "./createIconPackJson";

export function createIconPack(name: string): VirtualDirectory {
  return vfs.newDirectory({
    parent: null,
    name,
    files: [
      createMarkerFile(),
      vfs.newDirectory({
        parent: null,
        name: "Textures",
        files: [createIconPackJson()],
      }),
    ],
  });
}
