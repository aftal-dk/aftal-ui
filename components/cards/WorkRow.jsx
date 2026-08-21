import React from 'react';
import { Media } from './Media.jsx';
import { Badge } from '../core/Badge.jsx';

function useHover() {
  const [hover, setHover] = React.useState(false);
  return [hover, { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) }];
}

/** A service row — the dense list format used on department and category pages. */
export function WorkRow({ title, description, points = [], image, soon = false, href = '#', style }) {
  const [hover, bind] = useHover();
  return (
    <a href={href} {...bind} style={Object.assign({
      display: 'grid', gridTemplateColumns: '132px 1fr', gap: 28, alignItems: 'center',
      padding: '20px 8px', borderBottom: '1px solid var(--line)',
      background: hover ? 'rgba(212,64,22,0.05)' : 'transparent',
      color: 'var(--ink)', textDecoration: 'none', opacity: soon ? 0.72 : 1,
      transition: 'background-color .15s ease',
    }, style)}>
      <Media src={image} ratio="4 / 3" radius="var(--radius-lg)" style={{ border: '1px solid var(--line)' }} />
      <span style={{ display: 'flex', flexDirection: 'column', gap: 5, minWidth: 0 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 20, letterSpacing: '-0.015em', lineHeight: 1.2, display: 'inline-flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          {title}{soon ? <Badge size="md" /> : null}
        </span>
        <span style={{ fontSize: 15, lineHeight: 1.5, color: 'var(--ink-soft)' }}>{description}</span>
        {points.length ? <span style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--mute)', marginTop: 3 }}>{points.join(' · ')}</span> : null}
      </span>
    </a>
  );
}
