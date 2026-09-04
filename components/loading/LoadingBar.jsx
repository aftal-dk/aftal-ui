import React from 'react';
import { LoadingStyles } from './LoadingStyles.jsx';

/**
 * A 2px GLØD bar along the top edge of a panel whose content is visible and
 * being refreshed. The parent needs `position: relative`. Renders nothing
 * when `active` is false, so call sites can keep it mounted.
 */
export function LoadingBar({ active = true, label = 'Henter…', delay = 200, style, ...rest }) {
  if (!active) return null;
  return (
    <>
      <LoadingStyles />
      <span role="progressbar" aria-label={label} className="aftal-loading-bar" style={Object.assign({
        position: 'absolute', top: 0, left: 0, right: 0, height: 2, pointerEvents: 'none',
        background: 'var(--brand, #d44016)', '--aftal-loading-delay': `${delay}ms`,
      }, style)} {...rest} />
    </>
  );
}
