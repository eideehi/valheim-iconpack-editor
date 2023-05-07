import type { VirtualDirectory, VirtualFile } from "@/lib/utils/virtual-file-system";
import _ from "~lodash";
import { MimeType, vfs } from "@/lib/utils/virtual-file-system";
import { createIconPackJson } from "./createIconPackJson";

export function getIconPackJson(files: VirtualDirectory): VirtualFile {
  const result = vfs.find(files, (node) => {
    return (
      vfs.isFile(node) &&
      MimeType.isMatch("json", node.mimeType) &&
      _.eq(_.toLower(node.name), "custom-map-icon.json")
    );
  });
  return vfs.isFile(result) ? result : createIconPackJson(files);
}
