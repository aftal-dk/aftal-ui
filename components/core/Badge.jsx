import React from 'react';

/** The "Kommer snart" pill — a tinted GLØD capsule used for services not live yet. */
export function Badge({ children = 'Kommer snart', size = 'sm', style, ...rest }) {
  const small = size === 'sm';
  return (
    <span style={Object.assign({
      display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap',
      fontSize: small ? 10 : 12, fontWeight: 500, lineHeight: 1,
      color: 'var(--brand)', background: 'var(--brand-soft)',
      border: '1px solid var(--brand-line)', borderRadius: 'var(--radius-pill)',
      padding: small ? '3px 7px' : '4px 11px',
    }, style)} {...rest}>{children}</span>
  );
}
