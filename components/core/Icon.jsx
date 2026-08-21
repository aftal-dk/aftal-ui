import React from 'react';

// Stroke icons as drawn in the Aftal codebase: 24x24 grid, stroke-width 2
// (2.5 for the check), round caps and joins, currentColor.
const PATHS = {
  arrow: ['M5 12h14', 'm12 5 7 7-7 7'],
  check: ['M20 6 9 17l-5-5'],
  chevron: ['m6 9 6 6 6-6'],
  menu: ['M4 6h16', 'M4 12h16', 'M4 18h16'],
  close: ['M18 6 6 18', 'm6 6 12 12'],
  moon: ['M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'],
  sun: ['M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41'],
  cookie: ['M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5', 'M8.5 8.5v.01', 'M16 15.5v.01', 'M12 12v.01', 'M11 17v.01', 'M7 14v.01'],
  image: ['M3 3h18v18H3z', 'm21 15-3.6-3.6a2 2 0 0 0-2.8 0L6 20'],
  phone: ['M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z'],
  mail: ['M4 4h16v16H4z', 'm22 6-10 7L2 6'],
};

/** Aftal's stroke icon set. Sizes are pixel values, colour follows currentColor. */
export function Icon({ name = 'arrow', size = 16, strokeWidth, style, ...rest }) {
  const d = PATHS[name] || PATHS.arrow;
  const sw = strokeWidth || (name === 'check' ? 2.5 : 2);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      style={Object.assign({ display: 'block', flex: 'none' }, style)} {...rest}>
      {name === 'sun' ? <circle cx="12" cy="12" r="4" /> : null}
      {name === 'image' ? <circle cx="9" cy="9" r="2" /> : null}
      {d.map((p, i) => <path key={i} d={p} />)}
    </svg>
  );
}

/** The terracotta map marker — a filled shape, so it lives outside the stroke set. */
export function PinIcon({ width = 32, height = 42, style }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 32" fill="none" style={style} aria-hidden="true">
      <path fill="var(--brand)" fillRule="evenodd"
        d="M12 0C5.37 0 0 5.37 0 12c0 8.5 12 20 12 20s12-11.5 12-20C24 5.37 18.63 0 12 0zM12 7.6a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 1 0 0-8.8z" />
    </svg>
  );
}
