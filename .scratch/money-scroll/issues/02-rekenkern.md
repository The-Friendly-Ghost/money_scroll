# De rekenkern: Hoogte, bedragen en formattering

Type: task
Status: open
Blocked by: 01

## Question

Bouw de zuivere wiskunde van de Klim, volledig testbaar zonder DOM. Dit is het fundament
waar al het andere op rust, dus het gaat vóór alles wat je kunt zien.

`src/lib/climb/scale.js`:

- Pixelwaarde ↔ euro's, beide richtingen
- `bedrag` + `eenheid` (`eur` | `mln` | `mld` | `bln`) → euro's. Een **onbekende eenheid moet
  hard falen**, niet stil 0 opleveren
- Formattering van de teller: hybride, leesbare orde van grootte groot en de blurrende staart
  klein
- Formattering van het percentage, met genoeg decimalen om onder 0,01% nog iets te betekenen

`src/lib/climb/markers.js`:

- Hoofdstukken en Markers samenvoegen en sorteren op bedrag
- Binair zoeken naar het zichtbare venster rond een Hoogte
- Leegte-controle: vind elk gat > 5 minuten op referentiesnelheid (1.000px/s)

**Ankerwaarden voor de tests** (Pixelwaarde €46.000): €1 mln → 21,74px · €1 mld → 21.739px ·
De Top bij €749,9 mld → 16,30 mln px.

De Epiloogzone is een aparte zone: bóven De Top geldt het percentage niet meer. `scale.js`
moet dat onderscheid kennen en teruggeven in welke zone een Hoogte valt. Wát de Epiloogzone
toont is een andere vraag (zie het ticket daarover); hier gaat het alleen om het onderscheid.

Werk test-first; roep `mattpocock-skills:tdd` aan.

Klaar wanneer: de tests dekken de ankerwaarden, beide zones, alle vier de eenheden, de
hard-falen-op-onbekende-eenheid, en de vensterselectie op de randen.
