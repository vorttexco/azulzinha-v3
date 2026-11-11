/**
 * Converts every PNG/JPG under public/images to WebP and points src/ at the new files.
 * Safe to run again after adding new images: only PNG/JPG files still present are processed.
 *
 * Usage:
 *   node scripts/optimize-images.mjs          convert, rewrite references, check
 *   node scripts/optimize-images.mjs --check  only check that every /images/ reference exists
 *
 * Not touched: public/assets (Open Graph image), SVG files and remote blog images.
 */
import { createHash } from "node:crypto";
import { existsSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const imagesDir = join(root, "public", "images");
const srcDir = join(root, "src");
const checkOnly = process.argv.includes("--check");

const RASTER = new Set([".png", ".jpg", ".jpeg"]);
const MAX_WIDTH = 2560;
const LOSSY_QUALITY = 82;
/** Small flat graphics (logos, icons) are often smaller as lossless WebP. */
const LOSSLESS_TRY_BELOW_BYTES = 300 * 1024;
/** Lines with these markers hold images that are not in public/images. */
const SKIP_LINE = /\/assets\/img|postId/;

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function hash(file) {
  return createHash("sha1").update(readFileSync(file)).digest("hex");
}

function mb(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

async function toWebp(file) {
  const input = readFileSync(file);
  const pipeline = () =>
    sharp(input).rotate().resize({ width: MAX_WIDTH, withoutEnlargement: true });
  let output = await pipeline().webp({ quality: LOSSY_QUALITY, alphaQuality: 100, effort: 5 }).toBuffer();
  if (input.length < LOSSLESS_TRY_BELOW_BYTES) {
    const lossless = await pipeline().webp({ lossless: true, effort: 5 }).toBuffer();
    if (lossless.length < output.length) output = lossless;
  }
  return output;
}

async function convertAll() {
  const sources = walk(imagesDir).filter((f) => RASTER.has(extname(f).toLowerCase()));
  const byTarget = new Map();
  for (const file of sources) {
    const target = file.slice(0, -extname(file).length) + ".webp";
    byTarget.set(target, [...(byTarget.get(target) ?? []), file]);
  }

  const conflicts = [];
  for (const [target, files] of byTarget) {
    const distinct = new Set(files.map(hash));
    if (distinct.size > 1 || existsSync(target)) conflicts.push([target, files]);
  }
  if (conflicts.length > 0) {
    console.error("Different images would become the same .webp file. Rename or remove one of each:");
    for (const [target, files] of conflicts) {
      console.error(`  ${relative(root, target)} <- ${files.map((f) => relative(root, f)).join(", ")}`);
    }
    process.exit(1);
  }

  let before = 0;
  let after = 0;
  for (const [target, files] of byTarget) {
    const output = await toWebp(files[0]);
    writeFileSync(target, output);
    for (const file of files) {
      before += statSync(file).size;
      rmSync(file);
    }
    after += output.length;
  }
  console.log(`Converted ${sources.length} files: ${mb(before)} -> ${mb(after)}`);
}

function rewriteReferences() {
  const files = walk(srcDir).filter((f) => /\.(tsx?|css)$/.test(f));
  let changed = 0;
  for (const file of files) {
    const text = readFileSync(file, "utf8");
    const next = text
      .split("\n")
      .map((line) =>
        SKIP_LINE.test(line) ? line : line.replace(/\.(png|jpe?g)(?=["'`)\s?#]|$)/gi, ".webp"),
      )
      .join("\n");
    if (next !== text) {
      writeFileSync(file, next);
      changed += 1;
    }
  }
  console.log(`Rewrote image references in ${changed} source files`);
}

/** Every literal /images/... path in src must exist. Paths built with ${...} are skipped. */
function checkReferences() {
  const missing = [];
  for (const file of walk(srcDir).filter((f) => /\.(tsx?|css)$/.test(f))) {
    const text = readFileSync(file, "utf8");
    for (const match of text.matchAll(/\/images\/[^"'`)\n?#]+\.(?:png|jpe?g|webp|svg|gif|ico)/gi)) {
      const path = match[0];
      if (path.includes("${")) continue;
      if (!existsSync(join(root, "public", decodeURI(path)))) {
        missing.push(`${relative(root, file)}: ${path}`);
      }
    }
  }
  if (missing.length > 0) {
    console.error(`${missing.length} image references point to files that do not exist:`);
    for (const line of missing) console.error(`  ${line}`);
    process.exit(1);
  }
  console.log("Every literal /images/ reference in src/ exists");
}

if (!checkOnly) {
  await convertAll();
  rewriteReferences();
}
checkReferences();
