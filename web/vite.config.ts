import { promises as fs } from "node:fs";
import { resolve } from "node:path";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import Sitemap from "vite-plugin-sitemap";
import type { Plugin } from "vite";
import { createServer, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function prerenderPlugin(): Plugin {
  let outDir = "dist";
  return {
    name: "vite-plugin-prerender-ssg",
    apply: "build",
    enforce: "post",
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      const ssrServer = await createServer({
        server: { middlewareMode: true },
        appType: "custom",
      });
      try {
        const mod: unknown = await ssrServer.ssrLoadModule("/src/App.tsx");
        if (
          !mod ||
          typeof mod !== "object" ||
          !("App" in mod) ||
          typeof mod.App !== "function"
        ) {
          throw new Error("Failed to load App component from /src/App.tsx");
        }
        const App = mod.App as React.ComponentType;
        const appHtml = renderToString(createElement(App));
        const indexPath = resolve(outDir, "index.html");
        const html = await fs.readFile(indexPath, "utf-8");
        const target = '<div id="root"></div>';
        if (!html.includes(target)) {
          throw new Error(`Prerender target '${target}' not found in ${indexPath}`);
        }
        const updatedHtml = html.replace(target, `<div id="root">${appHtml}</div>`);
        await fs.writeFile(indexPath, updatedHtml, "utf-8");
      } finally {
        await ssrServer.close();
      }
    },
  };
}
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: "https://cronyxlabs.com",
      changefreq: "monthly",
      priority: 1.0,
      generateRobotsTxt: false,
    }),
    prerenderPlugin(),
  ],
  build: {
    target: "es2022",
    cssMinify: "lightningcss",
    reportCompressedSize: true,
    // Single-page marketing site: one JS chunk beats HTTP round-trips.
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    port: 5173,
  },
});
