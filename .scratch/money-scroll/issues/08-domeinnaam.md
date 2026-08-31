# Domeinnaam kiezen en registreren

Type: task
Status: open

## Question

De bestemming van deze map is "live op een eigen domein", dus er moet een domein zijn. Dit is
een **lange-doorlooptijd-item**: registratie en DNS-propagatie kosten tijd, en de deploy wacht
erop. Daarom staat het vroeg op de frontier en niet aan het eind.

Twee dingen, in deze volgorde:

1. **Kiezen.** Nederlandstalige site, Nederlands publiek, en de naam moet in een appbericht
   te plakken zijn zonder uitleg. Kom met een handvol opties en toets de beschikbaarheid
   voordat je ze voorlegt — een mooie naam die bezet is, is geen optie.
2. **Registreren.** Dit moet de opdrachtgever zelf doen; er zit betaling aan vast.
   Lever een precieze checklist: registrar, exacte domeinnaam, en de nameserver-instellingen
   die Cloudflare nodig heeft.

Overweeg bij het kiezen dat de site mogelijk ooit een Engelse versie krijgt (nu buiten scope,
maar de structuur is er klaar voor). Een naam die alleen in het Nederlands werkt, sluit dat af.

De resolutie legt vast: welk domein, bij welke registrar, en of de nameservers al naar
Cloudflare wijzen. Cloudflare-project, KV en de eerste deploy heeft die feiten nodig.
