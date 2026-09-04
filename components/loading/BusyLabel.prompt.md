One-line: the inside of a busy button, for raw `<button>` elements that are not a `<Button>` yet.

```jsx
<button disabled={saving} onClick={save}>
  <BusyLabel busy={saving}>Gem</BusyLabel>
</button>
```

- Replaces the `{saving ? 'Gemmer...' : 'Gem'}` text swap: the label stays put, a spinner appears in front of it, the button width does not jump.
- Pair it with `disabled={busy}` on the button; the label does not disable anything by itself.
- Migration aid only. New UI uses `<Button loading>`, which renders the same thing.
