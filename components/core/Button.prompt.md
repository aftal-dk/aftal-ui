One-line: Aftal's action button — GLØD orange primary, hairline ghost, white on-brand.

```jsx
<Button href="/kontakt" size="lg">Få et uforpligtende tilbud <Icon name="arrow" /></Button>
<Button variant="ghost" size="lg">Se vores ydelser</Button>
```

- `variant`: `primary` (GLØD, white text) · `ghost` (transparent, --line-2 border) · `onbrand` (white button, only inside a GLØD band).
- `size`: `md` 48px · `lg` 54px (hero, form submit).
- Press state nudges 1px down; hover darkens to --brand-hover. Never more than one primary per view.
- Labels are lowercase sentence case in Danish, verb first: "Få et uforpligtende tilbud", "Bliv ringet op", "Ring mig op".
