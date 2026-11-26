// The Word You'd Delete From the Dictionary
// Writes exactly one word to erase from the dictionary forever to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// The pick: "Moist" — the word everyone loves to hate. The joke lands the
// instant the word is gone: cakes, soil and eyes all lose their one word,
// and the humour is in the sound of the word itself, not in any shock value.
const line = "Moist";

// Gate guard: exactly one word, 1-77 characters (counted with the trailing
// newline), letters only — the entry must be exact, one word, spelled
// correctly, with nothing added around it.
if (
  !/^[A-Za-z]+$/.test(line) ||
  line.length === 0 ||
  line.length + 1 > 77
) {
  throw new Error(`entry line breaks the gate: ${line.length} characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
