# Aftal Design System

Aftal ApS is a Danish property company based in Støvring, Nordjylland. Aftal
bygger og drifter ejendomme through two departments: **Byggeri** and **Drift**.
The name is the promise. The tagline is *Når en aftal' er en aftal'*: a deal is
a deal, a North Jutland value. We show up, and we do what we said. The strategy
line is *En ny standard for ejendomme.*

This is the new Aftal brand: a dark ground, the logo as the single-colour word
**Aftal'**, and Glød as Aftal's colour. Purple is reserved for AI.

---

## CONTENT FUNDAMENTALS

**Language.** Everything the user reads is Danish. No English UI words. Code,
token names and file names in code are English.

**Address.** *Vi* about Aftal, *du* to a private customer, *I* to a company or
an association. Never "man".

**Tone.** Informal and North Jutlandic, respectful, factual, modern and in
conversation with the reader. Warm, but never at the expense of credibility.

**Casing.** Sentence case everywhere. No all-caps labels, no small label lines
above headings, no Title Case On Buttons.

**Headlines** are short statements that end in a full stop:

> En ny standard for ejendomme.
> To afdelinger, ét hold.
> Én aftale. Én kontaktperson.
> Mennesker, der møder op.
> Op til tiden. Ned til tiden.

**Buttons** start with a verb: "Få et tilbud", "Bliv ringet op", "Læs mere".

**Promises are concrete**: "Vi vender tilbage inden for 24 timer", never only
"hurtigst muligt".

**Honesty in states.** A service that is not live says "Kommer snart". A failed
form says it failed and gives the phone number. Status is always written in
words; colour alone never carries it.

**Fixed spellings.**
- The tagline is written exactly *Når en aftal' er en aftal'*, lowercase a,
  apostrophe, no full stop.
- Aftal *drifter* ejendomme: write "drifte" and "drifter", not "drive".
- Never en or em dashes: use a hyphen with spaces, or a comma.
- No superscripts: write "m2".
- Dates DD.MM.YYYY, times with a colon (09:15).
- Amounts in whole kroner, always stating whether they are incl. or excl. moms.
- No emoji.

---

## VISUAL FOUNDATIONS

**Ground.** Dark is the default theme: `#111111`, with panels stepping up to
`#1c1c1c`, `#242424` and `#2c2c2c`. Light (`#ffffff` with `#f4f4f4` panels) is
for print, documents and places that need a light surface. Set the theme with
`data-theme="dark"` or `data-theme="light"` on `<html>`.

**Colour.** Glød `#d44016` is the brand colour and the active colour
`--accent`, in both themes. A primary button is Glød with white text
(`--accent-ink`). Focus, active tabs and the unread dot are Glød. Use it
sparingly: the rest is black, grey and white. Plain Glød is too dark for small
text on the dark ground, so small text and links in the brand colour use
`--accent-text`.

- **Purple is AI.** `--ai`, `--ai-soft` and `--ai-line` mark what an agent or AI
  has written or suggests. Never for anything else, never as decoration, and the
  label always says in words that it is from an AI.
- **Status colours** (`--status-success`, `-error`, `-warning`, `-info`) only
  mean a state, and the state is always written. They are muted so they are not
  mistaken for Glød. In the light theme `--status-warning` is darker than in the
  dark theme so that it stays readable as text.
- **Drift colour is not final.** The department switch exists (`data-dept` and
  the `--drift*` tokens), but nothing in this library or its gallery uses it.
  Do not set `data-dept="drift"` in new work until the colour is decided.
- At most one saturated surface per screen. Flat colour only: no gradients as
  decoration, no patterns. No information boxes with a coloured side line.

**Type.**
| Role | Face | Weight |
| --- | --- | --- |
| Headings, key figures | Gabarito | 800 (hero, h1, h2, stat), 700 (h3, h4) |
| Body text and UI | Google Sans Flex | 400, 500, 600 |
| Numbers and code | Google Sans Code | 400 |

Headings are tight (line height 1.04 to 1.1, tracking -0.02em); body text is
airy (1.6). Gabarito is never used for long text or dense tables. Gabarito and
Google Sans Flex are served from `assets/fonts` (SIL Open Font License);
Google Sans Code is loaded from Google Fonts.

**Layout.** 1240px content column, 32px gutters, 64px sticky header, sections
that breathe at clamp(56px, 9vw, 120px) and are separated by a hairline or by
the full-bleed Glød band.

