import React from 'react';

/** A single KPI. Used in rows of four (or 2x2 beside a lead paragraph). */
export function Stat({ value, label, text = false, style }) {
  return (
    <div style={Object.assign({ display: 'flex', flexDirection: 'column', gap: 6 }, style)}>
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.03em',
        fontSize: text ? 'clamp(20px, 2.2vw, 28px)' : 'clamp(34px, 4vw, 52px)',
        color: text ? 'var(--brand)' : 'var(--ink)',
      }}>{value}</span>
      <span style={{ fontSize: 14, color: 'var(--mute)' }}>{label}</span>
    </div>
  );
}
