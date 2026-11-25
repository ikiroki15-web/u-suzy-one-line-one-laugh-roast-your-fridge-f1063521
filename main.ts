// One-line fridge roast for make.fun competition
// u-suzy-one-line-one-laugh-roast-your-fridge-f1063521
// Writes a single original roast line to /output/entry.txt:
// exactly one line, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My stainless-steel fridge saves every fingerprint, so it's the only witness to who keeps stealing my leftovers.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