**Borders and elevation.** A hairline at 10% and a stronger one at 17% do the
structural work. The house card is the `--tint` fill, a hairline and an 18px
radius, with no shadow. Shadows exist only for floating surfaces such as
dropdowns. Radii: 8 inputs, 10 buttons, 12 thumbnails, 14 dropdowns, 16
reference cards, 18 cards, 100 pills.

**Hover and focus.** Hover is a colour fade only: elements never move, grow or
slide. Cards tint with `--accent-wash` and take an `--accent-line` border; rows
tint the same way; links go to `--accent-text`. The primary button sinks 1px on
press. Focus is a 2px ring in `--accent` at 2px offset, on `:focus-visible`
only; fields double their border with a 1px ring instead.

**Motion.** 120 to 200ms on `cubic-bezier(0.4, 0, 0.2, 1)`, 300ms for the theme
cross-fade. No bounce, no spring, nothing triggered by scrolling. Everything
respects `prefers-reduced-motion`.

**Photography** is real: own sites, people and materials. Content photos keep
their natural colour; a photo with text on top gets a scrim in the theme's
ground colour.

**Loading.** Four states, nothing else. (1) *Content that is not here yet*
shows a `Skeleton` in the shape of what is coming; navigation and titles stay
put. Skeletons are a flat 9% tint of the text colour, no shimmer. (2) *An action
in flight* shows a `Spinner` inside the control that started it: `Button
loading` keeps the label, puts the spinner in front of it, disables the button
and sets `aria-busy`. (3) *Data refreshing behind visible content* shows a 2px
Glød `LoadingBar` along the top of the panel. (4) *A route chunk loading* uses
the framework fallback with the same page skeleton.

Every loading element waits 200ms before it appears, so a fast response never
flickers. Text only where a skeleton makes no sense: one verb, *Henter…* with
the single ellipsis character, optionally followed by the object. Never
*Indlæser*, *Loading* or *Vent venligst*. Every loading element carries
`role="status"` and a screen-reader label.

---

## LOGO

The logo is the word **Aftal'**, drawn from Gabarito bold, as a single-colour
SVG in `assets/logo/`.

| File | Use |
| --- | --- |
| `aftal-logo-hvid.svg` | Main logo on dark grounds and on Glød. |
| `aftal-logo-sort.svg` | Main logo on light grounds. |
| `aftal-ikon-hvid.svg`, `aftal-ikon-sort.svg` | The icon (A with apostrophe), no background. |
| `aftal-appikon.svg` | The icon on a dark tile. |

The `Logo` component renders these files; `Logo` with no variant follows the
theme. The logo is always one colour, never redrawn, set as text, stretched,
rotated or shadowed. Clear space is about half the logo's height. Under 10px
height use the icon. Favicon and touch icons are in `assets/favicon/`.

---

## ICONOGRAPHY

Icons are drawn inline: 24x24 grid, `stroke-width` 2 (2.5 for the check), round
caps and joins, `currentColor`, no fill. They live in `components/core/Icon.jsx`:
`arrow`, `check`, `chevron`, `menu`, `close`, `sun`, `moon`, `cookie`, `image`,
`phone`, `mail`. The single filled icon is the map pin (`PinIcon`).

Icons are functional, never decorative: an arrow after a forward link, a check
as the only bullet, a chevron for disclosure. Never boxed in circles or tiles.
No icon font, no emoji.

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | Global entry point, imports only |
| `tokens/` | `colors.css`, `departments.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`, `base.css` |
| `components/` | React components, each with `.d.ts` and `.prompt.md` |
| `assets/` | Fonts, logo SVGs, favicon, membership marks, photos |
| `gallery/` | The gallery app, built with Vite |
| `CHANGELOG.md` | Version history |

### Components

- **core**: `Button`, `Badge`, `Icon` (+ `PinIcon`), `Logo`
- **cards**: `DeptCard`, `CategoryCard`, `WorkRow`, `RefCard`, `StepCard`, `Media`
- **forms**: `Field`, `Switch`, `SearchSelect`, `CallbackForm`
- **loading**: `Spinner`, `Skeleton` (+ `SkeletonList`), `LoadingBar`, `BusyLabel`
- **layout**: `SectionHead`, `CtaBand`, `Stat`, `UspItem`, `TrustBand`, `RelatedLink`

Components read colour only through tokens, and from the active colour through
`--accent`, `--accent-ink`, `--accent-hover`, `--accent-text`, `--accent-soft`
and `--accent-line`. The older `--brand*` names still work and follow the
accent.
