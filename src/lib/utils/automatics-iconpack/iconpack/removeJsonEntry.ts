import type { AutomaticsIconPackJson, AutomaticsJsonEntry } from "@/lib/utils/automatics-iconpack";
import type { VirtualDirectory } from "@/lib/utils/virtual-file-system";
import _ from "~lodash";
import { removeSpriteFile } from "./removeSpriteFile";
import { writeIconPackJson } from "./writeIconPackJson";
import { isTargetEqual } from "@/lib/utils/automatics-iconpack";

export function removeJsonEntry(
  files: VirtualDirectory,
  json: AutomaticsIconPackJson,
  entry: AutomaticsJsonEntry
): AutomaticsIconPackJson {
  const existEntry = json.find(isTargetEqual(entry));
  if (existEntry == null) return json;
  _.remove(json, isTargetEqual(existEntry));
  if (json.every((_entry) => _entry.sprite.file !== existEntry.sprite.file)) {
    removeSpriteFile(files, existEntry);
  }
  writeIconPackJson(files, json);
  return json;
}
