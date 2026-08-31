# Cron-Worker, Snapshot en de drielaagse fallback

Type: task
Status: open
Blocked by: 09, 13

## Question

Bouw de dagelijkse verversing. Geblokkeerd door de ToS-vraag over Forbes: is dat antwoord
"nee", dan verandert de bron en is dit ticket een ander ticket.

Een **aparte Worker** in `workers/refresh/` met eigen `wrangler.jsonc`, die naar een gedeelde
KV-namespace schrijft. Bewust los van de SvelteKit-app, om niet te vechten met de
`scheduled`-afhandeling van de adapter. Raadpleeg `wrangler` en `workers-best-practices`.

Dagelijks, en verder niets:

1. `GET forbesapi/…?fields=personName,finalWorth,rank,source,countryOfCitizenship&limit=25`
   ⚠️ **`finalWorth` staat in miljoenen USD.** `873112.808` = $873,1 mld. Dit is dé plek om er
   een factor 1.000.000 naast te zitten; schrijf er een regressietest voor.
2. `GET ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml` → USD-koers parsen
3. Vermogens naar EUR, samenvoegen met de drie YAML-bestanden, Hoogtes berekenen, sorteren
4. Snapshot met datumstempel naar KV

World Bank zit hier **niet** in; dat is een eenmalig genereerscript.

**Drielaagse fallback, want de site mag nooit stuk zijn:** Forbes faalt → laatste goede
Snapshot in KV blijft staan. KV faalt → de in de HTML ingebakken fallback. Beide → de site
draait gewoon, met een oudere datumstempel zichtbaar in beeld.

**Onveranderlijkheid**: de client laadt precies één Snapshot per sessie en ververst nooit
tijdens de Klim. Anders verschuift de grond onder iemand die al veertig minuten bezig is.

Let op de CORS-muur: Forbes stuurt geen `access-control-allow-origin`. De browser kán er niet
bij — deze Worker is niet een optimalisatie maar de enige route.

Klaar wanneer: de cron draait, de Snapshot verschijnt in KV, en alle drie de fallback-lagen
zijn aantoonbaar getest (niet alleen bedacht).
