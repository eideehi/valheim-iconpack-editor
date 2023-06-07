import type { VirtualDirectory, VirtualFile } from "@/lib/utils/virtual-file-system";
import { MimeTypes, vfs } from "@/lib/utils/virtual-file-system";

export function createMarkerFile(parent?: VirtualDirectory): VirtualFile {
  return vfs.newFile({
    parent,
    name: "automatics-child-mod",
    mimeType: MimeTypes.text,
    data: new ArrayBuffer(0),
  });
}
