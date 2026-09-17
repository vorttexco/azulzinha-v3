/**
 * Cross-platform static export (Windows / macOS / Linux).
 * Usage: node scripts/build-export.mjs <static|prod>
 */
import { spawnSync } from "node:child_process";
import { cpSync, existsSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const mode = process.argv[2];

if (mode !== "static" && mode !== "prod") {
  console.error("Usage: node scripts/build-export.mjs <static|prod>");
  process.exit(1);
}

const envKey = mode === "static" ? "STATIC_EXPORT" : "STATIC_EXPORT_PROD";
const nextCli = join(root, "node_modules", "next", "dist", "bin", "next");

if (!existsSync(nextCli)) {
  console.error("Next.js CLI not found. Run npm install first.");
  process.exit(1);
}

const build = spawnSync(process.execPath, [nextCli, "build"], {
  cwd: root,
  env: { ...process.env, [envKey]: "true" },
  stdio: "inherit",
});

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

if (mode === "prod") {
  const outDir = join(root, "out");
  const distDir = join(root, "dist");

  if (!existsSync(outDir)) {
    console.error("Static export did not produce an out/ directory.");
    process.exit(1);
  }

  rmSync(distDir, { recursive: true, force: true });
  cpSync(outDir, distDir, { recursive: true });
  rmSync(outDir, { recursive: true, force: true });
  console.log("Copied out/ -> dist/");
}
