# De Loopband bouwen en de performance-poort halen

Type: task
Status: open
Blocked by: 01, 02

## Question

Bouw de Loopband en bewijs dat hij snel genoeg is. **Dit is de poort van het hele project**:
haalt dit skelet geen 60fps bij 4× CPU-throttling, dan deugt het fundament niet en heeft
doorbouwen geen zin. Liever hier stoppen dan met 150 Markers erbovenop.

Gebruik een handvol hardgecodeerde Markers. Er is nog geen data en die is hier ook niet nodig.

**Het kernidee, en wijk hier niet vanaf:** de scroll-container bevat níets. Alles wat je ziet
is een `position: fixed` overlay, gepositioneerd met `transform: translate3d()` op basis van
de Hoogte. Daardoor is het aantal DOM-nodes constant en klein (~10), of je nu op 100px of op
16 miljoen px zit.

```
virtualPx = chunkOffset + (CHUNK_PX - viewportH - scrollTop)
```

`CHUNK_PX = 1_000_000`. Ruim onder de browserlimiet (~33,5 mln px), en over de volle Klim
maar ~16 resets — ongeveer één per kwartier. Elke reset onderbreekt iOS-momentum, dus
zeldzaamheid is het hele punt.

Regels: `scroll`-listener is passive en schrijft alleen `scrollTop` weg; al het rekenwerk in
één rAF-loop; de reset-sprong exact compenseren; native scrollbar verbergen.

**De test die het project redt**: Hoogte vóór en ná een chunk-reset verschilt exact het
scroll-delta en niets meer. Sluipt daar een fout in, dan springt het beeld en is de hele
illusie weg.

Meet met `chrome-devtools-mcp:chrome-devtools` en de `web-perf` skill:
`performance_start_trace` tijdens een lange scroll met 4× throttling; bevestig 60fps en geen
long tasks; scroll over een chunkgrens en bevestig visueel dat de reset onzichtbaar is.

Klaar wanneer: de poort gehaald is, mét de trace als bewijs. Wordt hij niet gehaald, dan is
dat óók een geldige resolutie — noteer wat er misging, want dan moet de architectuur terug op
tafel.
