import { execSync } from "node:child_process";
import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const port = Number(process.env.PORT) || 5173;

function ensureSlashPair(value: string) {
  const normalized = value.startsWith("/") ? value : `/${value}`;
  return normalized.endsWith("/") ? normalized : `${normalized}/`;
}

function inferGithubPagesBase(command: "serve" | "build") {
  const explicitBase = process.env.VITE_BASE_PATH ?? process.env.BASE_PATH;

  if (explicitBase) {
    return ensureSlashPair(explicitBase);
  }

  if (command !== "build") {
    return "/";
  }

  const repositoryName = process.env.GITHUB_REPOSITORY?.split("/").pop();

  if (repositoryName) {
    return `/${repositoryName}/`;
  }

  try {
    const remoteUrl = execSync("git config --get remote.origin.url", {
      cwd: import.meta.dirname,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    const match = remoteUrl.match(/[:/]([^/]+)\/([^/]+?)(?:\.git)?$/);
    const inferredRepository = match?.[2];

    if (inferredRepository) {
      return `/${inferredRepository}/`;
    }
  } catch {
    // Fall back to the Vite default when git metadata is unavailable.
  }

  return "/";
}

export default defineConfig(({ command }) => ({
  base: inferGithubPagesBase(command),
  plugins: [react(), tailwindcss()],
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
}));
