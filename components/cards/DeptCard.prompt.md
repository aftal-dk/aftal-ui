One-line: the department card - used as a pair (Byggeri and Drift), never alone.

```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
  <DeptCard name="Aftal Byggeri" tag="Egne håndværkere, fast byggeledelse" description="Opførelse med egne faggrupper og én ansvarlig byggeleder." href="/byggeri" />
</div>
```

- Hover tints the fill with `--accent-wash` and turns the border `--accent-line`. Colour fades only - nothing moves. The department is named in words only: departments have no colour of their own, and `data-dept` is not used.
- On mobile the grid collapses to one column below 860px.
