One-line: a KPI — big display number over a lowercase label.

```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, padding: '32px 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
  <Stat value="9" label="faste folk" />
  <Stat value="450+" label="lejemål" />
</div>
```

- Stat rows are fenced by hairlines top and bottom, never boxed in cards.
- Only real, verifiable numbers. Four is the maximum in a row.
