import type { AutomaticsIconPackJson, AutomaticsJsonEntry } from "@/lib/utils/automatics-iconpack";
import type { VirtualDirectory } from "@/lib/utils/virtual-file-system";
import json5 from "json5";
import { getIconPackJson } from "./getIconPackJson";

export function readIconPackJson(files: VirtualDirectory): AutomaticsIconPackJson {
  const iconPackJson = getIconPackJson(files);
  if (iconPackJson.data.byteLength === 0) return [];
  const parse: unknown = json5.parse(new TextDecoder().decode(iconPackJson.data));
  if (!Array.isArray(parse)) return [];
  if (!parse.every(hasEntryShape)) throw new Error("Invalid icon pack json entry");
  return parse;
}

function hasEntryShape(entry: unknown): entry is AutomaticsJsonEntry {
  if (!isObject(entry)) return false;
  const { target, sprite } = entry;
  return (
    isObject(target) &&
    typeof target.name === "string" &&
    isObject(sprite) &&
    typeof sprite.file === "string"
  );
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null && !Array.isArray(value);
}
