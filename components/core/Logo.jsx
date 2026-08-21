import React from 'react';

// Consumers copy /assets into their own project; point this at wherever it lands.
const base = () => (typeof window !== 'undefined' && window.AFTAL_ASSET_BASE) || 'assets';

const SRC = {
  primary: '/logo/aftal-primary.png',
  white: '/logo/aftal-white.png',
  black: '/logo/aftal-black.png',
  icon: '/logo/aftal-icon.png',
  'icon-white': '/logo/aftal-icon-white.png',
  'icon-black': '/logo/aftal-icon-black.png',
  byggeri: '/logo/aftal-byggeri.png',
  udvikling: '/logo/aftal-udvikling.png',
  drift: '/logo/aftal-drift.png',
};

/** The Aftal mark. Never rebuild it in markup — always this file. */
export function Logo({ variant = 'primary', height = 40, src, alt = 'Aftal', style, ...rest }) {
  const h = typeof height === 'string' && /^\d+$/.test(height) ? Number(height) : height; // x-import attrs arrive as strings
  const url = src || (base() + SRC[variant]);
  return <img src={url} alt={alt} style={Object.assign({ height: h, width: 'auto', display: 'block' }, style)} {...rest} />;
}
