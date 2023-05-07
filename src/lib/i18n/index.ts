import type { Readable } from "svelte/store";
import i18next from "i18next";
import { writable } from "svelte/store";

let _language = i18next.language;
export const language = writable(i18next.language, (set) => {
  let interval = setInterval(() => {
    let language = i18next.language;
    if (_language !== language) {
      _language = language;
      set(language);
    }
  }, 250);
  return () => clearInterval(interval);
});

const _t = writable(i18next.t);
export const t: Readable<typeof i18next.t> = _t;

language.subscribe(async (value) => {
  if (value !== i18next.language) {
    await i18next.changeLanguage(value).then((t) => {
      _t.set(t);
    });
  }
});
