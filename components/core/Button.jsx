import React from 'react';
import { Spinner } from '../loading/Spinner.jsx';

const SIZES = { md: { height: 48, padding: '0 22px', fontSize: 15 }, lg: { height: 54, padding: '0 26px', fontSize: 16 } };

const VARIANTS = {
  primary: { rest: { background: 'var(--brand)', color: '#fff', borderColor: 'transparent' }, hover: { background: 'var(--brand-hover)' } },
  ghost:   { rest: { background: 'transparent', color: 'var(--ink)', borderColor: 'var(--line-2)' }, hover: { background: 'var(--panel)' } },
  onbrand: { rest: { background: '#fff', color: 'var(--glod)', borderColor: 'transparent' }, hover: { background: 'var(--kalk)', color: 'var(--brand-hover)' } },
};

/** Primary action. One primary button per view; ghost for the secondary path.
 *  `loading` keeps the label, puts a spinner in front of it, disables the
 *  button and sets aria-busy - the button stays fully opaque so it reads as
 *  "working", not "unavailable". */
export function Button({ variant = 'primary', size = 'md', href, type = 'button', disabled = false, loading = false, onClick, style, children, ...rest }) {
  const inactive = disabled || loading;
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const css = Object.assign({
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    height: s.height, padding: s.padding, borderRadius: 'var(--radius-md)',
    fontFamily: 'inherit', fontSize: s.fontSize, fontWeight: 500, letterSpacing: '-0.005em',
    border: '1px solid transparent', whiteSpace: 'nowrap', textDecoration: 'none',
    cursor: loading ? 'progress' : disabled ? 'not-allowed' : 'pointer', opacity: disabled && !loading ? 0.5 : 1,
    transition: 'background-color .15s ease, color .15s ease, border-color .15s ease, transform .15s ease',
    transform: down && !inactive ? 'translateY(1px)' : 'none',
  }, v.rest, hover && !inactive ? v.hover : null, style);
  const handlers = {
    onMouseEnter: () => setHover(true), onMouseLeave: () => { setHover(false); setDown(false); },
    onMouseDown: () => setDown(true), onMouseUp: () => setDown(false),
  };
  const content = loading ? <><Spinner size={s.fontSize} label="" delay={0} />{children}</> : children;
  if (href && !inactive) return <a href={href} style={css} {...handlers} {...rest}>{content}</a>;
  return <button type={type} disabled={inactive} aria-busy={loading || undefined} onClick={onClick} style={css} {...handlers} {...rest}>{content}</button>;
}
