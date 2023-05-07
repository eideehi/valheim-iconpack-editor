import { writable } from "svelte/store";

export type State = "show" | "hidden";

export const header = writable<State>("show");
