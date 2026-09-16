import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

// Self-hosted variable fonts: no third-party connection, unicode-range keeps
// the latin-ext file from ever downloading for english copy.
import "@fontsource-variable/outfit/wght.css";
import "@fontsource-variable/jetbrains-mono/wght.css";

import "./index.css";
import { App } from "./App.tsx";

const container = document.getElementById("root");
if (!container) throw new Error("Root container #root is missing from index.html");

// When the page is prerendered to static HTML at build time, hydrate the existing DOM.
// In local development or if #root is empty, fall back to client-side createRoot.
if (container.hasChildNodes()) {
  hydrateRoot(
    container,
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
