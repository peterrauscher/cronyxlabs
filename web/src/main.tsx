import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

// Self-hosted variable fonts: no third-party connection, unicode-range keeps
// the latin-ext file from ever downloading for english copy.
import "@fontsource-variable/outfit/wght.css";
import "@fontsource-variable/jetbrains-mono/wght.css";

import "./index.css";
import { App } from "./App.tsx";

const container = document.getElementById("root");
if (!container) throw new Error("Root container #root is missing from index.html");

type CreateRootFn = typeof ReactDOMClient.createRoot;
const createRoot: CreateRootFn =
  ReactDOMClient.createRoot ??
  (ReactDOMClient as unknown as { default: { createRoot: CreateRootFn } }).default?.createRoot;

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
