---
label: wayfinder:map
effort: money-scroll
---

# Money Scroll — de weg naar live

## Destination

De site staat **live op een eigen domein**: de Klim werkt soepel op oude toestellen, de
Snapshot ververst dagelijks vanzelf, `/de-lijst` is bruikbaar zonder muis, en er is een
deelbare prestatiekaart. Bereikt betekent: je kunt de URL aan iemand sturen.

## Notes

**Uitvoering hoort in deze map.** Dit overschrijft wayfinder's standaard "produce decisions,
not deliverables". De ontwerpbeslissingen zijn grotendeels al genomen in vijf grillingrondes;
wat overblijft is bouwen, plus een handvol vragen die pas te beantwoorden zijn als je iets
ziet. Een `task`-ticket dat daadwerkelijk code oplevert is hier dus geen scope-fout.

**Het plan bestaat al**: `~/.claude/plans/ik-wil-een-website-parsed-pelican.md`. Het bevat de
geverifieerde bronnen, de rekentabellen, de architectuur en twaalf bouwstappen die de
natuurlijke sessiegrenzen vormen. Lees dat voordat je een ticket oppakt; herhaal het niet.

**Woordenschat**: `CONTEXT.md` in de repo-root. Gebruik Klim, Loopband, Hoogte, Pixelwaarde,
Hoofdstuk, Marker, Leegte, De Top, Epiloogzone, Snapshot, Voortgang. Een Hoofdstuk en een
Marker zijn twee begrippen, geen vlag op één begrip.

**Skills om te raadplegen**: `bysvelte-new-project` (scaffold), `web-perf` en
`chrome-devtools-mcp:chrome-devtools` (de performance-poort), `wrangler` en
`workers-best-practices` (de cron-Worker), `mattpocock-skills:tdd` (de rekenkern).

**Harde eis, geldt overal**: 60fps tijdens scrollen bij 4× CPU-throttling, op iPhone SE (2020)
/ Safari 15+ en een midrange Android uit ~2019.

## Decisions so far

<!-- één regel per gesloten ticket -->

- [Mag Forbes' endpoint op een publieke site?](issues/04-mag-forbes-op-een-publieke-site.md):
  Forbes' voorwaarden verbieden archiveren én scrapen ondubbelzinnig (sectie 2, geverifieerd),
  maar de blootstelling in NL is klein — geen databankenrecht voor een Amerikaanse producent,
  geen maatregel omzeild, precedent sinds 2020. Geen betaalbaar alternatief. Het besluit
  hierover is een eigen ticket.

## Not yet specified

- **Hoe `/de-lijst` eruitziet** en wat er precies in de tabel staat. Hangt op de visuele taal
  die Hoe zien een Hoofdstuk en een Marker eruit? oplevert.
- **De deelkaart**: wat erop staat, hoe hij eruitziet, en of de prestatie te vervalsen mag zijn.
- **De hervat-dialoog**: de precieze woorden, en wat je toont wanneer De Top sinds het vorige
  bezoek is gedaald.
- **Het eindscherm**: wat er gebeurt als iemand De Top daadwerkelijk bereikt. Nu volstrekt
  onbepaald, terwijl het de payoff van het hele project is.
- **De donkere variant**: hoe het klinische wit/zwart/accent-palet omklapt zonder z'n
  datajournalistieke karakter te verliezen.
- **`prefers-reduced-motion` in detail**: hoe de rustige teller zich precies gedraagt.
- **Meten of mensen doorklimmen**: of er analytics komt, en zo ja wat je wilt weten zonder
  bezoekers te volgen.

## Out of scope

- **Het natrekken van de ~40 handmatige bedragen en de beurswaardes.** Aparte redactionele
  inspanning, bewust buiten deze map gehouden.
  ⚠️ **Afhankelijkheid**: Cloudflare-project, KV en de eerste deploy mag niet als af gelden
  zolang die cijfers ontbreken. De Hoofdstukken tonen hun bron ín beeld, en een
  bronvermelding naast een niet-nagetrokken getal is erger dan geen bronvermelding.
- **Engelse vertaling.** v1 is Nederlands; de structuur is wel EN-klaar (stringsbestand,
  `label: { nl }`), zodat het later een dag werk is in plaats van een herbouw.
- **Versnelling en fast-travel.** Bewust verworpen: de lineaire schaal ís de boodschap.
