import type { VirtualDirectory, VirtualFileSystemNode } from "../types";
import JSZip from "jszip";

export function zip(files: VirtualDirectory): Promise<Blob> {
  const jszip = new JSZip();
  const write = (entry: JSZip, node: VirtualFileSystemNode) => {
    if (node.type === "directory") {
      const folder = entry.folder(node.name);
      if (!folder) return;

      for (const child of node.files) {
        write(folder, child);
      }
    } else {
      entry.file(node.name, node.data);
    }
  };
  write(jszip, files);
  return jszip.generateAsync({ type: "blob" });
}
