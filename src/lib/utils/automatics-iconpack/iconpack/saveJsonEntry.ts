import type { AutomaticsIconPackJson, AutomaticsJsonEntry } from "@/lib/utils/automatics-iconpack";
import type { VirtualDirectory, VirtualFile } from "@/lib/utils/virtual-file-system";
import _ from "~lodash";
import { path } from "@/lib/utils/virtual-file-system";
import { addSpriteFile } from "./addSpriteFile";
import { getSpriteFile } from "./getSpriteFile";
import { isTargetEqual } from "./isTargetEqual";
import { removeSpriteFile } from "./removeSpriteFile";
import { writeIconPackJson } from "./writeIconPackJson";

export function saveJsonEntry(
  files: VirtualDirectory,
  json: AutomaticsIconPackJson,
  entry: AutomaticsJsonEntry,
  sprite: VirtualFile
): AutomaticsIconPackJson {
  const existEntry = json.find(isTargetEqual(entry));
  if (existEntry != null) {
    json = [..._.without(json, existEntry), { ..._.cloneDeep(entry) }];
    if (json.every((_entry) => _entry.sprite.file !== existEntry.sprite.file)) {
      const spriteFile = getSpriteFile(files, existEntry);
      if (path.get(spriteFile) !== path.get(sprite)) {
        removeSpriteFile(files, existEntry);
      }
    }
  } else {
    json = [...json, { ..._.cloneDeep(entry) }];
  }
  writeIconPackJson(files, json);
  addSpriteFile(files, sprite);
  return json;
}
