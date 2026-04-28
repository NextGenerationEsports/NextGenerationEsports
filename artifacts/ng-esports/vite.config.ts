import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import type { PluginOption, UserConfig } from "vite";

const port = Number(process.env.PORT) || 5173;
const base = process.env.VITE_BASE_PATH ?? process.env.BASE_PATH ?? "/";

export default (async (): Promise<UserConfig> => {
  const replitPlugins: PluginOption[] = [];

  if (process.env.REPL_ID !== undefined) {
    replitPlugins.push((await import("@replit/vite-plugin-runtime-error-modal")).default());

    if (process.env.NODE_ENV !== "production") {
      replitPlugins.push(
        (await import("@replit/vite-plugin-cartographer")).cartographer({
          root: path.resolve(import.meta.dirname, ".."),
        }),
      );
      replitPlugins.push((await import("@replit/vite-plugin-dev-banner")).devBanner());
    }
  }

  return {
    base,
    plugins: [react(), tailwindcss(), ...replitPlugins],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "src"),
        "@assets": path.resolve(import.meta.dirname, "../../attached_assets"),
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
})();
