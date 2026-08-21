import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Media } from './Media.jsx';

function useHover() {
  const [hover, setHover] = React.useState(false);
  return [hover, { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) }];
}

/** A category of work (Tagdækning, Tømrer) — photo on top, services listed as one quiet line. */
export function CategoryCard({ title, description, services = [], cta, image, href = '#', style }) {
  const [hover, bind] = useHover();
  return (
    <a href={href} {...bind} style={Object.assign({
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
      border: '1px solid ' + (hover ? 'rgba(212,64,22,0.45)' : 'var(--line)'),
      borderRadius: 'var(--radius-3xl)', background: hover ? 'rgba(212,64,22,0.06)' : 'var(--tint)',
      color: 'var(--ink)', textDecoration: 'none', transform: hover ? 'translateY(-3px)' : 'none',
      transition: 'border-color .2s ease, background-color .2s ease, transform .2s ease',
    }, style)}>
      <span style={{ display: 'block', borderBottom: '1px solid var(--line)' }}>
        <Media src={image} ratio="16 / 9" radius="0" label={image ? undefined : title} />
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '22px 24px 0' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 20, letterSpacing: '-0.015em', lineHeight: 1.2 }}>{title}</span>
        <span style={{ fontSize: 15, lineHeight: 1.5, color: 'var(--ink-soft)' }}>{description}</span>
        {services.length ? <span style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--mute)', marginTop: 3 }}>{services.join(' · ')}</span> : null}
      </span>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 'auto', padding: '16px 24px 22px', color: 'var(--brand)', fontWeight: 500, fontSize: 15 }}>
        {cta || 'Se ' + title.toLowerCase()} <span style={{ transform: hover ? 'translateX(4px)' : 'none', transition: 'transform .15s ease' }}><Icon name="arrow" size={15} /></span>
      </span>
    </a>
  );
}
