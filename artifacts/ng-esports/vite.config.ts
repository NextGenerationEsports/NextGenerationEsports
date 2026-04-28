import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// Port: use Replit-assigned PORT if available, otherwise default to 5173
const port = Number(process.env.PORT) || 5173;

// Base path: use VITE_BASE_PATH for GitHub Pages (e.g. "/ng-esports/"),
// fall back to BASE_PATH (Replit), then "/" for local dev
const base = process.env.VITE_BASE_PATH ?? process.env.BASE_PATH ?? "/";

export default defineConfig(async () => {
  // Replit-only plugins — loaded dynamically so they don't break standalone dev
  const replitPlugins =
    process.env.REPL_ID !== undefined
      ? await Promise.all([
          import("@replit/vite-plugin-runtime-error-modal").then((m) => m.default()),
          process.env.NODE_ENV !== "production"
            ? import("@replit/vite-plugin-cartographer").then((m) =>
                m.cartographer({ root: path.resolve(import.meta.dirname, "..") }),
              )
            : null,
          process.env.NODE_ENV !== "production"
            ? import("@replit/vite-plugin-dev-banner").then((m) => m.devBanner())
            : null,
        ]).then((p) => p.filter(Boolean))
      : [];

  return {
    base,

    plugins: [react(), tailwindcss(), ...replitPlugins],

    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "src"),
      },
      dedupe: ["react", "react-dom"],
    },

    root: path.resolve(import.meta.dirname),

    build: {
      outDir: path.resolve(import.meta.dirname, "dist"),
      emptyOutDir: true,
    },

    server: {
      port,
      strictPort: false, // allow Vite to pick another port if busy
      host: "0.0.0.0",
      allowedHosts: true,
    },

    preview: {
      port,
      host: "0.0.0.0",
      allowedHosts: true,
    },
  };
});
