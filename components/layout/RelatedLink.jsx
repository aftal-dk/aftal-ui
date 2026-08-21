import React from 'react';
import { Icon } from '../core/Icon.jsx';

function useHover() {
  const [hover, setHover] = React.useState(false);
  return [hover, { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) }];
}

/** Pill link to a neighbouring service or page. */
export function RelatedLink({ children, href = '#', style }) {
  const [hover, bind] = useHover();
  return (
    <a href={href} {...bind} style={Object.assign({
      display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 18px',
      border: '1px solid ' + (hover ? 'var(--brand-line)' : 'var(--line-2)'),
      borderRadius: 'var(--radius-pill)', fontSize: 15, textDecoration: 'none',
      color: hover ? 'var(--ink)' : 'var(--ink-soft)', transition: 'border-color .15s ease, color .15s ease',
    }, style)}>{children} <Icon name="arrow" size={15} /></a>
  );
}
