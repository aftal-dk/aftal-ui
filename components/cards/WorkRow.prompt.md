One-line: the service row — Aftal's list format for many services, denser and quieter than cards.

```jsx
<div style={{ borderTop: '1px solid var(--line)' }}>
  <WorkRow title="Tagpap" description="Tæt, vedligeholdelsesfrit tag til flade og lave taghældninger."
    points={['Flade tage', 'Lav hældning', 'Nylægning & udskiftning']} />
  <WorkRow title="Droner" description="Droneinspektion af tag og facade." soon />
</div>
```

- The list owns the top hairline; each row draws its own bottom hairline.
- Hover tints the row GLØD 5%. Colour fade only - the row stays put.
