import { DEFAULT_LANGUAGE, translations } from "./translations";

/** localStorage key for the language the visitor picked. index.html's boot script reads it too. */
export const STORAGE_KEY = "portfolio-language";

/** Language the static HTML is generated in at build time (see scripts/prerender.js). */
export const PRERENDERED_LANGUAGE = DEFAULT_LANGUAGE;

/** Returns `code` if the site is translated to it, otherwise the default language. */
export function resolveLanguage(code) {
    return translations[code] ? code : DEFAULT_LANGUAGE;
}
