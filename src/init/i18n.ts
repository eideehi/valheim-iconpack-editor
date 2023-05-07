import type { TFunction } from "i18next";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";

const modules = import.meta.glob(`/src/assets/locales/**/*.json`);

const promise = i18next
  .use(
    resourcesToBackend((language: string, namespace: string) => {
      return modules[`/src/assets/locales/${language}/${namespace}.json`]();
    })
  )
  .use(LanguageDetector)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    ns: ["app"],
    defaultNS: "app",
    interpolation: { escapeValue: false },
    supportedLngs: ["en", "ja"],
    detection: {
      lookupQuerystring: "lang",
      order: ["querystring", "navigator"],
    },
  })
  .then(() => {
    return i18next.changeLanguage().then((t) => {
      document.documentElement.setAttribute("lang", i18next.language);
      return Promise.resolve(t);
    });
  });

export function i18nInitialization(): Promise<TFunction> {
  return promise;
}
