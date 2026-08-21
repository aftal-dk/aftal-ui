import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Media } from './Media.jsx';

function useHover() {
  const [hover, setHover] = React.useState(false);
  return [hover, { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) }];
}

/** A reference (case) card. Three per row; the last slot may be the ":-)" invitation card. */
export function RefCard({ title, meta, image, cta = 'Læs mere', smiley = false, href = '#', style }) {
  const [hover, bind] = useHover();
  return (
    <a href={href} {...bind} style={Object.assign({
      display: 'flex', flexDirection: 'column', background: 'var(--panel)',
      border: '1px solid ' + (hover ? 'var(--brand-line)' : 'var(--line)'),
      borderRadius: 'var(--radius-2xl)', overflow: 'hidden', color: 'var(--ink)', textDecoration: 'none',
      transition: 'border-color .15s ease',
    }, style)}>
      {smiley ? (
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', aspectRatio: '4 / 3', background: 'var(--glod)', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 54, fontWeight: 500, letterSpacing: '0.04em', userSelect: 'none' }}>:-)</span>
      ) : <Media src={image} ratio="4 / 3" radius="0" />}
      <span style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '22px 22px 4px' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22, letterSpacing: '-0.015em', lineHeight: 1.15 }}>{title}</span>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 14, color: 'var(--mute)', letterSpacing: '-0.005em' }}>{meta}</span>
      </span>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: hover ? 10 : 6, marginTop: 'auto', padding: '18px 22px 22px', fontSize: 14, fontWeight: 500, color: hover ? 'var(--brand)' : 'var(--ink-soft)', transition: 'gap .15s ease, color .15s ease' }}>
        {cta} <Icon name="arrow" size={15} />
      </span>
    </a>
  );
}
