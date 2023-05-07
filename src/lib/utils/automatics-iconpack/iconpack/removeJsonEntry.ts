import type { AutomaticsIconPackJson, AutomaticsJsonEntry } from "@/lib/utils/automatics-iconpack";
import type { VirtualDirectory, VirtualFile } from "@/lib/utils/virtual-file-system";
import _ from "~lodash";
import { removeSpriteFile } from "./removeSpriteFile";
import { isTargetEqual } from "@/lib/utils/automatics-iconpack";

export function removeJsonEntry(
  files: VirtualDirectory,
  json: AutomaticsIconPackJson,
  entry: AutomaticsJsonEntry
): AutomaticsIconPackJson {
  _.remove(json, isTargetEqual(entry));
  if (json.every((_entry) => _entry.sprite.file !== entry.sprite.file)) {
    removeSpriteFile(files, entry);
  }
  return json;
}
