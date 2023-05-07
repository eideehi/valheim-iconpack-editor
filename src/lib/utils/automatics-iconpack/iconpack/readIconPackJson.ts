import type { AutomaticsIconPackJson } from "@/lib/utils/automatics-iconpack";
import type { VirtualDirectory } from "@/lib/utils/virtual-file-system";
import json5 from "json5";
import { getIconPackJson } from "./getIconPackJson";

export function readIconPackJson(files: VirtualDirectory): AutomaticsIconPackJson {
  const iconPackJson = getIconPackJson(files);
  if (iconPackJson.data.byteLength === 0) return [];
  const parse: unknown = json5.parse(new TextDecoder().decode(iconPackJson.data));
  return Array.isArray(parse) ? (parse as AutomaticsIconPackJson) : [];
}
