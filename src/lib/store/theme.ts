import { writable } from "svelte/store";

export type Theme = "dark" | "light";

export const theme = writable<Theme>();

let _theme: Theme;
{
  const _value = localStorage.getItem("theme");
  if (!_value || (_value !== "dark" && _value !== "light")) {
    _theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  } else {
    _theme = _value;
  }
}

theme.subscribe((value) => {
  if (!value) {
    return;
  }
  localStorage.setItem("theme", value);
  if (value === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});

theme.set(_theme);
