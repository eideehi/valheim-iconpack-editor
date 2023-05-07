import type { AutomaticsJsonEntry } from "@/lib/utils/automatics-iconpack";

export function isTargetEqual(entry1: AutomaticsJsonEntry, entry2: AutomaticsJsonEntry): boolean;
export function isTargetEqual(
  entry1: AutomaticsJsonEntry
): (entry2: AutomaticsJsonEntry) => boolean;
export function isTargetEqual(
  entry1: AutomaticsJsonEntry,
  entry2?: AutomaticsJsonEntry
): boolean | ((entry2: AutomaticsJsonEntry) => boolean) {
  if (entry2 != null) return isTargetEqual1(entry1, entry2);
  return (entry2: AutomaticsJsonEntry) => isTargetEqual1(entry1, entry2);
}

function isTargetEqual1(entry1: AutomaticsJsonEntry, entry2: AutomaticsJsonEntry): boolean {
  if (entry1.target.name !== entry2.target.name) return false;
  const metadata1 = entry1.target.metadata;
  const metadata2 = entry2.target.metadata;
  if (metadata1 == null && metadata2 == null) return true;
  if (metadata1 == null || metadata2 == null) return false;
  return metadata1.level === metadata2.level;
}
