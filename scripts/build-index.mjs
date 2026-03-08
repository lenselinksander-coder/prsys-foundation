// scripts/build-index.mjs
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.join(__dirname, "..");
const LIBRARY_DIR = path.join(ROOT, "foundation", "library");
const INDEX_PATH = path.join(LIBRARY_DIR, "index.json");

async function buildIndex() {
  const categories = await fs.promises.readdir(LIBRARY_DIR);
  const index = {};

  for (const category of categories) {
    const categoryPath = path.join(LIBRARY_DIR, category);
    const stat = await fs.promises.stat(categoryPath);
    if (!stat.isDirectory()) continue;

    const files = await fs.promises.readdir(categoryPath);
    index[category] = files
      .filter(f => f !== ".gitkeep")
      .map(file => ({
        name: file,
        title: path.basename(file, path.extname(file)),
        ext: path.extname(file).toLowerCase(),
        path: `${category}/${file}`,
      }));
  }

  await fs.promises.writeFile(INDEX_PATH, JSON.stringify(index, null, 2), "utf-8");
  console.log(`Index written to foundation/library/index.json`);
}

buildIndex().catch(err => {
  console.error("Build index failed:", err);
  process.exit(1);
});
