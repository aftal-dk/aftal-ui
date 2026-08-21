import React from 'react';

/** The consent toggle: 44x26 track, 18px knob, GLØD when on. */
export function Switch({ checked, defaultChecked, onChange, locked = false, label, id, style }) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = checked === undefined ? internal : checked;
  const toggle = (e) => {
    if (locked) return;
    if (checked === undefined) setInternal(e.target.checked);
    if (onChange) onChange(e.target.checked);
  };
  return (
    <label htmlFor={id} style={Object.assign({ position: 'relative', flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: 10, cursor: locked ? 'not-allowed' : 'pointer', opacity: locked ? 0.6 : 1 }, style)}>
      <input id={id} type="checkbox" checked={on} onChange={toggle} disabled={locked}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{
        display: 'block', width: 44, height: 26, borderRadius: 'var(--radius-pill)', position: 'relative',
        background: on ? 'var(--brand)' : 'var(--panel-hi)',
        border: '1px solid ' + (on ? 'var(--brand)' : 'var(--line-2)'),
        transition: 'background-color .18s ease, border-color .18s ease',
      }}>
        <span style={{
          position: 'absolute', top: 3, left: 3, width: 18, height: 18, borderRadius: '50%',
          background: on ? '#fff' : 'var(--mute)', transform: on ? 'translateX(18px)' : 'none',
          transition: 'transform .18s ease, background-color .18s ease',
        }} />
      </span>
      {label ? <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)' }}>{label}</span> : null}
    </label>
  );
}
