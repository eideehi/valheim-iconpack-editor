import type { AutomaticsJsonEntry } from "@/lib/utils/automatics-iconpack";

export type EditMode = "iconpack-json" | "thunderstore-manifest";

export type IconPackEditorContext = {
  saveEntry: Callback;
  openEntry: Callback1<AutomaticsJsonEntry>;
  deleteEntry: Callback;
};

export const iconPackEditorContextKey = Symbol();
