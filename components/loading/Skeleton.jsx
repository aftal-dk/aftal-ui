import React from 'react';
import { LoadingStyles } from './LoadingStyles.jsx';

/**
 * A flat placeholder in the shape of the content that is on its way: a 9%
 * tint of `currentColor`, no shimmer, no movement. Appears after `delay` ms.
 */
export function Skeleton({ width = '100%', height = 14, radius = 6, delay = 200, style, ...rest }) {
  return (
    <>
      <LoadingStyles />
      <span aria-hidden="true" className="aftal-loading aftal-skeleton" style={Object.assign({
        display: 'block', width, height, borderRadius: radius, flexShrink: 0,
        '--aftal-loading-delay': `${delay}ms`,
      }, style)} {...rest} />
    </>
  );
}

// Line widths cycle through these so a list reads as text, not as bars.
const WIDTHS = ['72%', '48%', '64%', '56%', '80%', '40%'];

/**
 * A list of rows on their way. Wraps the rows in `role="status"` with a
 * screen-reader label, so a page that renders it is announced as loading.
 */
export function SkeletonList({ rows = 5, rowHeight = 14, gap = 12, label = 'Henter…', delay = 200, style, ...rest }) {
  return (
    <div role="status" aria-live="polite" aria-label={label} style={Object.assign({ display: 'flex', flexDirection: 'column', gap }, style)} {...rest}>
      {Array.from({ length: rows }, (_, i) => (
        <Skeleton key={i} width={WIDTHS[i % WIDTHS.length]} height={rowHeight} delay={delay} />
      ))}
    </div>
  );
}
