import type { VirtualDirectory, VirtualFile } from "@/lib/utils/virtual-file-system";
import { add } from "./add";

export type NewFileArgs = {
  parent?: Nullable<VirtualDirectory>;
  name: string;
  mimeType: string;
  data?: ArrayBuffer;
};

export function newFile(args: NewFileArgs): VirtualFile {
  const { parent, name, mimeType, data: defaultData } = args;
  const data = defaultData || new ArrayBuffer(0);
  const file: VirtualFile = { type: "file", parent: null, name, mimeType, data };
  if (parent != null) {
    add(parent, file);
  }
  return file;
}
