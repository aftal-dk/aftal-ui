One-line: the service row — Aftal's list format for many services, denser and quieter than cards.

```jsx
<div style={{ borderTop: '1px solid var(--line)' }}>
  <WorkRow title="Tagpap" description="Tæt, vedligeholdelsesfrit tag til flade og lave taghældninger."
    points={['Flade tage', 'Lav hældning', 'Nylægning & udskiftning']} />
  <WorkRow title="Droner" description="Droneinspektion af tag og facade." soon />
</div>
```

- The list owns the top hairline; each row draws its own bottom hairline.
- Hover slides the row 10px right and tints it GLØD 5% — the only place in the system where padding animates.
