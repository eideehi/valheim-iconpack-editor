import type { AutomaticsJsonEntry } from "@/lib/utils/automatics-iconpack";

export function defaultJsonEntry(): AutomaticsJsonEntry {
  return {
    target: {
      name: "",
    },
    sprite: {
      file: "",
      height: 0,
      width: 0,
    },
  };
}
