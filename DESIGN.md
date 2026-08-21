# Aftal Design System

Aftal ApS is a Danish property company based in Støvring, Nordjylland, working
nationwide. One company covers the whole life of a building through three
departments: **Udvikling** (development — land, permits, economics, design),
**Byggeri** (construction — own trades, one site manager, specialising in
roofing and carpentry) and **Drift** (operations — technical maintenance,
caretaking, acute callouts). The promise the whole brand rests on: one
agreement, one contact person, from the first sketch to daily operation.

The name is the promise. The tagline is *Når en aftal' er en aftal'* — a deal is a deal, a
North Jutland value: we show up, and we do what we said.

## Sources this system was built from

| Source | What was taken from it |
| --- | --- |
| `github.com/aftal-dk/aftal-website-next` (branch `main`) | Layout, spacing, component structure, interaction and all Danish copy. Read: `app/styles/*.css`, `components/site/site.tsx`, `components/site/FloatingDock.tsx`, `lib/content.ts`, `app/**/page.tsx`. Photography and membership marks copied from `public/`. |
| `uploads/Aftal Brand guide 2026.pdf` (46 pp., agency draft) | The 2026 identity: logo system, colour palette, typography, tone of voice, applications. Logo assets were extracted from this PDF as PNG. |
| `uploads/Aftal-status.pdf` | Agency status on ads and website. Its web recommendations shaped decisions below. |

Explore the repository further — the site is the most complete live expression
of the brand, and the CSS files carry values this document only summarises.

### Two palettes, on purpose

The site in production still runs the **previous** palette (terracotta `#b94c33`
on near-black `#0e0d0c`, dark-first). This design system is built on the **2026
brand guide** instead: KALK `#EDEBE8` as the default ground, GLØD `#D44016` as
the digital brand colour, with a softer dark theme. Anything you build from this
system will look newer than aftal.dk does today. That is intentional — see
*Open decisions* at the end.

---

## CONTENT FUNDAMENTALS

**Language.** Everything is Danish. No English UI words, no anglicisms — "Bliv
ringet op", not "Book a call".

**Address.** *Vi* about Aftal, *du/dig* to a private customer, *I/jer* to a
company or a housing association. Never "man". The reader is spoken to directly:
"Fortæl os kort om opgaven – så ringer vi tilbage."

