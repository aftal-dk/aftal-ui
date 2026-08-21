One-line: the consent toggle — 44x26 track that turns GLØD when on.

```jsx
<Switch defaultChecked locked label="Nødvendige" />
<Switch onChange={(on) => setStats(on)} />
```

- Locked toggles stay on at 60% opacity — the state is honest, just not editable.
