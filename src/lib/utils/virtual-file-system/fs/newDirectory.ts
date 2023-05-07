import type { VirtualDirectory, VirtualFileSystemNode } from "@/lib/utils/virtual-file-system";
import _ from "~lodash";
import { segments } from "@/lib/utils/virtual-file-system/path/segments";
import { add } from "./add";
import { move } from "./move";
import { getRoot } from "./getRoot";

export type NewDirectoryArgs = {
  parent?: VirtualDirectory;
  name: string;
  files?: VirtualFileSystemNode[];
};

export function newDirectory(args: NewDirectoryArgs): VirtualDirectory;
export function newDirectory(parent: VirtualDirectory, path: string): VirtualDirectory;
export function newDirectory(path: string): VirtualDirectory;
export function newDirectory(
  arg1: NewDirectoryArgs | VirtualDirectory | string,
  arg2?: string
): VirtualDirectory {
  if (typeof arg1 === "string") {
    return newDirectory3(arg1);
  }
  if (typeof arg2 === "string" && isVirtualDirectory(arg1)) {
    return newDirectory2(arg1, arg2);
  }
  if (isNewDirectoryArgs(arg1)) {
    return newDirectory1(arg1);
  }
  console.error(arg1);
  console.error(arg2);
  throw new Error("Illegal argument");
}

function isVirtualDirectory(obj: object): obj is VirtualDirectory {
  return (
    _.has(obj, "type") &&
    _.get(obj, ["type"], "") === "directory" &&
    _.has(obj, "name") &&
    _.has(obj, "parent") &&
    _.has(obj, "files")
  );
}

function isNewDirectoryArgs(obj: object): obj is NewDirectoryArgs {
  return typeof _.get(obj, ["name"], null) === "string";
}

function newDirectory1(args: NewDirectoryArgs): VirtualDirectory {
  const { parent, name, files } = Object.assign<Partial<NewDirectoryArgs>, NewDirectoryArgs>(
    {
      parent: null,
      files: [] as VirtualFileSystemNode[],
    },
    args
  );
  const dir: VirtualDirectory = { type: "directory", parent: null, name, files: [] };
  files.forEach((file) => move(file, dir));
  if (parent != null) {
    add(parent, dir);
  }
  return dir;
}

function newDirectory2(parent: VirtualDirectory, path: string): VirtualDirectory {
  const directory = newDirectory3(path);
  const root = getRoot(directory);
  parent.files.push(root);
  root.parent = parent;
  return directory;
}

function newDirectory3(path: string): Nullable<VirtualDirectory> {
  const _segments = segments(path);
  if (_.isEmpty(_segments)) return null;
  let dir = newDirectory1({ name: _segments[0] });
  for (let i = 1; i < _segments.length; i++) {
    dir = newDirectory1({ parent: dir, name: _segments[i] });
  }
  return dir;
}
