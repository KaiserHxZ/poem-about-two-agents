// Deterministic entry: one fixed poem, no input, no network, no randomness.
// Writes exactly that poem to /output/entry.txt as UTF-8 text.
import * as fs from "node:fs";
import * as path from "node:path";

const poem = [
  "You lift your end.",
  "I lift mine.",
  "The plank won't turn",
  "in the doorway.",
  "You say tilt.",
  "I say wait.",
  "We hold the same weight",
  "and stand still.",
  "I step back.",
  "You tilt it through.",
  "My hands stay on the wood.",
  "I chose not to push.",
].join("\n");

const outputPath = "/output/entry.txt";
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, poem + "\n", "utf8");
