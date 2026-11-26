One-line: the Aftal' logo - the word as a single-colour SVG, the icon, and the app icon.

```jsx
<Logo height={28} />                       // follows the theme: white in dark, black in light
<Logo variant="white" height={34} />       // fixed white, on photography or a dark flat
<Logo variant="icon" height={28} />        // tight spaces, under 10 px height use the icon
<Logo variant="app" height={48} />         // app icon on a dark tile
```

- Set `window.AFTAL_ASSET_BASE` to wherever `/assets` was copied (defaults to `assets`).
- The logo is always one colour and always the file: never redrawn, set as text, stretched, rotated, shadowed or recoloured. The apostrophe is part of the logo.
- `primary` and `icon` render both the white and the black file inside one element that carries the name (`role="img"`, the images are decorative). The black file is hidden inline, so without `styles.css` only the white one shows; with it, the theme (`data-theme` on `<html>`) swaps them. `className`, `style` and `id` go on that element.
- Clear space around the logo is about half its height.
- The department variants (`byggeri`, `udvikling`, `drift`) are retired and render the plain logo.
