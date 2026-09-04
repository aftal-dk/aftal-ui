One-line: the one spinner - a three-quarter arc in `currentColor` that appears after 200ms.

```jsx
<Spinner />                                   // 16px, sr-only "Henter…"
<Spinner size={20} label="Henter ordrer…" showLabel />
<Button loading>Gem</Button>                  // Button renders it for you
```

- Use it for an action in flight, inside the control that started it, or for a one-line inline wait. A content area that is empty because data has not arrived uses `Skeleton`, never a spinner.
- Inherits colour: white on a GLØD button, `--mute` in a caption. Do not pass a colour prop; set `color` on the parent.
- `delay` defaults to 200ms so a fast response shows nothing at all. Pass `delay={0}` only where the wait is certain (a button that was just pressed does this itself).
- Text, when shown, is one verb: "Henter…" (single ellipsis character), optionally with the object: "Henter ordrer…". Never "Indlæser", "Loading" or "Vent venligst".
- Under `prefers-reduced-motion` the arc is static. It is the only rotating element in the system.
