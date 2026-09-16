import Sitemap from "vite-plugin-sitemap";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

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
