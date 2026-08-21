import React from 'react';

/** One step in "Sådan arbejder vi" — three per row, no numbers, no icons. */
export function StepCard({ title, children, style }) {
  return (
    <div style={Object.assign({
      display: 'flex', flexDirection: 'column', gap: 8, padding: '26px 26px 24px',
      border: '1px solid var(--line)', borderRadius: 'var(--radius-3xl)', background: 'var(--tint)',
    }, style)}>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 19, letterSpacing: '-0.012em', color: 'var(--ink)', margin: 0 }}>{title}</h3>
      <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--ink-soft)', margin: 0 }}>{children}</p>
    </div>
  );
}
