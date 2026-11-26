import React from 'react';

// Consumers copy /assets into their own project; point this at wherever it lands.
const base = () => (typeof window !== 'undefined' && window.AFTAL_ASSET_BASE) || 'assets';

// The files are single-colour SVG: white for dark grounds, black for light ones.
const FILE = {
  white: '/logo/aftal-logo-hvid.svg',
  black: '/logo/aftal-logo-sort.svg',
  'icon-white': '/logo/aftal-ikon-hvid.svg',
  'icon-black': '/logo/aftal-ikon-sort.svg',
  app: '/logo/aftal-appikon.svg',
};

// `primary` and `icon` follow the theme: both files are rendered and the theme
// (see tokens/base.css) shows the right one.
const AUTO = { primary: ['white', 'black'], icon: ['icon-white', 'icon-black'] };

/** The Aftal' logo. Never rebuild it in markup or set it as text - always the file.
 *  The department variants (byggeri, udvikling, drift) are retired: the new
 *  brand has no department lockup files, so they render the plain logo. */
export function Logo({ variant = 'primary', height = 40, src, alt = 'Aftal', style, ...rest }) {
  const h = typeof height === 'string' && /^\d+$/.test(height) ? Number(height) : height; // x-import attrs arrive as strings
  const css = Object.assign({ height: h, width: 'auto' }, style);
  if (src) return <img src={src} alt={alt} className="aftal-logo" style={css} {...rest} />;
  const v = FILE[variant] ? variant : (AUTO[variant] ? variant : 'primary');
  if (FILE[v]) return <img src={base() + FILE[v]} alt={alt} className="aftal-logo" style={css} {...rest} />;
  const [onDark, onLight] = AUTO[v];
  return (
    <>
      <img src={base() + FILE[onDark]} alt={alt} className="aftal-logo aftal-logo--on-dark" style={css} {...rest} />
      <img src={base() + FILE[onLight]} alt={alt} className="aftal-logo aftal-logo--on-light" style={css} {...rest} />
    </>
  );
}
