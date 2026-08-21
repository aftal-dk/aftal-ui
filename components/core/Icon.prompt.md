One-line: the stroke icon set — arrows, check, chevron, menu, theme and contact glyphs — at 24x24, stroke 2, currentColor.

```jsx
<Button>Læs mere <Icon name="arrow" size={15} /></Button>
<span style={{ color: 'var(--brand)' }}><Icon name="check" size={20} /></span>
```

- Icons inherit colour from the parent; brand-coloured icons sit in a wrapper with `color: var(--brand)`.
- `arrow` follows its parent link or card and never moves on hover. `check` is always the bullet in USP and service lists.
- `PinIcon` is the filled terracotta map marker; it is the only filled icon in the system.
