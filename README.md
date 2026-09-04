# @aftal/ui

Aftals designsystem for 2026-brandet: design tokens, fonte og de 24 React-komponenter, som alle Aftals flader bygges af. Kanonisk brand-dokumentation: [DESIGN.md](DESIGN.md).

## Struktur

```
styles.css     entry point - importerer alle tokens
tokens/        colors, typography, spacing, effects, fonts, base (ren CSS custom properties)
components/    24 komponenter: .jsx (source) + .d.ts (props) + .prompt.md (hvornår/hvordan)
assets/        GoogleSansFlex.woff2, logo-lockups, medlemsmærker, fotos
gallery/       galleri-appen (Vite) - deployes til ui.aftal.dev
index.js       barrel export
```

## Brug i en app

```bash
npm install github:aftal-dk/aftal-ui
```

```js
// globalt, én gang (fx layout.tsx / main.jsx)
import '@aftal/ui/styles.css';

import { Button, Icon } from '@aftal/ui';
```

- **Next.js:** tilføj `transpilePackages: ['@aftal/ui']` i `next.config` (komponenterne shipper som source-JSX).
- **Vite:** virker uden konfiguration.
- **Assets:** kopiér `node_modules/@aftal/ui/assets` til din `public/assets` (build-script), og sæt evt. `window.AFTAL_ASSET_BASE` hvis de lander et andet sted.
- **Tema:** sæt `data-theme="light"` eller `data-theme="dark"` på `<html>`. Lys er default.

## Galleriet (ui.aftal.dev)

Alle komponenter i alle tilstande, lys og mørk - testport nr. 1 før noget rammer en rigtig flade.

```bash
cd gallery && npm install && npm run dev
```

Galleriet importerer pakken direkte fra repo-roden, så det viser altid den aktuelle source.

## Regler

- Aldrig hardkodede farver i apps - kun tokens.
- Designændringer laves HER først og rulles derefter ud til apps.
- Al dansk tekst i komponenter/eksempler følger brandreglerne i DESIGN.md (sentence case, ingen tankestreger, tagline ordret).
- Loading-tilstande bygges KUN af `Spinner`, `Skeleton`/`SkeletonList`, `LoadingBar` og `Button loading` (se "Loading" i DESIGN.md). Aldrig `Loader2` + `animate-spin`, aldrig pulserende tekst, aldrig tom skærm. Teksten er altid "Henter…" med ét ellipsis-tegn.
