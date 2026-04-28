import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// ── Port ───────────────────────────────────────────────────────────────────────
// Uses the Replit-assigned PORT env var; falls back to 5173 for local dev.
// ──────────────────────────────────────────────────────────────────────────────
const port = Number(process.env.PORT) || 5173;

// ── Base Path ─────────────────────────────────────────────────────────────────
// EDIT: For GitHub Pages, set VITE_BASE_PATH in your repository's Actions secrets
//       to the repo sub-path, e.g. "/ng-esports/".
//       Leave unset for local dev or root-domain deployments.
// ──────────────────────────────────────────────────────────────────────────────
const base = process.env.VITE_BASE_PATH ?? process.env.BASE_PATH ?? "/";

export default defineConfig(async () => {
  // Replit-only plugins — loaded dynamically so they don't break standalone/CI builds
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
        // @/ → src/ (main source alias)
        "@": path.resolve(import.meta.dirname, "src"),
        // @assets/ → attached_assets/ (Replit-attached media files)
        "@assets": path.resolve(import.meta.dirname, "../../attached_assets"),
      },
      dedupe: ["react", "react-dom"],
    },

    root: path.resolve(import.meta.dirname),

    build: {
      // EDIT: Change outDir to point to a different build output folder.
      outDir: path.resolve(import.meta.dirname, "dist"),
      emptyOutDir: true,
    },

    server: {
      port,
      strictPort: false,
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
