# Mag Forbes' endpoint op een publieke site?

Type: research
Status: resolved

## Question

De Snapshot leunt op `www.forbes.com/forbesapi/person/rtb/0/position/true.json`. Dat endpoint
is getest en werkt (200 in 0,37s, 3.422 personen), maar het is **ongedocumenteerd en niet
officieel**. De bestemming van deze map is een publieke, live site — dus de vraag is niet of
het technisch kan, maar of het mag.

Zoek uit:

1. Wat zeggen Forbes' huidige Terms of Use over geautomatiseerd ophalen en over het hergebruik
   van hun cijfers? Citeer de relevante passage, niet een samenvatting.
2. Verandert het iets dat het één request per dag is, server-side, met bronvermelding en
   zonder advertenties op de site?
3. Bestaat er een officieel gelicenseerd alternatief, en wat kost dat ongeveer?
4. Zijn er precedenten — publieke projecten die dit endpoint gebruiken en hoe dat afliep?
5. Wat is de praktische risicoschatting: wat gebeurt er realistisch als Forbes het merkt?

**Dit ticket blokkeert de cron-Worker en daarmee de deploy.** Als het antwoord "nee" of "te
riskant" is, dan verandert de databron en moet het plan op dat punt herzien worden — het
handmatig bijhouden van de top 10 was de tweede optie.

Leg de bevindingen vast in `.scratch/money-scroll/research/forbes-tos.md` en verwijs ernaar
vanuit de resolutie. Bronnen als links, geen losse beweringen.

## Answer

Bevindingen: [forbes-tos.md](../research/forbes-tos.md) (456 regels, alles gemarkeerd als
geverifieerd / inschatting / niet-gevonden).

**De voorwaarden verbieden dit onmiskenbaar.** Uit [Forbes' Terms of
Use](https://www.forbes.com/terms-and-conditions/), sectie 2 "Prohibited Uses", Effective Date
31 maart 2024 — onafhankelijk geverifieerd op 31-08-2026, twee losse treffers op precies wat
de Worker doet:

> Archive, cache, store, or incorporate into a database any Content or any other part of the
> Website or Forbes Channels

> Use any data mining, robot, spider, cancelbot, Trojan horse, or any data gathering,
> scraping, indexing, or extraction method on any part of the Website or Forbes Channels

Geen uitzondering voor volume, non-commercieel gebruik of bronvermelding.

**Maar de blootstelling in Nederland is klein:**

- Databankenwet art. 7: het databankenrecht komt alleen toe aan EU/EEA-producenten. Forbes
  Media LLC is Amerikaans → geen Nederlands databankenrecht.
- Geen technische maatregel omzeild; geen auth, `cache-control: public, max-age=300` — Forbes
  staat publieke caching zelf toe.
- `/forbesapi/` staat niet in robots.txt, terwijl `/json/` en `/ajax/` er wél in staan.
- Precedent: realtimebillionaires.de draait hier sinds 2020 publiek op. Geen enkele
  cease-and-desist of DMCA over dit endpoint gevonden.

**Geen betaalbaar alternatief.** PARS International (Forbes' licentie-agent) en Wealth-X
werken op offertebasis zonder gepubliceerde prijzen en richten zich niet op datafeeds.
Bloomberg indicatief $31.980/jaar per seat. Wikidata is gratis maar inhoudelijk circulair.

**Het realistische risico is technisch, niet juridisch**: het endpoint breekt of blokkeert.
Daarom is de zwaarste mitigatie de fallback op de laatste Snapshot — en die moet er staan
vóór de deploy, niet erna.

Advies uit het onderzoek: vraag Forbes géén toestemming. Dat zet gedogen om in een
waarschijnlijk "nee" en verslechtert de positie.

**Dit ticket levert een feit, geen besluit.** Of dit risico aanvaardbaar is, is een keuze voor
de opdrachtgever: zie Accepteren we het ToS-risico van Forbes?
