import React from 'react';
import { Button } from '../core/Button.jsx';
import { Icon } from '../core/Icon.jsx';

/** Full-bleed GLØD band — the page breaker that separates long stretches of content. */
export function CtaBand({ title, cta = 'Bliv ringet op', href = '#kontakt', style }) {
  return (
    <section style={Object.assign({ background: 'var(--glod)', padding: 'clamp(64px, 7vw, 96px) 0' }, style)}>
      <div className="wrap">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px 48px', flexWrap: 'wrap' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(24px, 2.6vw, 38px)', letterSpacing: '-0.02em', lineHeight: 1.1, color: '#fff', margin: 0 }}>{title}</h2>
          <Button variant="onbrand" size="lg" href={href}>{cta} <Icon name="arrow" /></Button>
        </div>
      </div>
    </section>
  );
}
