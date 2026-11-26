# Ændringslog

## 0.2.0 - det nye brand

Biblioteket og galleriet følger Aftals nye brand. Mørkt tema er standard.

### Brydende

Det skal forbrugere gøre, når de flytter deres lås til 0.2.0:

- **Standardtemaet er skiftet fra lyst til mørkt.** En app uden `data-theme` på `<html>` bliver mørk. Sæt `data-theme="light"` for at beholde lyst.
- **`Logo variant="primary"` har ny betydning.** Før: Glød-mærke og sort ord til lys bund. Nu: ordet Aftal' i hvid eller sort efter temaet (kræver `styles.css`; uden den vises den hvide fil). Vil du have en fast farve, så brug `white` eller `black`.
- **Afdelingsvarianterne `byggeri`, `udvikling` og `drift` viser nu det almindelige logo** uden afdelingsnavn.
- **`CallbackForm`: `scope="Udvikling"` er fjernet** fra typen og fra valgmulighederne. Afdelingen Udvikling er også fjernet fra eksempler og galleri. Fjern værdien, hvor den sættes.
- **Filer er slettet:** `assets/logo/*.png`, `assets/logo/legacy/*.svg` og `assets/fonts/GoogleSansFlex.woff2`, og skriften Strait indlæses ikke længere. Henvis til `assets/logo/*.svg` og de nye skriftfiler i `assets/fonts/` i stedet.
- **Udgåede tokens har ny værdi:** `--kalk` er nu hvid (var varm råhvid), `--skiffer` er nu `--mute-2` (var varm grå), `--brand-print` og `--teglsten` er nu Glød (var Teglsten), `--kulsort` er `--sort`, og `--font-accent` peger på overskriftsskriften. Brug dem ikke i ny kode.
- **Lyst `--panel` er gået fra `#ffffff` til `#f4f4f4`**, så kort på hvid bund ser anderledes ud. Øvrige flader, tekst- og linjefarver har også nye værdier under de samme navne.
- **`WorkRow` dæmper ikke længere `soon`-rækker** med gennemsigtighed (det gav for lav kontrast). Rækken er markeret med badgen "Kommer snart".

### Nyt

- Farver: Glød (`#d44016`) er brandfarven og den aktive farve `--accent`, med `--accent-ink` (hvid) oven på og `--accent-text` til lille tekst og links. Nye tokens: `--accent*`, `--accent-wash`, `--onbrand`, `--onbrand-hover`, `--sort`, `--hvid`.
- `--focus`: farven på fokusringen. Den er `--accent` normalt og hvid på en Glød-flade (`data-surface="glod"`). Knapper, links og `Switch` bruger den.
- AI: `--ai`, `--ai-soft` og `--ai-line` er AI-farven (lilla) og bruges kun om det, en AI har skrevet eller foreslår.
- Skrift: overskrifter i Gabarito 800 og 700, brødtekst i Google Sans Flex 400, 500 og 600, lokalt serveret. Licenserne (SIL Open Font License) ligger ved skrifterne i `assets/fonts/`. Nye tokens `--weight-display-heavy` og `--weight-display`.
- Logo: ordet Aftal' som SVG (hvid, sort, ikon, appikon) og nye favicon-filer i `assets/favicon/`. `Logo` har ny variant `app`. `primary` og `icon` vises og læses kun som ét logo, også uden `styles.css`, og `className` flettes ikke længere væk.
- `tokens/departments.css` med afdelingsskiftet `data-dept`. Drift-farven er ikke endelig: tokens findes, men intet i biblioteket eller galleriet bruger dem.
- Tastatur: `SearchSelect` kan nås og åbnes med tastaturet, sender fokus tilbage til feltet efter valg og Escape, lukker ved Tab og har `combobox`-, `listbox`- og `option`-roller. `Switch` og felter viser fokus.

### Bevaret, så intet går i stykker

- Alle gamle tokennavne findes stadig. `--brand`, `--brand-hover`, `--brand-soft` og `--brand-line` følger `--accent`. `--glod` findes stadig.
- Logo-varianterne `white`, `black`, `icon-white` og `icon-black` virker som før (nu SVG).

### Ændret

- Komponenter bruger kun tokens. Ingen farvekoder står længere i komponenterne.
- Afvigelser fra brandets værdier i det lyse tema, så små tekster når mindst 4,5:1: `--status-warning` er `#8f5f0a` (brandet: `#c98a1e`, 2,9:1 på hvid), `--status-success` er `#356c4e` (brandet: `#3e7d5a`, 4,3:1 på sin tone) og `--status-info` er `#376181` (brandet: `#3f6f8f`, 4,3:1 på en grå flade). Pladsholderteksten i `Media` bruger `--mute` i stedet for `--mute-2`.
- Hover på ghost-knappen bruger `--panel-hi`. `CtaBand` er sat som Glød-flade (`data-surface="glod"`).
- Galleriet åbner i mørkt tema, bruger det nye logo og viser farveroller (læst fra tokens), AI-mærke og status med ord.

## 0.1.0

Første version: tokens, skrift og 24 komponenter.
