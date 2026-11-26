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

// `primary` and `icon` follow the theme: both files are rendered inside one
// element that carries the accessible name (the two images are decorative).
// The light file is hidden inline, so without a stylesheet only the white file
// shows and only one logo is announced. With styles.css the theme (see
// tokens/base.css) swaps which of the two is visible.
const AUTO = { primary: ['white', 'black'], icon: ['icon-white', 'icon-black'] };

/** The Aftal' logo. Never rebuild it in markup or set it as text - always the file.
 *  The department variants (byggeri, udvikling, drift) are retired: the new
 *  brand has no department lockup files, so they render the plain logo. */
export function Logo({ variant = 'primary', height = 40, src, alt = 'Aftal', className, style, ...rest }) {
  const h = typeof height === 'string' && /^\d+$/.test(height) ? Number(height) : height; // x-import attrs arrive as strings
  const imgCss = { height: h, width: 'auto', display: 'block' };
  const cls = (extra) => ['aftal-logo', extra, className].filter(Boolean).join(' ');
  if (src) return <img src={src} alt={alt} className={cls()} style={Object.assign(imgCss, style)} {...rest} />;
  const v = FILE[variant] || AUTO[variant] ? variant : 'primary';
  if (FILE[v]) return <img src={base() + FILE[v]} alt={alt} className={cls()} style={Object.assign(imgCss, style)} {...rest} />;
  const [onDark, onLight] = AUTO[v];
  return (
    <span role="img" aria-label={alt} className={cls()} style={Object.assign({ display: 'block', width: 'fit-content', lineHeight: 0 }, style)} {...rest}>
      <img src={base() + FILE[onDark]} alt="" aria-hidden="true" className="aftal-logo__img aftal-logo__img--on-dark" style={imgCss} />
      <img src={base() + FILE[onLight]} alt="" aria-hidden="true" className="aftal-logo__img aftal-logo__img--on-light" style={Object.assign({}, imgCss, { display: 'none' })} />
    </span>
  );
}
