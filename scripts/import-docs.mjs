// scripts/import-docs.mjs
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { taogateClassify } from "./taogate-classify.mjs";
import pdfParse from "pdf-parse";
import mammoth from "mammoth";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.join(__dirname, "..");
const IMPORT_DIR = path.join(ROOT, "foundation", "import");
const LIBRARY_DIR = path.join(ROOT, "foundation", "library");

const allowedExt = [".pdf", ".docx"];

async function main() {
  const files = await fs.promises.readdir(IMPORT_DIR);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!allowedExt.includes(ext)) continue;

    const sourcePath = path.join(IMPORT_DIR, file);
    const title = path.basename(file, ext);

    let textSample = "";
    if (ext === ".pdf") {
      const buffer = await fs.promises.readFile(sourcePath);
      const parsed = await pdfParse(buffer);
      textSample = parsed.text.slice(0, 2000);
    } else if (ext === ".docx") {
      const buffer = await fs.promises.readFile(sourcePath);
      const result = await mammoth.extractRawText({ buffer });
      textSample = result.value.slice(0, 2000);
    }

    // Taogate bepaalt waar dit thuishoort
    const classification = await taogateClassify({ title, text: textSample });

    const category = classification.category || "governance";
    const destDir = path.join(LIBRARY_DIR, category);

    await fs.promises.mkdir(destDir, { recursive: true });

    const destPath = path.join(destDir, file);
    await fs.promises.rename(sourcePath, destPath);

    console.log(`Imported "${file}" → ${category}`);
  }
}

main().catch(err => {
  console.error("Import failed:", err);
  process.exit(1);
});
