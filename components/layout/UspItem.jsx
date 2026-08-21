import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** A promise line with the GLØD check. The bullet style for everything Aftal claims. */
export function UspItem({ children, size = 20, style }) {
  return (
    <li style={Object.assign({ display: 'flex', gap: 14, alignItems: 'flex-start', listStyle: 'none' }, style)}>
      <span style={{ color: 'var(--brand)', flex: 'none', marginTop: 1 }}><Icon name="check" size={size} /></span>
      <span style={{ fontSize: 17, lineHeight: 1.5, color: 'var(--ink-soft)' }}>{children}</span>
    </li>
  );
}
