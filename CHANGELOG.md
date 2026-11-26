# Ændringslog

## 0.2.0 - det nye brand

Biblioteket og galleriet følger Aftals nye brand. Mørkt tema er standard.

**Nyt**
- Farver: Glød (`#d44016`) er brandfarven og den aktive farve `--accent`, med `--accent-ink` (hvid) oven på og `--accent-text` til lille tekst og links. Nye tokens: `--accent*`, `--accent-wash`, `--onbrand`, `--onbrand-hover`, `--sort`, `--hvid`.
- AI: `--ai`, `--ai-soft` og `--ai-line` er AI-farven (lilla) og bruges kun om det, en AI har skrevet eller foreslår.
- Skrift: overskrifter i Gabarito 800 og 700, brødtekst i Google Sans Flex 400, 500 og 600, lokalt serveret. Nye tokens `--weight-display-heavy` og `--weight-display`.
- Logo: ordet Aftal' som SVG (hvid, sort, ikon, appikon) og nye favicon-filer i `assets/favicon/`. `Logo` uden variant følger temaet og har ny variant `app`.
- `tokens/departments.css` med afdelingsskiftet `data-dept`. Drift-farven er ikke endelig: tokens findes, men intet i biblioteket eller galleriet bruger dem.
- Fokus: synlig fokusring på alle komponenter. `SearchSelect` kan nu nås og åbnes med tastaturet, og `Switch` viser fokus.

**Bevaret, så intet går i stykker**
- Alle gamle tokennavne findes stadig: `--brand`, `--brand-hover`, `--brand-soft`, `--brand-line` følger `--accent`, og `--bg`, `--panel*`, `--ink*`, `--mute*`, `--line*`, `--status-*`, afstande, radier og fototokens har nye værdier under de samme navne. `--glod` findes stadig.
- `--teglsten`, `--brand-print`, `--skiffer`, `--kalk`, `--kulsort` og `--font-accent` er udgåede og peger på de nærmeste nye værdier. Brug dem ikke i ny kode.
- Logo-varianterne `primary`, `white`, `black`, `icon`, `icon-white` og `icon-black` virker som før (nu SVG). `byggeri`, `udvikling` og `drift` er udgåede og viser det almindelige logo.

**Udgår**
- Skriften Strait, de gamle PNG-logoer og SVG-logoerne i `assets/logo/legacy/`, den variable `GoogleSansFlex.woff2`.
- Afdelingen Udvikling i `DeptCard`-eksempler, `CallbackForm` og galleriet. Der er to afdelinger: Byggeri og Drift.
- Fotoslør i KALK. Fototokens har samme navne, men nye værdier til sort og hvid bund.

**Ændret**
- Komponenter bruger kun tokens. Ingen farvekoder står længere i komponenterne.
- `--status-warning` er mørkere i det lyse tema (`#8f5f0a`), så den kan læses som tekst.
- Hover på ghost-knappen bruger `--panel-hi`. `CtaBand` er sat som Glød-flade (`data-surface="glod"`).
- Galleriet åbner i mørkt tema, bruger det nye logo og viser farveroller, AI-mærke og status med ord.

## 0.1.0

Første version: tokens, skrift og 24 komponenter.
