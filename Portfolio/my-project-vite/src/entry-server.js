import { StrictMode, createElement } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";

export { PRERENDERED_LANGUAGE } from "./language";

/** Renders the whole page to HTML. Used at build time by scripts/prerender.js. */
export function render(language) {
    return renderToString(createElement(StrictMode, null, createElement(App, { initialLanguage: language })));
}
