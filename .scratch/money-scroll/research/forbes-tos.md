# Mag het Forbes real-time billionaires endpoint op een publieke site?

> **Branch-notitie:** de repo heeft nog geen enkele commit (`fatal: your current branch 'main'
does not have any commits yet`), dus er kon geen aparte research-branch worden aangemaakt.
> Dit bestand is geschreven op `main`.

Onderzoek uitgevoerd op **31 augustus 2026**. Betreft ticket
`.scratch/money-scroll/issues/04-mag-forbes-op-een-publieke-site.md`.

**Legenda:** ✅ = geverifieerd tegen een primaire bron die ik zelf heb opgehaald ·
🟡 = inschatting/interpretatie van mij · ⬜ = gezocht en niet gevonden.

**Korte samenvatting:** de tekst van Forbes' voorwaarden verbiedt dit ondubbelzinnig. De
juridische blootstelling in Nederland is desondanks klein en het realistische risico is
technisch (het endpoint breekt of blokkeert), niet juridisch. Aanbeveling onderaan:
**doorgaan met mitigaties**, als bewust geaccepteerd risico — niet als "het mag".

---

## 1. Wat zeggen Forbes' huidige Terms of Use letterlijk?

Bron: [Forbes Terms and Conditions](https://www.forbes.com/terms-and-conditions/), opgehaald
31-08-2026 (HTTP 200). De pagina vermeldt zelf: _"Revised and posted as of the Effective Date:
March 31, 2024"_. ✅

### 1a. Sectie 2 — "Prohibited Uses of Website and Forbes Channels"

Letterlijk, inclusief de aanhef en de drie bullets die hier raken (✅):

> By accessing or using the Website and/or Forbes Channels, including any Content, you agree to
> use them only as expressly permitted by these Terms. Unless you have Forbes' prior written
> permission, you shall not:
>
> Alter, copy, rearrange, broadcast, rewrite, redistribute, transfer, sell, republish, modify,
> use for broadcast or publication in any medium, directly or indirectly, any Forbes
> intellectual property, Content or any other part of the Website or Forbes Channels;
>
> […]
>
> Archive, cache, store, or incorporate into a database any Content or any other part of the
> Website or Forbes Channels;
>
> […]
>
> Use any data mining, robot, spider, cancelbot, Trojan horse, or any data gathering,
> scraping, indexing, or extraction method on any part of the Website or Forbes Channels;

Dat zijn drie afzonderlijke treffers op precies wat de Worker doet: geautomatiseerd ophalen,
opslaan in een cache/database, en herpubliceren.

### 1b. Sectie 7 — "Website Security Rules"

Letterlijk (✅):

> You are prohibited from violating or attempting to violate the security of the Website or
> Forbes Channels, including without limitation, (a) accessing data not intended for you or
> logging into a server or account which you are not authorized to access, (b) attempting to
> probe, scan, or test the vulnerability of a system or network, or to breach security or
> authentication measures without proper authorization, (c) attempting to interfere with any
> service to any user, host, or network, including, without limitation, via means of submitting
> a virus to the Website, overloading, "flooding," "mailbombing," or "crashing," (d) forging any
> TCP/IP packet header or any part of the header information in any e-mail, forum, or newsgroup
> posting, or (d) scraping or otherwise collecting data or information through automated means.
> Violations of system or network security may result in civil or criminal liability. Forbes will
> investigate occurrences which may involve such violations and may involve, and cooperate with,
> law enforcement authorities in prosecuting those who are involved in such violations.

(De dubbele "(d)" staat zo in het origineel.) Forbes plaatst scraping dus óók onder
"security violations", met een expliciete verwijzing naar civiele en strafrechtelijke
aansprakelijkheid.

### 1c. Sectie 1.3 — wat wél mag

Letterlijk (✅):

> You may use the Website, Forbes Channels, and Content online and solely for personal,
> non-commercial, and informational/entertainment use, and you may download or print a single
> copy of any downloadable portion of the Content, where permitted, for your personal,
> non-commercial, and informational use, provided you do not remove any trademark, copyright or
> other notice contained in such Content. No other use is permitted without securing the prior
> written consent of Forbes.

Let op de drie begrenzingen: _personal_, _a single copy_, _no other use_. Publiceren op een
website voor derden valt hier buiten, ook zonder advertenties.

### 1d. Sectie 1.1 en 1.2 — Content en merken

Letterlijk (✅):

> […] are protected under applicable copyrights and other proprietary rights and are the
> intellectual property of Forbes and its affiliated companies, licensors and suppliers. Forbes
> actively protects its rights to the Content to the fullest extent of the law. You may not use
> the Content except as expressly provided in these Terms.

> The Content includes logotypes, trademarks and service marks (collectively "Marks") and patents
> owned by Forbes, and Marks owned by other information providers and third parties. For example,
> "Forbes" is a registered trademark of Forbes. No Marks or patents may be used in any manner
> unless approved in advance, in writing by Forbes.

Praktische consequentie: het **Forbes-logo** mag niet op de site. De naam "Forbes" in platte
tekst gebruiken als feitelijke bronvermelding is naar mijn inschatting normaal
merkenrechtelijk toegestaan (nominatief gebruik) ondanks deze clausule, maar dat is 🟡 mijn
interpretatie, geen geverifieerd feit.

### 1e. Sectie 1.5 — advertenties

Letterlijk (✅):

> Access to Content on the Website is possible, in part, due to the paid advertising that appears
> on the Website. In exchange for your access to this Content, and except where contrary to
> applicable law, you agree that you will not, and will not permit any third party to, remove,
> obstruct, modify, or otherwise interfere with the delivery or display of advertisements on the
> Website.

Deze clausule verbiedt letterlijk het blokkeren van advertenties _op Forbes' site_. Een
server-side JSON-call laadt Forbes' advertenties niet, maar "verwijdert" of "belemmert" ze
technisch gesproken ook niet. 🟡 Wel is dit de clausule die de economische logica van sectie 2
blootlegt: Forbes wil dat het lezen van hun cijfers op hún pagina gebeurt.

### 1f. Forum en toepasselijk recht

Letterlijk (✅):

> Governing Law. These Terms and your use of the Services are governed by and shall be construed
> and enforced in accordance with the laws of the State of New York, without giving any regard to
> its conflict of law principles.

Met exclusieve jurisdictie bij _"the State courts of the State of New York or the United States
District Court for the Southern District of New York"_, plus een verplichte arbitrageclausule
en class-action-waiver. De internationale variant voegt toe: _"to the maximum extent permitted
by the mandatory laws in your country of residence"_ — dwingend Nederlands consumentenrecht
gaat dus vóór, maar dat helpt niet tegen het scraping-verbod zelf.

### 1g. Wat er níet in staat

- Het woord "API" komt **nergens** in de Terms voor. ⬜ Er is geen aparte API- of
  developer-overeenkomst gevonden, en geen enkele passage die het `/forbesapi/`-pad noemt.
- Er staat **geen** uitzondering voor lage volumes, niet-commercieel gebruik, bronvermelding of
  onderzoek. De verboden in 2 en 7 zijn onvoorwaardelijk. ✅

### 1h. robots.txt — een tegenwicht, geen toestemming

Opgehaald 31-08-2026 van [forbes.com/robots.txt](https://www.forbes.com/robots.txt) (✅):

- `/forbesapi/` staat **niet** in de Disallow-lijst. Wel expliciet geblokkeerd voor `User-agent: *`
  zijn onder meer `/json/`, `/ajax/`, `/typeahead/`, `/search/`, `/preview/`, `/wui/`.
- Forbes blokkeert per user-agent wel gericht AI-crawlers: `GPTBot`, `ClaudeBot`, `anthropic-ai`,
  `CCBot`, `Bytespider`, `PerplexityBot`, `Amazonbot`, `Diffbot`, `Applebot-Extended`,
  `meta-externalagent`, `FacebookBot`, `omgili` — allemaal `Disallow: /`.
- `Crawl-delay: 2` voor `AhrefsBot`.

🟡 Interpretatie: dit is een actief onderhouden robots.txt met tientallen specifieke regels,
inclusief het blokkeren van andere JSON-achtige paden. Dat `/forbesapi/` er niet in staat is
daarom betekenisvol — maar het is _geen_ toestemming. robots.txt is geen licentie en overrulet
de Terms niet.

---

## 2. Verandert 1×/dag, server-side, met bronvermelding, zonder advertenties er iets aan?

**Contractueel: nee.** ✅ De tekst van sectie 2 en 7 kent geen drempel, geen frequentie, geen
attributie-uitzondering en geen non-commercieel-uitzondering. Sectie 1.3 geeft alleen
toestemming voor _personal, non-commercial_ gebruik en _a single copy_; publiceren voor een
publiek valt daar buiten. Eén request per dag met bronvermelding is volgens de letter van de
voorwaarden precies even verboden als duizend requests per uur.

**Praktisch en juridisch-materieel: ja, aanzienlijk.** Wat het wél verandert:

| Factor                                     | Effect                                                                                                                                                   | Status                     |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 1 req/dag                                  | Geen "unreasonable or disproportionately large load" (de aparte bullet in sectie 2 over serverbelasting wordt niet geraakt). Onzichtbaar in Fastly-logs. | ✅ tekst, 🟡 zichtbaarheid |
| Server-side, geen ad-blocking              | Sectie 1.5 wordt niet letterlijk geschonden.                                                                                                             | 🟡                         |
| Bronvermelding                             | Geen misleiding over herkomst; verwijdert het "passing off"-verwijt en beperkt schade. Weegt mee in een eventuele belangenafweging.                      | 🟡                         |
| Geen advertenties, non-commercieel         | Geen concurrentie met Forbes' verdienmodel; maakt schadevergoeding vrijwel onberekenbaar en een rechtszaak economisch zinloos voor Forbes.               | 🟡                         |
| Alleen namen + bedragen, geen foto's/tekst | Blijft weg van het auteursrechtelijk sterkste materiaal (foto's, redactionele tekst, look and feel — allemaal expliciet "Content" in sectie 1.1).        | ✅ definitie, 🟡 conclusie |

**Nederlandse juridische laag — dit is de belangrijkste bevinding naast de ToS zelf.**

De [Databankenwet](https://wetten.overheid.nl/BWBR0010591) (geldende versie geraadpleegd
31-08-2026), artikel 7, letterlijk (✅):

> Het recht, bedoeld in artikel 2, eerste lid, komt toe aan:
> a. de producent van de databank of zijn rechtverkrijgende die onderdaan is van of zijn gewone
> verblijfplaats heeft op het grondgebied van een lidstaat van de Europese Unie of van een staat
> die partij is bij de Overeenkomst betreffende de Europese Economische Ruimte van 2 mei 1992;
> b. de producent van de databank of zijn rechtverkrijgende die een rechtspersoon is die is
> opgericht overeenkomstig de wetgeving van een lidstaat van de Europese Unie of van een staat
> die partij is bij de Overeenkomst betreffende de Europese Economische Ruimte van 2 mei 1992 en
> haar statutaire zetel, hoofdbestuur of hoofdvestiging heeft binnen het grondgebied van een van
> die staten […]

En artikel 2 lid 1 (het recht zelf), letterlijk (✅):

> De producent van een databank heeft het uitsluitende recht om toestemming te verlenen voor de
> volgende handelingen: a. het opvragen of hergebruiken van het geheel of een in kwalitatief of
> kwantitatief opzicht substantieel deel van de inhoud van de databank; b. het herhaald en
> systematisch opvragen of hergebruiken van in kwalitatief of in kwantitatief opzicht
> niet-substantiële delen […]

🟡 **Conclusie (sterk onderbouwde inschatting, geen KvK-/registercheck):** Forbes Media LLC is
een Amerikaanse vennootschap — de Terms geven als adres _"Forbes Media LLC, 499 Washington Blvd.,
Jersey City, NJ 07310, USA"_ en kiezen New Yorks recht. Forbes valt daarmee niet onder artikel 7
a/b, en heeft dus **geen Nederlands/EU databankenrecht** op de billionaires-lijst. Het sterkste
wapen dat een Europese lijstenmaker (denk: Quote 500) tegen dit soort hergebruik zou hebben,
heeft Forbes hier niet.

Wat overblijft in Nederland is dus (🟡):

- **Auteursrecht.** Losse feiten en getallen zijn niet auteursrechtelijk beschermd; een
  originele selectie/rangschikking kan dat wel zijn. Een top-N op netto vermogen is een
  mechanische ordening op één getal — zwakke basis. Foto's en redactionele tekst zijn dat níet:
  daar afblijven.
- **Contract (de ToS).** Dit is browsewrap: er is geen klik-akkoord bij een server-side fetch.
  Of een Cloudflare Worker de Terms "aanvaardt" is juridisch omstreden. Dit is de reële
  aanknopingsgrond, maar de handhaving loopt via New York, met arbitrage — een dure route voor
  een schadepost van vrijwel nul.
- **Geen omzeiling van een technische maatregel.** Het endpoint is publiek, zonder authenticatie,
  met `cache-control: public, max-age=300` (zelf geverifieerd, zie §5). Er is geen slot om te
  forceren, wat zowel de Databankenwet-bepalingen over technische voorzieningen als
  CFAA-achtige verwijten ontkracht. ✅ (technisch feit) / 🟡 (juridische gevolgtrekking)

---

## 3. Bestaat er een officieel gelicenseerd alternatief, en wat kost dat?

### Forbes zelf, via PARS International

[PARS International](https://www.parsintl.com/publications/forbes/) is de geautoriseerde agent
voor Forbes-reprints, -permissies en -licenties. De pagina biedt "Licensing" (_"Get a license to
use award logos, headlines and more on your website, in marketing materials, social media
campaigns etc."_), "Permissions", reprints en merchandise. ✅

**Prijs: niet gepubliceerd.** ⬜ Er staan geen tarieven of bandbreedtes op de pagina; alles loopt
via een offerteformulier. Contact volgens de gevonden bronnen: `permissions@forbes.com` en
PARS International, +1-212-221-9595. `forbesreprints.com` redirect naar de PARS-Forbes-pagina
(geverifieerd, HTTP 403 op de directe URL vanaf mijn IP — de PARS-site blokkeert
niet-browser-clients). 🟡 Inschatting: dit product is gericht op bedrijven die willen adverteren
dat ze op een Forbes-lijst staan (logo's, awards), níet op het herdistribueren van de
onderliggende dataset. Een dagelijkse datafeed is waarschijnlijk geen bestaand SKU en zou een
maatwerkdeal zijn.

### Bloomberg Billionaires Index

Geen publieke API. De data zit achter de Bloomberg Terminal en Bloomberg Data License.
Indicatieve prijs: **≈ $31.980 per seat per jaar** (enkele terminal), ≈ $28.320 bij meerdere
seats; enterprise data-licenties voor herdistributie ≈ $10.000–$100.000+ per jaar. 🟡 **Let op:
dit komt van commerciële prijsvergelijkers ([costbench](https://costbench.com/software/financial-data-terminals/bloomberg-terminal/),
[godeldiscount](https://godeldiscount.com/blog/bloomberg-terminal-cost-2026)), niet van Bloomberg
zelf — behandel als orde-van-grootte, niet als geverifieerd tarief.** Bovendien verbiedt een
terminal-licentie herpublicatie; je hebt de duurdere Data License nodig. Voor dit project
absurd.

### Altrata / Wealth-X

[Wealth-X](https://altrata.com/products/wealth-x) (onderdeel van Altrata) verkoopt een
wealth-intelligence-database met API. **Prijs: niet gepubliceerd** ⬜ — uitsluitend op offerte.
🟡 Enterprise-segment (fondsenwerving, private banking); zeker vier- tot vijfcijferig per jaar.

### Vrij te gebruiken alternatieven (wél gelicenseerd, wel gratis)

- **[Wikidata](https://www.wikidata.org/wiki/Wikidata:Licensing)** — letterlijk: _"All structured
  data in the main, property and lexeme namespaces is made available under the Creative Commons
  CC0 License"_, zonder attributieplicht. ✅ Heeft een net-worth-property en een gratis SPARQL-
  endpoint. 🟡 Nadelen: dekking is onregelmatig, waarden lopen achter, en veel van die waarden
  zijn zélf van Forbes overgenomen — juridisch schoon, inhoudelijk circulair.
- **[WID.world](https://wid.world/data/)** (World Inequality Database) — open academische data
  over de verdeling van vermogen. 🟡 Geeft geen individuele miljardairs, maar wel gezaghebbende
  percentielen; voor een site die _schaal_ wil laten voelen kan dat de sterkere bron zijn dan een
  top-10 met namen.
- **CBS StatLine / Eurostat** — Nederlandse en Europese open vermogensstatistiek, expliciet
  bedoeld voor hergebruik. 🟡 Zelfde voorbehoud: verdeling, geen personen.

**Samengevat:** er is geen betaalbare, kant-en-klare gelicenseerde bron voor "de actuele top-N
miljardairs met dagelijkse bedragen". Het is Forbes' data of niets — dat is precies waarom
iedereen dit endpoint gebruikt.

---

## 4. Precedenten

### realtimebillionaires.de — het sterkste precedent ✅

- Publieke, live site die exact dit doet. Zelf geverifieerd op 31-08-2026: **HTTP 200, site
  online.**
- Bronvermelding op de site zelf: _"Source: Forbes.com"_ en _"Images © Forbes.com. All rights
  reserved."_ Geen advertenties aangetroffen.
- Broncode: [komed3/rtb](https://github.com/komed3/rtb) en
  [komed3/rtb-api](https://github.com/komed3/rtb-api), MIT-licentie. De API-repo omschrijft
  zichzelf als _"Free to use API containing profile and list data from Forbes' real-time
  billionaires since 2020"_ en stelt: _"This data can be used unlimited and without any
  limitation."_
- **Draait sinds 2020, publiceert dagelijkse Forbes-data plus historische reeksen (~50.000
  bestanden, ~2 GB), en is in augustus 2026 nog steeds in de lucht.** Dat is ruim vijf jaar
  publieke, EU-gehoste herpublicatie zonder zichtbaar gevolg.

### TheAlgorithms/Python ✅

Het bestand
[`web_programming/get_top_billionaires.py`](https://github.com/TheAlgorithms/Python/blob/master/web_programming/get_top_billionaires.py)
in een van de grootste publieke Python-repositories gebruikt vandaag nog letterlijk:

```
"https://www.forbes.com/forbesapi/person/rtb/0/position/true.json?fields=personName,gender,source,countryOfCitizenship,birthDate,finalWorth&limit=10"
```

De enige waarschuwing in het bestand gaat over JSON-decodeerfouten, niet over voorwaarden.
Dit endpoint staat dus in de open leerliteratuur zonder dat het is verwijderd.

### Overige

- Meerdere scrape-projecten op GitHub (`gigi8android/billionaires-RealTime`,
  `ritikaga/Forbes-Realtime-Billionaires-Data-web-scraping`, `np18700/Forbes-project`) — publiek
  en intact. ✅
- **Commerciële** Forbes-scrapers worden openlijk als product verkocht op
  [Apify](https://apify.com/crawlerbros/forbes-lists-scraper/api/python). 🟡 Dat is een agressiever
  gebruik dan dit project en wordt kennelijk ook getolereerd.
- `jesseokeya/Forbes400` (publieke JSON-API): de gehoste endpoint
  `forbes400.onrender.com/api/forbes400` gaf vandaag **HTTP 503**. ⬜ 🟡 Dat leest als een
  slapende gratis-tier host, níet als handhaving — ik heb geen enkele aanwijzing gevonden dat
  Forbes hier iets mee te maken had. Niet als precedent tellen.

### Handhaving

⬜ **Geen enkele gedocumenteerde cease-and-desist, DMCA-notice of rechtszaak van Forbes over dit
endpoint of over de billionaires-data gevonden**, in meerdere zoekopdrachten. Dat is zwak
negatief bewijs (afwezigheid van gevonden bewijs, geen bewijs van afwezigheid) — maar in
combinatie met vijf jaar zichtbaar tolereren van realtimebillionaires.de is het wel iets waard.

Ter contrast, om te laten zien dat handhaving in deze sector wél voorkomt: X stuurde in
augustus 2026 cease-and-desists die Nitter en XCancel offline haalden wegens scraping en
ToS-schending
([Forbes, 26-08-2026](https://www.forbes.com/sites/siladityaray/2026/08/26/cease-and-desist-from-x-shuts-down-nitter-and-xcancel-sites-that-scraped-and-mirrored-tweets/)).
🟡 Wel een wezenlijk andere zaak: Nitter spiegelde de volledige kernservice en ondermijnde
X' verdienmodel rechtstreeks.

---

## 5. Praktische risicoschatting

### Geverifieerde technische feiten (zelf gemeten, 31-08-2026, vanaf NL) ✅

```
GET /forbesapi/person/rtb/0/position/true.json?fields=personName,finalWorth&limit=3
HTTP/2 200 · 0,24 s · count: 3422
cache-control: public, max-age=300
x-origin-backend: forbesapi
server: istio-envoy · via: 1.1 varnish (Fastly)
x-country-code: NL
```

- Geen authenticatie, geen API-key, geen rate-limit-headers, geen Terms-header in de respons.
- `cache-control: public, max-age=300` — Forbes staat publieke caching van deze respons
  expliciet toe en ververst zelf hooguit elke 5 minuten. 🟡 Eén request per dag zit ruim binnen
  wat de cachestrategie zelf veronderstelt.
- Draait achter Fastly. 🟡 Dat betekent dat blokkeren voor Forbes goedkoop en per-UA/IP mogelijk
  is — precies de reden waarom optie 2 hieronder het waarschijnlijkste scenario is.

### Wat er realistisch gebeurt, in volgorde van waarschijnlijkheid 🟡

1. **Niets** (verreweg het waarschijnlijkst). Eén request per dag verdwijnt in de ruis van een
   endpoint dat de eigen publiekspagina van Forbes bedient. Er is geen mens die dit ziet.
2. **Stille technische breuk** — het reële risico, en het enige waar je nú op moet bouwen. Het
   endpoint is ongedocumenteerd: het pad, het responseschema of de veldnamen kunnen zonder
   aankondiging wijzigen, of een bot-regel bij Fastly begint 403's te geven. Dit is geen
   juridisch scenario maar een beschikbaarheidsscenario, en het is een kwestie van tijd, niet
   van kans.
3. **Verzoek per e-mail om te stoppen** (klein maar niet verwaarloosbaar). De Terms noemen
   `webmaster@forbes.com` en `copyrightagent@forbes.com`. Reactie: stoppen, klaar. Kosten:
   een middag werk als de fallback klaarstaat.
4. **Juridische actie** (zeer onwaarschijnlijk). Tegen een niet-commerciële, advertentievrije
   Nederlandse site met bronvermelding en één request per dag: geen aantoonbare schade, geen
   Nederlands databankenrecht (§2), forumkeuze New York, en een reputatierisico voor Forbes dat
   veel groter is dan het belang. De kosten-batenverhouding voor Forbes is negatief.

### Wat het risico zou vergroten 🟡

Frequentie opvoeren, foto's of biografieteksten overnemen, het Forbes-logo gebruiken,
advertenties of betaalde toegang toevoegen, de data zelf als API doorleveren, of de site
presenteren alsof hij van of namens Forbes is. Elk daarvan verplaatst het project van
"iemand toont onze cijfers met bronvermelding" naar "iemand exploiteert onze dataset".

---

## Aanbeveling

**Doorgaan met mitigaties.**

De letterlijke tekst van Forbes' voorwaarden verbiedt dit onmiskenbaar — dat is geen grijs
gebied en dit is dus een bewust geaccepteerd risico, geen "het mag". Maar de daadwerkelijke
blootstelling is minimaal: Forbes heeft als Amerikaanse producent geen Nederlands
databankenrecht, feiten en getallen zijn niet auteursrechtelijk beschermd, er is geen
technische maatregel omzeild, en een vergelijkbare publieke site draait al vijf jaar
onaangeroerd — terwijl het enige risico dat je echt gaat treffen technisch is en met een
fallback volledig af te dekken valt.

### Mitigaties (in volgorde van belang)

1. **Bouw de fallback vóór de deploy, niet erna.** De site moet blijven werken op de laatst
   gecachte snapshot als het endpoint 403/404 geeft of van vorm verandert. Valideer het
   responseschema bij elke fetch en schrijf alleen weg als het klopt. Dit dekt scenario 2 én
   scenario 3 in één keer af.
2. **Houd de tweede optie warm.** Een handmatig bijgehouden top-10 in de repo, in exact hetzelfde
   dataformaat, één env-flag verwijderd. Voor een site die _schaal_ wil laten voelen zijn de
   bedragen op ordegrootte-niveau relevant; een maandelijkse handmatige update is inhoudelijk
   nauwelijks slechter.
3. **Sla alleen op wat je toont**: naam, bedrag, rang, datum. Geen foto's, geen biografieën,
   geen Forbes-logo, geen redactionele tekst.
4. **Eerlijke User-Agent met contact-URL**, bijvoorbeeld
   `money-scroll/1.0 (+https://<site>/over)`. Dat geeft Forbes een goedkope manier om te vrágen
   in plaats van te blokkeren, en het onderscheidt je van anonieme scrapers.
5. **Maximaal 1 request per dag**, resultaat in KV/R2. Nooit per bezoeker doorschakelen naar
   Forbes.
6. **Zichtbare bronvermelding in platte tekst** met link naar
   [forbes.com/real-time-billionaires](https://www.forbes.com/real-time-billionaires/), plus een
   expliciete vermelding dat de site niet aan Forbes gelieerd is, niet-commercieel is en geen
   advertenties heeft.
7. **Bereikbaar contactadres op de site** en een afspraak met jezelf: een verzoek van Forbes
   wordt binnen 24 uur ingewilligd.

### Eén expliciet advies over toestemming vragen 🟡

**Vraag het niet.** Een mail naar `permissions@forbes.com` zet stilzwijgend gedogen om in een
expliciet antwoord, en het waarschijnlijkste expliciete antwoord is "nee" — waarna doorgaan
willens en wetens gebeurt en de positie juridisch slechter is dan nu. Dit advies keert alleen om
als het project zekerheid vóór snelheid stelt (bijvoorbeeld bij commerciële plannen later): vraag
het dan wél, en accepteer dat het antwoord het project kan beëindigen.

---

## Bronnen

Primair, zelf opgehaald op 31-08-2026:

- [Forbes Terms and Conditions](https://www.forbes.com/terms-and-conditions/) — Effective Date
  31 maart 2024; alle citaten in §1
- [forbes.com/robots.txt](https://www.forbes.com/robots.txt)
- `https://www.forbes.com/forbesapi/person/rtb/0/position/true.json` — eigen meting van respons
  en headers (§5)
- [Databankenwet, BWBR0010591](https://wetten.overheid.nl/BWBR0010591) — artikelen 1, 2 en 7
- [Wikidata:Licensing](https://www.wikidata.org/wiki/Wikidata:Licensing)
- [realtimebillionaires.de](https://realtimebillionaires.de) — live gecontroleerd
- [komed3/rtb](https://github.com/komed3/rtb) en [komed3/rtb-api](https://github.com/komed3/rtb-api)
- [TheAlgorithms/Python — get_top_billionaires.py](https://github.com/TheAlgorithms/Python/blob/master/web_programming/get_top_billionaires.py)
- [PARS International — Forbes](https://www.parsintl.com/publications/forbes/)
- [Altrata — Wealth-X](https://altrata.com/products/wealth-x)
- [WID.world — Data](https://wid.world/data/)

Secundair / indicatief (uitdrukkelijk niet primair, zie markering in de tekst):

- [Bloomberg Terminal pricing 2026 — costbench](https://costbench.com/software/financial-data-terminals/bloomberg-terminal/)
- [Bloomberg Terminal cost 2026 — godeldiscount](https://godeldiscount.com/blog/bloomberg-terminal-cost-2026)
- [Apify — Forbes Lists Scraper](https://apify.com/crawlerbros/forbes-lists-scraper/api/python)
- [Forbes — Cease-And-Desist From X Shuts Down Nitter And XCancel (26-08-2026)](https://www.forbes.com/sites/siladityaray/2026/08/26/cease-and-desist-from-x-shuts-down-nitter-and-xcancel-sites-that-scraped-and-mirrored-tweets/)

**Voorbehoud:** dit is onderzoek, geen juridisch advies. Voor een bindend oordeel over het
databankenrecht en de afdwingbaarheid van browsewrap-voorwaarden tegen een geautomatiseerde
client is een IE-jurist nodig.
