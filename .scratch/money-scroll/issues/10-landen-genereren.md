# markers.auto.yaml genereren uit World Bank

Type: task
Status: open
Blocked by: 09

## Question

Bouw `npm run genereer:landen` en draai hem één keer. Het resultaat wordt gecommit en is
daarna gewoon met de hand te bewerken — de opdrachtgever bezit dat bestand, het script vult
het alleen de eerste keer.

Bron, getest en werkend zonder sleutel:
`api.worldbank.org/v2/country/all/indicator/NY.GDP.MKTP.CD?format=json&mrnev=1&per_page=300`
→ 200, 261 rijen, data t/m 2025.

Het script:
1. Haalt op
2. **Filtert aggregaten weg op een echte ISO-3166 alpha-3-lijst.** Rijen als
   `ZH / Africa Eastern and Southern` zijn geen landen. Doe dit niet op een heuristiek —
   een aggregaat dat doorglipt staat straks als "land" op de site
3. Rekent om naar euro's tegen de koers van dát moment en **zet die vast**; alleen de live
   vermogens worden dagelijks omgerekend, Markers niet
4. Schrijft `data/markers.auto.yaml` met koers en datum in de kop

Waarom dit géén dagelijkse cron is: BBP verandert één keer per jaar. Dagelijks ophalen levert
alleen het risico op dat een stille datarevisie een Marker verplaatst zonder dat iemand het ziet.

**Draai daarna `check:markers`.** Dit ticket moet de Leegte-regel waarmaken in het gebied waar
hij het zwaarst onder druk staat: tussen de nummer twee (5,28 mln px) en De Top (16,30 mln px)
zit 11 miljoen pixels, ruim drie uur. Daar liggen ~25 landen tussen €243 en €750 mld. Blijkt
dat niet genoeg, dan is dat een bevinding voor de resolutie.

Klaar wanneer: het bestand is gecommit, opgeschoond, en `check:markers` slaagt.
