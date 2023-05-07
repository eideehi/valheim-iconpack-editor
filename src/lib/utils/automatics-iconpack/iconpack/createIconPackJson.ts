import type { VirtualDirectory, VirtualFile } from "@/lib/utils/virtual-file-system";
import { MimeTypes, vfs } from "@/lib/utils/virtual-file-system";

export function createIconPackJson(parent: Nullable<VirtualDirectory> = null): VirtualFile {
  return vfs.newFile({
    parent,
    name: "custom-map-icon.json",
    mimeType: MimeTypes.json,
    data: new ArrayBuffer(0),
  });
}
