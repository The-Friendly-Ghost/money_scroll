# money_scroll

## Agent skills

### Issue tracker

Issues en specs leven als markdown onder `.scratch/`. Zie `docs/agents/issue-tracker.md`.

### Triage labels

Standaard vocabulaire (`needs-triage`, `needs-info`, `ready-for-agent`,
`ready-for-human`, `wontfix`). Zie `docs/agents/triage-labels.md`.

### Domain docs

Single-context: `CONTEXT.md` en `docs/adr/` in de repo-root. Zie `docs/agents/domain.md`.

## Stack

| Laag      | Keuze                                                                                                                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Framework | SvelteKit 2 + Svelte 5 (runes, geforceerd via `compilerOptions.runes`)                                                                                                                           |
| Taal      | **JavaScript + JSDoc** — geen TypeScript                                                                                                                                                         |
| Styling   | Native CSS met custom properties. Geen framework, geen SCSS, geen PostCSS                                                                                                                        |
| UI        | Bits UI (headless) — bouw componenten niet vanaf nul                                                                                                                                             |
| Hosting   | Cloudflare **Workers Static Assets** via `@sveltejs/adapter-cloudflare`                                                                                                                          |
| Deploy    | **Workers Builds** — push naar `main` bouwt automatisch (nog niet aangesloten, zie [Cloudflare-project, KV en de eerste deploy](.scratch/money-scroll/issues/12-cloudflare-en-eerste-deploy.md)) |

## NOOIT doen

Deze regels zijn projectonafhankelijk vastgesteld op OutdoorCinema en ZAP Foundation — niet
heropenen zonder reden die voor dit specifieke project geldt.

- **Geen `postcss.config.js` / autoprefixer toevoegen.** Vite 8 minificeert al met Lightning CSS
  (`build.cssMinify: 'lightningcss'` is de default). `postcss-html` in de devDeps is _alleen_ voor
  stylelint-parsing, geen buildstap.
- **`css.transformer: 'lightningcss'` niet aanzetten** in `vite.config.js` — die draait vóór
  vite-plugin-svelte en breekt `:global(...)` in Svelte `<style>`-blokken
  ([vite-plugin-svelte#1074](https://github.com/sveltejs/vite-plugin-svelte/issues/1074)).
- **Geen TypeScript** introduceren — JSDoc met `checkJs: true`.
- **Geen CSS-framework** (Tailwind e.d.).
- **De project-Cloudflare-MCP's nooit naar kale `cloudflare*`-namen hernoemen** — zie `.mcp.json`.
  Claude Code sleutelt MCP OAuth-tokens globaal op `<servernaam>|<url-hash>`, niet per project;
  kale namen laten dit project het Cloudflare-account van een ander BySvelte-project overnemen.
- **Niet committen of pushen** tenzij de developer daar expliciet om vraagt.

## Afwijkingen t.o.v. de Svelte CLI-scaffold die je kunt tegenkomen

- **Er is géén `svelte.config.js`.** De SvelteKit-config zit als _plat_ `KitConfig`-object direct
  in de `sveltekit()`-plugin in `vite.config.js` — dus `adapter`, `paths`, `prerender` als
  top-level keys van dat object, niet genest onder `kit: {}`.
- Prettier-config heet `prettier.config.js` (niet `.prettierrc`), met `singleAttributePerLine: true`.
- Git hooks worden geïnstalleerd door `scripts/install-hooks.js` (via `prepare`), niet door Husky.

## Conventies

- Svelte 5 runes: `$state`, `$props()`, `$derived`. Geen Svelte 4 stores in componenten.
- **CSS-classes: kebab-case BEM** (`.card__title`). Property-volgorde wordt afgedwongen door
  `stylelint-config-clean-order/error` — fix met `npm run lint:css:fix`.
- Class-binding via array-syntax, niet `class:`-directives:
  `class={['hero', fullWidth && 'hero--full-width']}`
- Bits UI stylen via `data-*`-attributen en `:global(.blok__element)`.
- Comments alleen waar het _waarom_ niet vanzelf spreekt.
- Tests staan naast de code: `foo.test.js` naast `foo.js`.

## Migratievallen

Niet van toepassing: dit is geen vervanging van een bestaande site.
