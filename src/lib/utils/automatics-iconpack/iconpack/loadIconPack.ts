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
      if (entry.dir) {
        vfs.add(dir, vfs.newDirectory(relativePath));
      } else {
        const { dirName, fileName, extension } = path.split(relativePath);
        const parent = vfs.newDirectory(dirName);
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
      vfs.remove(dir.parent, dir);
    }

    return isValidIconPack(dir) ? dir : null;
  });
}
