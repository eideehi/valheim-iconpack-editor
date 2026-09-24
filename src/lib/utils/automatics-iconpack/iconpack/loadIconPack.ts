import type { VirtualDirectory } from "@/lib/utils/virtual-file-system";
import JSZip from "jszip";
import { nanoid } from "nanoid";
import _ from "~lodash";
import { MimeType, vfs, path } from "@/lib/utils/virtual-file-system";
import { isValidIconPack } from "./isValidIconPack";

export function loadIconPack(data: Promise<ArrayBuffer>): Promise<Nullable<VirtualDirectory>> {
  return JSZip.loadAsync(data).then(async (zip) => {
    let dir = vfs.newDirectory({ name: nanoid() });

    const loadingQueue: Promise<void>[] = [];
    zip.forEach((relativePath, entry) => {
      if (isIgnoredEntry(relativePath)) return;
      if (entry.dir) {
        vfs.add(dir, vfs.newDirectory(relativePath));
      } else {
        const { dirName, fileName, extension } = path.split(relativePath);
        const parent = _.isEmpty(path.segments(dirName)) ? null : vfs.newDirectory(dirName);
        const name = _.isEmpty(extension) ? fileName : `${fileName}.${extension}`;
        const queue = entry.async("arraybuffer").then((buffer) => {
          vfs.add(
            dir,
            vfs.newFile({
              parent,
              name,
              data: buffer,
              mimeType: MimeType.get(extension),
            })
          );
        });
        loadingQueue.push(queue);
      }
    });
    await Promise.all(loadingQueue);

    if (dir.files.length === 1 && vfs.isDirectory(dir.files[0])) {
      dir = dir.files[0];
      vfs.remove(dir);
    }

    return isValidIconPack(dir) ? dir : null;
  });
}

function isIgnoredEntry(relativePath: string): boolean {
  const segments = path.segments(relativePath);
  return segments[0] === "__MACOSX" || segments[segments.length - 1] === ".DS_Store";
}
