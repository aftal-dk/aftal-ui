One-line: the department card — used as a set of three (Udvikling, Byggeri, Drift), never alone.

```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
  <DeptCard name="Aftal Udvikling" tag="Fra grund til færdigt projekt" description="Vi tager ejendomsprojekter fra idé og grundkøb gennem myndigheder, økonomi og design." href="/udvikling" />
</div>
```

- Hover tints the fill GLØD 6% and turns the border GLØD 45%. Colour fades only - nothing moves.
- On mobile the grid collapses to one column below 860px.
