import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** A photo slot. Real photography gets the house treatment; an empty slot is a flat panel. */
export function Media({ src, alt = '', ratio = '4 / 3', radius = 'var(--radius-lg)', label, style }) {
  const frame = Object.assign({
    position: 'relative', display: 'block', width: '100%', aspectRatio: ratio,
    borderRadius: radius, overflow: 'hidden', background: 'var(--panel-2)',
  }, style);
  if (!src) {
    return (
      <span style={Object.assign({}, frame, { display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--mute-2)' })}>
        {label ? <span style={{ fontSize: 12, letterSpacing: '0.04em' }}>{label}</span> : <Icon name="image" size={24} />}
      </span>
    );
  }
  return (
    <span style={frame}>
      <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'var(--photo-filter-content)' }} />
      <span style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'var(--photo-overlay-content)' }} />
    </span>
  );
}
