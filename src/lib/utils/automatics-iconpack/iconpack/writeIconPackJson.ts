import type { AutomaticsIconPackJson } from "@/lib/utils/automatics-iconpack";
import type { VirtualDirectory } from "@/lib/utils/virtual-file-system";
import { getIconPackJson } from "./getIconPackJson";

export function writeIconPackJson(files: VirtualDirectory, json: AutomaticsIconPackJson): void {
  getIconPackJson(files).data = new TextEncoder().encode(JSON.stringify(json)).buffer;
}
