# Money Scroll

Een website die de schaal van extreem vermogen voelbaar maakt door je die afstand te laten
afleggen: één pixel is het jaarinkomen van een gemiddelde Nederlander, en je scrollt omhoog
tot aan de rijkste mens ter wereld.

## Language

### De ervaring

**Klim**:
De hele verticale reis van €0 tot voorbij de rijkste mens ter wereld. Het geheel van
Loopband, Hoofdstukken en Markers samen.
_Avoid_: scroll, journey, reis

**Loopband**:
Het scrollmechanisme. Een scroll-container van vaste hoogte die stilletjes terugspringt
zodra je de rand nadert, terwijl de Hoogte doorloopt.
_Avoid_: treadmill, virtualisatie, infinite scroll

**Hoogte**:
Hoe ver je bent, in pixels vanaf €0. Het enige positiegetal dat de Klim kent; de
`scrollTop` van de Loopband is een implementatiedetail dat er niet mee verward mag worden.
_Avoid_: positie, offset, scrollTop, virtualPx

**Pixelwaarde**:
Het bedrag dat één pixel Hoogte vertegenwoordigt: €46.000, het modale Nederlandse
jaarinkomen (CPB 2026). Hardgecodeerd, met jaartal zichtbaar op de site.
_Avoid_: schaal, ratio, eenheid

### Wat je onderweg passeert

**Hoofdstuk**:
Een van de twaalf grote momenten in de Klim, met eigen proza en een bronvermelding in
beeld. Neemt het hele scherm.
_Avoid_: grote marker, chapter, mijlpaal

**Marker**:
Een dunne lijn met alleen een label die voorbijglijdt. Er zijn er ongeveer 130. Een Marker
is géén Hoofdstuk zonder tekst: het is een eigen begrip met een eigen vorm.
_Avoid_: baken, streep, punt, minor marker

**Leegte**:
Een stuk Klim zonder Hoofdstuk of Marker. Mag bestaan, maar nooit langer dan vijf minuten
op referentiesnelheid (1.000px/s). Dit is een redactionele regel die de validator bewaakt.
_Avoid_: gap, gat, void

### Boven en onder

**De Top**:
Het vermogen van de rijkste mens ter wereld, live. Altijd deze betekenis — nooit de
hoogste Marker op de pagina.
_Avoid_: het einde, het plafond, het maximum

**Epiloogzone**:
Het deel van de Klim bóven De Top, waar het percentage niet meer geldt en een eigen
weergave in beeld komt. Bevat onder meer het biljoen en het BBP van Nederland.
_Avoid_: naschrift, bonus, outro

### De data

**Snapshot**:
De ene onveranderlijke JSON met datumstempel die een sessie inlaadt: de live vermogens, de
ECB-koers en de samengevoegde Hoofdstukken en Markers. Een sessie ververst deze nooit
tussentijds.
_Avoid_: feed, payload, dataset

**Voortgang**:
De opgeslagen Hoogte van een bezoeker, bewaard als bedrag en niet als percentage, omdat De
Top beweegt.
_Avoid_: progress, savegame, bookmark
