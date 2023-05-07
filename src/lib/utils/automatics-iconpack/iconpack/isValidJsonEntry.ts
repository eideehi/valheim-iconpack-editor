import type { AutomaticsJsonEntry } from "@/lib/utils/automatics-iconpack";

export function isValidJsonEntry(entry: AutomaticsJsonEntry): boolean {
  const { target, sprite, options } = entry;
  if (!target.name) return false;
  if (target.metadata) {
    const { level } = target.metadata;
    if (level <= 0 || level >= 4) return false;
  }
  if (!sprite.file) return false;
  if (sprite.width <= 0 || sprite.height <= 0) return false;
  if (options) {
    const { iconScaleLargeMap, iconScaleSmallMap } = options;
    if (iconScaleLargeMap != null && iconScaleLargeMap <= 0) return false;
    if (iconScaleSmallMap != null && iconScaleSmallMap <= 0) return false;
  }
  return true;
}
