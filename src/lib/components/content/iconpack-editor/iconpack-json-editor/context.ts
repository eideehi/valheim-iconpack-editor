import type { Readable } from "svelte/store";

export type JsonEditorContext = {
  isOverwrite: Readable<boolean>;
  isValid: Readable<boolean>;
};

export const jsonEditorContextKey = Symbol();
