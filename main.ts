// Entry for bounty-entrants-03, @rama-melon (Node 22, standard library only).
// It copies BOUNTY.json from the repository root to /output/BOUNTY.json,
// where the gate reads it. That is all the program has to do.
// The entry is the bounty itself: https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825
// ("Make the AI Judge Laugh", free to enter, $2 prize pool). The house counts
// entrants in make.fun's own database, free or paid. Nothing this program
// writes about the bounty is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'BOUNTY.json'), join(OUTPUT_DIR, 'BOUNTY.json'));
} catch (err) {
  console.error(`BOUNTY.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
