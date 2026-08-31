# Cloudflare-project, KV en de eerste deploy

Type: task
Status: open
Blocked by: 03, 08, 10, 11

## Question

Zet het live. Dit is de bestemming van de map: klaar wanneer je de URL aan iemand kunt sturen.

1. Cloudflare-project aanmaken voor de SvelteKit-app op Workers Static Assets
2. KV-namespace aanmaken en binden aan zowel de app als `workers/refresh/`
3. Het domein uit het domeinnaam-ticket koppelen; nameservers en DNS controleren
4. De cron-trigger activeren en één keer handmatig laten draaien
5. Deployen en controleren dat `/`, `/de-lijst` en `/api/snapshot` doen wat ze moeten

**Eindmeting op echte hardware**, niet alleen in een geëmuleerde viewport: een iPhone SE
(2020) of een midrange Android uit ~2019. De 4×-throttling-test was een benadering; dit is de
echte toets.

⚠️ **Externe afhankelijkheid die dit ticket blokkeert en niet in deze map wordt opgelost.**
Het natrekken van de ~40 handmatige bedragen is een aparte redactionele inspanning (zie Out of
scope op de map). Dit ticket mag niet als af gelden zolang `data/hoofdstukken.yaml` en
`data/markers.yaml` niet-geverifieerde cijfers bevatten, omdat de Hoofdstukken hun bron ín
beeld tonen. Een bronvermelding naast een niet-nagetrokken getal is erger dan geen
bronvermelding.

Voordat je live gaat, loop expliciet na: staat er onder elk Hoofdstuk een bron die klopt bij
het getal ernaast? Zo nee, dan wacht de deploy op die andere inspanning — en dat is de juiste
uitkomst, geen blokkade om omheen te werken.
