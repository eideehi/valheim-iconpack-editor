export type FileSystemNodeType = "file" | "directory";

interface VirtualFileSystemNodeInterface {
  type: FileSystemNodeType;
  parent: Nullable<VirtualDirectory>;
  name: string;
}

export interface VirtualFile extends VirtualFileSystemNodeInterface {
  type: "file";
  mimeType: string;
  data: ArrayBuffer;
}

export interface VirtualDirectory extends VirtualFileSystemNodeInterface {
  type: "directory";
  files: VirtualFileSystemNode[];
}

export type VirtualFileSystemNode = VirtualFile | VirtualDirectory;