**Tone** (from the brand guide's ToV scales): informal and North Jutlandic,
respectful, factual, modern, conversational, and lightly humorous — never at the
expense of credibility. Plain words instead of trade jargon.

**Voice** — five fixed positions: *Ordfast* (we keep time and price),
*Gennemsigtig* (open about prices and process), *Faglig* (backed by examples and
data), *Samlende* (many trades under one roof, one point of contact),
*Tillidsskabende* (nobody is just a case number).

**Casing.** Sentence case everywhere. No ALL-CAPS labels, no uppercase eyebrows,
no Title Case On Buttons. The only capitals are proper nouns and "Aftal".

**Headlines** are short statements that end in a full stop, often a pair:

> Vi udvikler, bygger og drifter ejendomme – uden overraskelser. **Det er en Aftal.**
> Tre afdelinger, ét hold.
> Alt samlet ét sted.
> Mennesker, der møder op.
> Op til tiden. Ned til tiden.

**Body copy** is two or three sentences, concrete, with the customer's benefit
first: "Med Aftal har du én fast part gennem hele ejendommens liv. Det betyder
mindre koordinering for dig – og at intet falder mellem to stole."

**Promises are specific and keepable**: "Vi vender tilbage inden for 24 timer",
"oftest samme dag", "Hverdage 8-15:30". Never "hurtigst muligt" alone.

**Numbers** are real and few: 9 faste folk · 3 afdelinger · 40+ ejendomme i
drift · 450+ lejemål.

**Buttons** are verb-first and lowercase after the first word: "Få et
uforpligtende tilbud", "Bliv ringet op", "Ring mig op", "Læs mere", "Se vores
ydelser", "Kontakt os".

**Honesty in states.** A service that is not live says "Kommer snart". A failed
form says it failed and gives the phone number. There is no fake receipt, no
"world-class", no superlatives.

**Emoji: never** — not in UI, not in headings. The one playful gesture in the
system is the ASCII `:-)` on the "Dit projekt her?" reference card, set in mono.

**The tagline** is always written exactly *Når en aftal' er en aftal'* — verbatim, both
*aftal'* in lowercase with the apostrophe, no trailing full stop, never
rephrased or capitalised as "Aftal". (The front-page hero punchline "Det er en
Aftal." is a separate line and keeps its capital and full stop.)

**Punctuation.** Never dashes (en or em) - a plain hyphen with spaces does every
pause and range ("8-14", "vi kommer i morgen - det lover vi"). No superscripts:
write "m2", never "m²". The apostrophe in *aftal'* is part of the brand line and
is never straightened away.

---

## VISUAL FOUNDATIONS

**Ground.** KALK `#EDEBE8` is the default page. It is warm, paper-like and never
pure white; white is reserved for cards, so a card reads as a raised surface.
The dark theme runs on `#292826` — the soft near-black used on the guide's
vans, signage and merchandise, not pure KULSORT.

**Colour.** One accent: GLØD `#D44016`. It appears as solid buttons, links,
check marks, arrows, active nav, the full-bleed CTA band, and as 10%/32% tints
for fills and hairlines. TEGLSTEN `#B84C32` is the print-only equivalent — never
use it on screen. SKIFFER `#8F887C` is the neutral. Never more than one
saturated surface per screen. Status colours are muted and earth-leaning so they
cannot compete with GLØD.

**Type.** Google Sans Flex carries everything, weight 500 for display and 400
for body; headings are tight (-0.024 to -0.03em) and set at 1.02–1.15 line
height; body is 1.55–1.6. Kerning is disabled on display sizes (the variable
font mis-measures wrapped headings). Strait is the condensed secondary face for
a single headline or pull quote. Google Sans Code appears in fine print, dates
and the `:-)`.

**Backgrounds.** Flat colour, always. No gradients as decoration, no textures,
no patterns, no illustrations. The only gradients in the system are photo
scrims. The supergraphic — the Aftal mark, cropped and oversized at low opacity
— is the one graphic device, used on a clean colour field or as a transparent
white layer on a photo.

**Photography** is real: own sites, own people, materials, scaffolding, roofs.
Content photos keep their natural colour; only photos with text on top get a
scrim (KALK-tinted in light, dark in the dark theme). No stock-looking imagery,
no heavy filters — the 2026 direction moves away from the near-monochrome
treatment currently on aftal.dk. The agency status note asks for *more* photos,
especially with people in them.

**Layout.** 1240px content column, 32px gutters, 1520px for full-bleed
galleries, 64px sticky header. Sections breathe at clamp(56px, 9vw, 120px) and
are separated by a single hairline — or by the full-bleed GLØD band, which is
the one page breaker. Grids are 3-up (departments, references, steps), 2-up
(categories, contact) or a dense list of rows (services).

**Borders and elevation.** A hairline at 10% and a stronger one at 17% do the
structural work. The house card is `--tint` fill (2.5%) plus a hairline plus an
18px radius — no shadow. Shadows exist only to float white panels (dropdowns,
dialogs). Radii: 8 inputs, 10 buttons, 12 thumbnails, 14 dropdowns, 16 reference
cards, 18 cards, 100 pills.

**Hover.** Cards lift 3px, tint GLØD 6% and turn their border GLØD 45%; arrows
slide 4px right; list rows slide 10px right and tint GLØD 5%; links go from
`--ink-soft` to `--brand`; ghost buttons fill with `--panel`. **Press:** the
primary button sinks 1px. **Focus:** a 2px GLØD outline at 2px offset, on
`:focus-visible` only. Inputs swap their border to GLØD and lift the fill; their labels rest full-size inside the field and float up to an 11px label when the field is active or filled.

**Motion.** 120–200ms on `cubic-bezier(0.4, 0, 0.2, 1)`, 300ms for the theme
cross-fade. No bounce, no spring, no scroll-triggered animation. Everything
respects `prefers-reduced-motion`.

**Transparency and blur** appear twice: the sticky header (80–94% ground +
14px blur) and the cookie overlay (55% black + 3px blur). Nowhere else.

**Fixed elements.** The sticky header, and the floating dock bottom-right
(theme toggle + cookie settings) as a single pill.

---

## ICONOGRAPHY

The codebase draws its own icons inline: 24×24 grid, `stroke-width` 2 (2.5 for
the check), round caps and joins, `currentColor`, no fill. They match the Lucide
drawing style; they are reproduced in `components/core/Icon.jsx` rather than
loaded from a CDN, so the set stays exactly what the product ships: `arrow`,
`check`, `chevron`, `menu`, `close`, `sun`, `moon`, `cookie`, `image`, plus
`phone` and `mail` for contact rows. The single filled icon is the terracotta
map pin (`PinIcon`), which carries a knock-out hole so the map shows through.

Icons are functional, never decorative: an arrow after every forward link, a
check as the only bullet, a chevron for disclosure. Icons are never boxed in
circles or coloured tiles. There is no icon font, no sprite sheet, no PNG icons,
no emoji and no unicode symbols used as icons — with the single exception of the
ASCII `:-)`.

Brand assets in `assets/logo/` (PNG, extracted from the brand guide PDF):
primary lockup, single-colour black and white lockups, the mark alone (orange,
white, black) and the three department lockups. The previous wordmark-only SVGs
from the live site are kept in `assets/logo/legacy/` for reference.

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | Global entry point — imports only |
| `tokens/` | `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`, `base.css` |
| `guidelines/` | 23 specimen cards: colours, type, spacing, brand, motion |
| `components/` | React primitives (below) |
| `ui_kits/website/` | Click-through recreation of aftal.dk — see its README |
| `templates/marketing-page/` | Starting point: a full marketing page built from the system |
| `assets/logo/` | Logo lockups, department variants, the mark, legacy SVGs |
| `assets/images/` | Site photography and the Byg Garanti / DI Byggeri marks |
| `assets/fonts/` | `GoogleSansFlex.woff2` (variable, subset) |
| `SKILL.md` | Agent Skills entry point |
| `github.md` | Source repository and sync record |

### Components

- **core** — `Button`, `Badge`, `Icon` (+ `PinIcon`), `Logo`
- **cards** — `DeptCard`, `CategoryCard`, `WorkRow`, `RefCard`, `StepCard`, `Media`
- **forms** — `Field`, `Switch`, `SearchSelect`, `CallbackForm`
- **layout** — `SectionHead`, `CtaBand`, `Stat`, `UspItem`, `TrustBand`, `RelatedLink`

Every component has a sibling `.d.ts` (props) and `.prompt.md` (when and how to
use it). Each directory has one `@dsCard` HTML showing its states.

### Intentional additions

- `Icon` / `PinIcon` — the site inlines these SVGs per use site; wrapping them
  gives one place to keep the stroke rules.
- `Media` — the site's `SlotImage`/`ImageHolder` pair, merged into one slot
  component so photo treatment and the empty state stay consistent.

---

## Open decisions — please confirm

1. **GLØD vs. TEGLSTEN on screen.** The guide assigns `#D44016` to digital and
   `#B84C32` to print; production currently ships `#b94c33`. This system follows
   the guide. Switching the whole system back is a one-line change in
   `tokens/colors.css`.
2. **Light as the default theme.** The guide is KALK-dominant, and the agency
   flagged low contrast in the current light mode; production is dark-first.
   Both themes exist here, but light is now the default.
3. **The dark theme** was rebuilt on `#292826` (sampled from the guide's dark
   applications) rather than the current near-black, answering the "blødere dark
   mode" recommendation.
4. **Logo files are PNG**, rasterised from the brand guide PDF at ~800px. Vector
   originals (SVG/EPS) from the agency would replace them directly.
5. **Strait** is available from Google Fonts in Regular only; the guide also
   shows Thin and Italic. Licensed files would be needed for those.
