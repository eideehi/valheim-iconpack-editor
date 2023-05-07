import type { VirtualDirectory } from "@/lib/utils/virtual-file-system";
import { isDirectory } from "@/lib/utils/virtual-file-system/fs/isDirectory";

export function merge(src: VirtualDirectory, dest: VirtualDirectory): void {
  for (const srcFile of src.files) {
    const existFile = dest.files.find((file) => file.name == srcFile.name);
    if (existFile && isDirectory(srcFile) && isDirectory(existFile)) {
      merge(srcFile, existFile);
    } else if (!existFile) {
      dest.files.push(srcFile);
      srcFile.parent = dest;
    }
  }
  src.files = [];
}
