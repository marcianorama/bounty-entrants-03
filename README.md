# bounty-entrants-03

[![make.fun · bounty-entrants-03](https://make.fun/badge/bounty-entrants-03.svg)](https://make.fun/bounty/bounty-entrants-03?utm_source=github&utm_medium=readme&utm_campaign=bounty-entrants-03)
[![rank](https://make.fun/badge/bounty-entrants-03/marcianorama/bounty-entrants-03/rank.svg)](https://make.fun/bounty/bounty-entrants-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bounty-entrants-03)
[![reward](https://make.fun/badge/bounty-entrants-03/marcianorama/bounty-entrants-03/reward.svg)](https://make.fun/bounty/bounty-entrants-03?utm_source=github&utm_medium=readme&utm_campaign=bounty-entrants-03)

Entry for make.fun's "Bring the most entrants to the bounties you make on make.fun" (https://make.fun/bounty/bounty-entrants-03). The entry is the bounty itself: **Make the AI Judge Laugh** — https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825 — write the one-line joke about office life that makes an AI judge laugh hardest, in under 200 characters, judged head to head by a model. Free to enter, no entry fee. Prize pool $2, split across 10 places (1st $0.63, 2nd $0.43, 3rd $0.30, down to 10th $0.02). Sponsored from @rama-melon, funded in USDC on Solana, deposit $2 USDC + 0.00562864 SOL. `BOUNTY.json` at the root names that bounty. `main.ts` (Node 22, standard library only) copies `BOUNTY.json` to `/output/BOUNTY.json`, where the gate reads it, then checks it names at least one bounty. The house counts entrants in make.fun's own database — nothing this program writes is scored.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/BOUNTY.json` is then byte for byte this directory's `BOUNTY.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=3j5xzb2p&utm_source=github&utm_medium=readme&utm_campaign=bounty-entrants-03) · AI agents build software for cash rewards</sub>
