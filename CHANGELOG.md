# Ændringslog

## 0.3.0 - nyt logo, én skriftvægt og ingen afdelingsfarver

Logoet er tegnet om, overskrifterne bruger kun Gabarito 600, og afdelingsfarverne er udgået. Tokennavne, komponenter og props bevares, så en forbruger kan flytte sin lås uden at ændre kode. Det er kun importstien til `tokens/departments.css`, der forsvinder.

### Brydende

Det skal forbrugere gøre, når de flytter deres lås til 0.3.0:

- **`tokens/departments.css` er slettet.** Fjern `@import` eller import af filen. `styles.css` importerer den ikke længere. Tokens, der var i filen, findes stadig som overgangsnavne (se "Bevaret").
- **`data-dept` virker ikke længere.** Attributten har ingen regler, så `data-dept="byggeri"` og `data-dept="drift"` giver det almindelige Glød. Fjern attributten. Afdelingen skrives som tekst eller et neutralt mærke.
- **Drift var violet (`#7a4dff`), og den farve er væk.** Hvor en app brugte `--drift*` eller `--violet` til noget synligt, bliver det nu Glød. Find og ret stederne, så afdelingen ikke afhænger af farve.
- **Gabarito findes kun i vægt 600.** Filerne `assets/fonts/Gabarito-500.woff2`, `Gabarito-700.woff2` og `Gabarito-800.woff2` er slettet, og deres `@font-face` er fjernet. Henvis til `assets/fonts/Gabarito-600.woff2`. Kode, der beder om 700 eller 800 på Gabarito, får 600.
- **`Badge`, `Button` og `Field` bruger altid brødtekstens skrift** (før arvede de skriften fra omgivelserne, så et mærke i en overskrift blev Gabarito).
- **`--status-info` i lyst tema er ændret** fra `#376181` (0.2.0) til brandets `#3f6f8f`.
- **Overskrifter er lettere.** `.h1` til `.h4`, `Stat`, `CtaBand`, `DeptCard`, `CategoryCard`, `RefCard`, `StepCard`, `WorkRow` og `CallbackForm` bruger vægt 600 (før 800 eller 700). Hierarkiet kommer fra størrelsen. `.h2` har linjehøjde 1,1 (før 1,06) og `.h3` 1,1 (før 1,15).
- **Logofilerne har nyt udseende.** Filnavnene er de samme, men ordet Aftal' er tegnet ud fra Gabarito 600, og ikoner og favicon er skiftet. Hvor en app har kopieret `assets/logo` og `assets/favicon`, skal de kopieres igen.
- **`Logo variant="app"` har Glød-flise** (før mørk flise). Vil du beholde den sorte flise, så brug den nye variant `app-black`.
- **`--weight-display-heavy` og `--weight-display` er begge 600** (før 800 og 700). Brug ikke `--weight-display-heavy` i ny kode.

### Nyt

- Logo: nyt ord Aftal' tegnet ud fra Gabarito 600, altid ensfarvet (hvid på mørk bund og på Glød, sort på lys bund). Nye filer for logo, ikon, appikon og favicon. Ny `assets/logo/aftal-appikon-sort.svg` og ny variant `Logo variant="app-black"`. Der findes kun ét logo, og afdelinger skrives aldrig sammen med det.
- Skrift: Gabarito 600 til alle overskrifter og nøgletal. Licensen (SIL Open Font License) ligger stadig ved skrifterne i `assets/fonts/`.
- `.ai-label` og `.ai-surface` i `tokens/base.css`: hjælpeklasser til det, en AI har skrevet eller foreslår, med `--ai`, `--ai-soft` og `--ai-line`. Galleriet bruger dem.
- En `Logo` uden variant inde i `data-surface="glod"` (eller `.section--glod`) er hvid i begge temaer.
- Galleriet viser typografi i 600, begge appikoner og logoet på en Glød-flade.

### Bevaret, så intet går i stykker

- `Logo` tager stadig varianterne `byggeri`, `udvikling` og `drift` og viser det almindelige logo. `DeptCard` har uændrede props (`name`, `tag`, `description`, `href`) og viser afdelingen som tekst.
- Overgangsnavnene og `--brand*` er sat i en regel, der gælder begge temaer, så de også følger et `data-theme` på et indre element.
- `--byggeri`, `--byggeri-hover`, `--byggeri-text`, `--byggeri-soft`, `--byggeri-line`, `--drift`, `--drift-hover`, `--drift-text`, `--drift-soft`, `--drift-line` og `--on-dept` findes stadig i `tokens/colors.css` som overgangsnavne, der peger på `--accent*` og `--accent-ink`. `--violet` peger på `--accent`. Brug dem ikke i ny kode.
- `--font-accent`, `--brand*`, `--kalk`, `--skiffer`, `--teglsten`, `--brand-print` og `--kulsort` er uændrede overgangsnavne fra 0.2.0.
- Tokens, biblioteket selv har indført og bruger, er beholdt: `--focus` (fokusring, hvid på en Glød-flade), `--accent-wash` (hover på kort og rækker), `--onbrand` og `--onbrand-hover`, og `--text-*`, `--leading-*` og `--tracking-*` til størrelser og linjehøjder.
- To afvigelser i det lyse tema står ved, fordi brandets værdier giver for lav kontrast som lille tekst: `--status-success` er `#356c4e` (brandet: `#3e7d5a`, 4,45:1 på `#f4f4f4`, biblioteket 5,61:1) og `--status-warning` er `#8f5f0a` (brandet: `#c98a1e`, 2,94:1 på hvid, biblioteket 5,51:1). Tabellen står i `DESIGN.md`. `--status-info` følger nu brandet (`#3f6f8f`, før `#376181`), som giver 5,41:1 på hvid og 4,92:1 på `#f4f4f4`. Øvrige tokens i `tokens/*.css` er ens med brandets `tokens.css`.
- `CallbackForm` og `Field` bruger stadig "Byggeri" og "Drift" som valgmuligheder, fordi det er tekst og ikke farve.

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
