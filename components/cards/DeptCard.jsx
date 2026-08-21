import React from 'react';

function useHover() {
  const [hover, setHover] = React.useState(false);
  return [hover, { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) }];
}

/** One of the three departments — Udvikling, Byggeri, Drift. Always shown as a set of three. */
export function DeptCard({ name, tag, description, href = '#', style, ...rest }) {
  const [hover, bind] = useHover();
  return (
    <a href={href} {...bind} {...rest} style={Object.assign({
      display: 'flex', flexDirection: 'column', gap: 10, padding: '30px 28px 26px',
      border: '1px solid ' + (hover ? 'rgba(212,64,22,0.45)' : 'var(--line)'),
      borderRadius: 'var(--radius-3xl)', background: hover ? 'rgba(212,64,22,0.06)' : 'var(--tint)',
      color: 'var(--ink)', textDecoration: 'none',
      transition: 'border-color .2s ease, background-color .2s ease',
    }, style)}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 26, letterSpacing: '-0.02em', lineHeight: 1.1 }}>{name}</span>
      <span style={{ fontSize: 15, fontWeight: 500, color: 'var(--ink-soft)' }}>{tag}</span>
      <span style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--mute)', marginTop: 2 }}>{description}</span>
    </a>
  );
}
