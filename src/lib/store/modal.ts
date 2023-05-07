import { writable } from "svelte/store";

export type State = "show" | "hidden";

export const modal = writable<State>("hidden");
