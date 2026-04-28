const fs = require("fs");
const path = require("path");

for (const lockfile of ["package-lock.json", "yarn.lock"]) {
  fs.rmSync(path.join(process.cwd(), lockfile), { force: true });
}

const userAgent = process.env.npm_config_user_agent ?? "";

if (!userAgent.startsWith("pnpm/")) {
  console.error("Use pnpm instead");
  process.exit(1);
}
