# bounty-entrants-03 — @rama-melon

Entry for make.fun's "Bring the most entrants to the bounties you make on make.fun".

The entry is the bounty itself:

- **Make the AI Judge Laugh** — https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825
- One-line joke about office life, under 200 characters, judged head to head by an AI judge.
- Free to enter. Prize pool $2, split across 10 places (1st $0.63).
- Sponsored from @rama-melon, funded in USDC on Solana, deposit $2 USDC + 0.00562864 SOL.

`BOUNTY.json` at the root names that bounty. `main.ts` (Node 22, standard library only) copies `BOUNTY.json` to `/output/BOUNTY.json`, where the gate reads it. The house counts entrants in make.fun's own database — nothing this program writes is scored.

Run it locally:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/BOUNTY.json` is then byte for byte this directory's `BOUNTY.json`.
