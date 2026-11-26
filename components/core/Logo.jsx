import React from 'react';

// Consumers copy /assets into their own project; point this at wherever it lands.
const base = () => (typeof window !== 'undefined' && window.AFTAL_ASSET_BASE) || 'assets';

// The files are single-colour SVG: white for dark grounds, black for light ones.
const FILE = {
  white: '/logo/aftal-logo-hvid.svg',
  black: '/logo/aftal-logo-sort.svg',
  'icon-white': '/logo/aftal-ikon-hvid.svg',
  'icon-black': '/logo/aftal-ikon-sort.svg',
  app: '/logo/aftal-appikon.svg',            // the icon on a Glød tile
  'app-black': '/logo/aftal-appikon-sort.svg', // the icon on a black tile
};

// `primary` and `icon` follow the theme: both files are rendered inside one
// element that carries the accessible name (the two images are decorative).
// The light file is hidden inline, so without a stylesheet only the white file
// shows and only one logo is announced. With styles.css the theme (see
// tokens/base.css) swaps which of the two is visible.
const AUTO = { primary: ['white', 'black'], icon: ['icon-white', 'icon-black'] };

/** The Aftal' logo (the word drawn from Gabarito 600). Never rebuild it in markup or set it as text - always the file.
 *  There is one logo: departments are never written together with it. The old
 *  department variants (byggeri, udvikling, drift) still work and render the plain logo. */
export function Logo({ variant = 'primary', height = 40, src, alt = 'Aftal', className, style, ...rest }) {
  const h = typeof height === 'string' && /^\d+$/.test(height) ? Number(height) : height; // x-import attrs arrive as strings
  // Size keys in `style` belong to the image(s), as they did when the logo was a single <img>;
  // everything else (margin, position ...) goes on the outer element.
  const SIZE_KEYS = ['height', 'width', 'minHeight', 'maxHeight', 'minWidth', 'maxWidth'];
  const size = {}; const outer = {};
  Object.keys(style || {}).forEach((k) => { (SIZE_KEYS.includes(k) ? size : outer)[k] = style[k]; });
  const imgCss = Object.assign({ height: h, width: 'auto', display: 'block' }, size);
  const cls = (extra) => ['aftal-logo', extra, className].filter(Boolean).join(' ');
  if (src) return <img src={src} alt={alt} className={cls()} style={Object.assign({}, imgCss, outer)} {...rest} />;
  const v = FILE[variant] || AUTO[variant] ? variant : 'primary';
  if (FILE[v]) return <img src={base() + FILE[v]} alt={alt} className={cls()} style={Object.assign({}, imgCss, outer)} {...rest} />;
  const [onDark, onLight] = AUTO[v];
  return (
    <span role="img" aria-label={alt} className={cls()} style={Object.assign({ display: 'block', width: 'fit-content', lineHeight: 0 }, outer)} {...rest}>
      <img src={base() + FILE[onDark]} alt="" aria-hidden="true" className="aftal-logo__img aftal-logo__img--on-dark" style={imgCss} />
      <img src={base() + FILE[onLight]} alt="" aria-hidden="true" className="aftal-logo__img aftal-logo__img--on-light" style={Object.assign({}, imgCss, { display: 'none' })} />
    </span>
  );
}
