One-line: select til lange lister - luk: almindeligt felt; åben: søgeinput med live-filtrering, match i Glød, piletaster + Enter.

```jsx
<SearchSelect label="Ordre" placeholder="Alle ordrer" options={[
  { value: '101', label: '#101 · Eksempelordre: maling af trappeopgang', meta: 'Eksempelvej 12 · Afventer' },
]} onChange={(v) => setOrdre(v)} />
```

- Rækker har titel + valgfri meta-linje; begge søges og highlightes.
- Brug den fremfor `Field type="select"` når listen runder ~10 punkter.
