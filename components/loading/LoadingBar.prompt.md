One-line: a 2px GLØD bar at the top of a panel that is refreshing behind content the user can already see.

```jsx
<section style={{ position: 'relative' }}>
  <LoadingBar active={refetching} />
  <OrderTable rows={orders} />
</section>
```

- For the second and later loads only: filters changed, a save came back, a poll ticked. The first load of an empty area is a `Skeleton`.
- The content stays where it is and stays usable. Never dim it, never put a spinner over it.
- The parent must be `position: relative`; the bar is absolutely positioned along its top edge.
- Pulses gently (35% to 100%) and holds still under `prefers-reduced-motion`. Appears after 200ms like every other loading element.
