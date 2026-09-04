One-line: flat tint placeholders in the shape of the content on its way - the default loading state for any content area.

```jsx
// a page: header and filters stay, only the content area is a placeholder
{loading ? <SkeletonList rows={8} /> : <OrderTable rows={orders} />}

// a card: mirror the real layout
<div className="card">
  <Skeleton width={160} height={20} />
  <Skeleton width="60%" style={{ marginTop: 12 }} />
  <Skeleton height={120} radius={12} style={{ marginTop: 16 }} />
</div>
```

- Keep the frame: navigation, page title, filters and buttons render as usual; the skeleton replaces only what is loading. Never blank the whole screen.
- Match the shape: a table gets rows, a card gets its title line and its image block. A single grey slab tells the user nothing.
- 9% of `currentColor`, no shimmer, no pulse - the brand is flat and calm, and the system's reduced-motion rule would freeze any animation anyway.
- `SkeletonList` carries `role="status"` and a label; a lone `Skeleton` is `aria-hidden`, so wrap custom compositions in an element with `role="status" aria-label="Henter…"`.
- Appears after 200ms: a fast response shows nothing, a slow one shows the shape.
