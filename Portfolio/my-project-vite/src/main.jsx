import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { resolveLanguage } from "./language";

const container = document.getElementById("root");

// index.html's boot script has already picked the language and written it to <html lang>.
const language = resolveLanguage(document.documentElement.lang);

const app = (
  <StrictMode>
    <App initialLanguage={language} />
  </StrictMode>
);

// The build ships the page already rendered (scripts/prerender.js). Reuse that HTML when it is
// in the visitor's language; otherwise render from scratch (the boot script kept it hidden).
if (container.dataset.prerendered === language) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
