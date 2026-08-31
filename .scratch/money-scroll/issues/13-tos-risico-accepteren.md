# Accepteren we het ToS-risico van Forbes?

Type: grilling
Status: open

## Question

Mag Forbes' endpoint op een publieke site? heeft het feit opgeleverd: **Forbes' voorwaarden
verbieden dit ondubbelzinnig**, terwijl de juridische blootstelling in Nederland klein lijkt
en het realistische risico technisch is. Dat is geen besluit — dat is de afweging.

Te beslissen door de opdrachtgever, want het is zijn naam en zijn domein:

1. **Ga je door op Forbes' endpoint** als bewust geaccepteerd risico, of niet?
2. Zo ja: welke mitigaties neem je over uit
   [forbes-tos.md](../research/forbes-tos.md)? De zwaarste is dat de fallback op de laatste
   Snapshot er moet staan **vóór** de deploy.
3. Zo nee: dan wordt het handmatig bijhouden van de top 10 (maandelijks, in een YAML naast de
   andere data). Dat is technisch simpeler, kost je maandelijks een kwartier, en de site is
   dan tot een maand oud — bij ±$180 mld schommeling in twee weken is dat zichtbaar.
4. **Wat zet je op de site zelf?** Bronvermelding en datumstempel waren al besloten; de vraag
   is of je ook expliciet maakt dát het van Forbes komt en hoe vers het is.

Overweeg ook de asymmetrie: de kosten van betrapt worden zijn laag (endpoint dicht, site valt
terug op de laatste Snapshot), maar het is wel je eigen publieke site met je naam eraan.

**Dit ticket blokkeert de cron-Worker en daarmee de deploy.**
