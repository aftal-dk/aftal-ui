One-line: select til lange lister — luk: almindeligt felt; åben: søgeinput med live-filtrering, match i GLØD, piletaster + Enter.

```jsx
<SearchSelect label="Ordre" placeholder="Alle ordrer" options={[
  { value: '308', label: '#308 · Genmonter køkkenskab på væg', meta: 'Engtoften 12 · Afventer' },
]} onChange={(v) => setOrdre(v)} />
```

- Rækker har titel + valgfri meta-linje; begge søges og highlightes.
- Brug den fremfor `Field type="select"` når listen runder ~10 punkter.
