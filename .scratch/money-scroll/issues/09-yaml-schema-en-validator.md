# YAML-schema, inlezen en check:markers

Type: task
Status: open
Blocked by: 02

## Question

Bouw het bewerkoppervlak waarmee de opdrachtgever zelf Hoofdstukken en Markers toevoegt. Dit
komt **vroeg** in de volgorde, expres: vanaf hier kan hij content schrijven terwijl de rest
gebouwd wordt.

Drie bestanden, YAML. Volgorde in het bestand doet er niet toe — plaatsing gaat op bedrag,
dus aanplakken kan overal.

| Bestand | Inhoud |
|---|---|
| `data/hoofdstukken.yaml` | de 12 Hoofdstukken, met `tekst` en `bron` verplicht |
| `data/markers.yaml` | de handmatige Markers |
| `data/markers.auto.yaml` | gegenereerd, daarna handmatig te bewerken |

```yaml
- id: miljardgrens
  bedrag: 1
  eenheid: mld            # eur | mln | mld | bln
  label: De miljardgrens
  tekst: |
    Duizend keer de miljonair.
    En van die eerste heb je er één gezien.
  bron: definitie
```

**Hoofdstuk en Marker zijn twee schema's, geen vlag.** Een Hoofdstuk eist `tekst` en `bron`;
een Marker kent `tekst` niet. Het bestand is de discriminator.

`bedrag` + `eenheid` in plaats van kale getallen, omdat YAML geen `_`-scheidingsteken kent:
`120000000000` overtypen is dé manier om er een factor duizend naast te zitten, en die fout
is op de site onzichtbaar — de Marker staat dan gewoon ergens anders.

`src/lib/data/laden.js` leest en valideert bij de build (js-yaml, build-time only).

`npm run check:markers`, ook in CI:
- schema, geldige eenheid, id-formaat
- dubbele id's over alle drie de bestanden
- ontbrekende `bron`
- **Leegte-controle**: geen gat > 5 minuten op referentiesnelheid
- geen Marker boven De Top tenzij `epiloog: true`

Die Leegte-controle is de enige geautomatiseerde bewaking op de redactionele regel. Zonder
hem sluipt de Leegte er ongemerkt weer in.

Klaar wanneer: de validator vindt in een geprepareerde set een dubbele id, een ontbrekende
bron én een te groot gat.
