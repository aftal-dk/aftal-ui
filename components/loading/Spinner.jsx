import React from 'react';
import { LoadingStyles, SR_ONLY } from './LoadingStyles.jsx';

// 2*pi*9 = 56.55; a 42 dash is a three-quarter arc.
const CIRCUMFERENCE = 56.55;

/**
 * The system's only spinner. Inherits `currentColor`, so it is white on a
 * GLØD button and muted on a muted line. Appears after `delay` ms.
 */
export function Spinner({ size = 16, label = 'Henter…', showLabel = false, delay = 200, style, ...rest }) {
  const hasLabel = !!label;
  const a11y = hasLabel ? { role: 'status', 'aria-live': 'polite' } : { 'aria-hidden': true };
  return (
    <>
      <LoadingStyles />
      <span {...a11y} className="aftal-loading" style={Object.assign({
        display: 'inline-flex', alignItems: 'center', gap: 8, verticalAlign: 'middle',
        lineHeight: 1, '--aftal-loading-delay': `${delay}ms`,
      }, style)} {...rest}>
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ display: 'block', flexShrink: 0 }}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" opacity="0.2" />
          <circle className="aftal-spinner__ring" cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeDasharray={`42 ${CIRCUMFERENCE}`} />
        </svg>
        {hasLabel ? <span style={showLabel ? { fontSize: 'inherit' } : SR_ONLY}>{label}</span> : null}
      </span>
    </>
  );
}
