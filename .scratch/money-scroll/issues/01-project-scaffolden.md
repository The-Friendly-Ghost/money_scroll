# Project scaffolden

Type: task
Status: claimed

## Question

Zet het lege project op volgens de BySvelte-standaard, zodat elk volgend ticket ergens in kan
werken.

Roep de `bysvelte-new-project` skill aan. Stack: SvelteKit 2 + Svelte 5 runes, JS met JSDoc,
native CSS, Cloudflare Workers Static Assets. Referentie-implementaties staan in
`~/BySvelte/OutdoorCinema` en `~/BySvelte/ZAP-Foundation`.

**Let op deze twee dingen, ze zijn makkelijk te missen:**

1. `sv create` genereert een `.gitignore`. **`.scratch/` mag daar niet in** — dat is de
   wayfinder-map en die moet een clone overleven. Zie het waarschuwingsblok in
   `docs/agents/issue-tracker.md`.
2. De repo heeft nog geen enkele commit. Maak er één zodra het scaffold staat, anders kan
   niets in deze map naar een branch of een diff verwijzen.

Laat `CLAUDE.md`, `CONTEXT.md` en `docs/agents/` intact staan; die zijn er al.

Klaar wanneer: `npm run dev` draait, `npm run build` slaagt, en er staat een eerste commit.
