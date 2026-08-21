One-line: the Aftal lockup — primary, single-colour, icon-only and department variants.

```jsx
<Logo height={39} />                       // header, light ground
<Logo variant="white" height={34} />       // on photography or the dark theme
<Logo variant="byggeri" height={30} />     // department-specific material
<Logo variant="icon" height={28} />        // favicon, avatar, tight spaces
```

- Set `window.AFTAL_ASSET_BASE` to wherever `/assets` was copied (defaults to `assets`).
- The lockup is never redrawn, recoloured outside the palette, rotated, or split apart. Department names never appear without the wordmark.
- Clear space around the lockup is at least the height of the mark's circle.
- Assets are PNG (extracted from the 2026 brand guide PDF) — ask the agency for the vector originals before print work.
