import React from 'react';

const CHEVRON = "url(\"data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236f6a61' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")";

/** Form control with a floating label: the label rests inside the field and
    morphs up to an 11px label when the field is focused or has content. */
export function Field({ label, type = 'text', name, id, placeholder, options, value, defaultValue, onChange, required, rows, style }) {
  const [focus, setFocus] = React.useState(false);
  const [internal, setInternal] = React.useState(defaultValue != null ? String(defaultValue) : '');
  const val = value !== undefined ? String(value ?? '') : internal;
  const isSelect = type === 'select';
  const isArea = type === 'textarea';
  const floated = !label || isSelect || focus || val.length > 0;
  const handleChange = (e) => { if (value === undefined) setInternal(e.target.value); if (onChange) onChange(e); };
  const labelCss = {
    position: 'absolute', left: 15, right: isSelect ? 40 : 15, pointerEvents: 'none', zIndex: 1,
    top: floated ? 8 : (isArea ? 16 : 19),
    fontSize: floated ? 11 : 15, fontWeight: 500, letterSpacing: '-0.005em', lineHeight: 1.2,
    color: focus ? 'var(--brand)' : (floated ? 'var(--ink-soft)' : 'var(--mute)'),
    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
    transition: 'top .15s ease, font-size .15s ease, color .15s ease',
  };
  const control = {
    background: focus ? 'var(--panel-hi)' : 'var(--panel-2)',
    border: '1px solid ' + (focus ? 'var(--brand)' : 'var(--line)'),
    borderRadius: 'var(--radius-sm)',
    padding: label ? (isArea ? '26px 14px 10px' : '24px 14px 8px') : '13px 14px',
    fontFamily: 'inherit', fontSize: 15, color: 'var(--ink)', outline: 'none', width: '100%',
    transition: 'border-color .15s ease, background-color .15s ease',
  };
  // The placeholder only appears while the field is focused and still empty —
  // at rest the label itself occupies the field.
  const ph = label ? (focus && !val ? placeholder : undefined) : placeholder;
  const bind = {
    id: id || name, name, required, onChange: handleChange,
    value: value !== undefined ? value : undefined,
    defaultValue: value === undefined ? defaultValue : undefined,
    onFocus: () => setFocus(true), onBlur: () => setFocus(false),
  };
  return (
    <div style={Object.assign({ position: 'relative', display: 'flex', flexDirection: 'column' }, style)}>
      {label ? <label htmlFor={id || name} style={labelCss}>{label}</label> : null}
      {isSelect ? (
        <select {...bind} style={Object.assign({}, control, {
          height: 56, appearance: 'none', WebkitAppearance: 'none', backgroundImage: CHEVRON,
          backgroundRepeat: 'no-repeat', backgroundPosition: 'right 13px center', backgroundSize: 16,
          paddingRight: 40, cursor: 'pointer',
        })}>
          {(options || []).map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : isArea ? (
        <textarea {...bind} rows={rows} placeholder={ph} style={Object.assign({}, control, { resize: 'vertical', minHeight: 96 })} />
      ) : (
        <input {...bind} type={type} placeholder={ph} style={Object.assign({}, control, { height: label ? 56 : 48 })} />
      )}
    </div>
  );
}
