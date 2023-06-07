import type { Readable } from "svelte/store";
import i18next from "i18next";
import { writable } from "svelte/store";

let _language = i18next.language;
export const language = writable(_language, (set) => {
  const interval = window.setInterval(() => {
    const current = i18next.language;
    if (_language !== current) {
      _language = current;
      set(current);
    }
  }, 250);
  return () => window.clearInterval(interval);
});

const _t = writable(i18next.t);
export const t: Readable<typeof i18next.t> = _t;

language.subscribe((value) => {
  if (value !== i18next.language) {
    void i18next.changeLanguage(value).then((t) => {
      _t.set(t);
    });
  }
});
