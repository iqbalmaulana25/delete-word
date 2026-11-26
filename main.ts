// The Word You'd Delete From the Dictionary
// Writes exactly one word to erase from the dictionary forever to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line = "Synergy";

// Gate guard: exactly one word, 1-77 characters (counted with the trailing newline).
if (/\s/.test(line.trim()) || line.trim().length === 0 || line.length + 1 > 77) {
  throw new Error(`entry line breaks the gate: ${line.length} characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
