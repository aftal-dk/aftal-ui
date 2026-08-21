import React from 'react';

/** Dropdown with built-in type-to-filter: the closed control looks like a select,
    but opening it turns the trigger into a search input that filters the list live. */
export function SearchSelect({ label, options = [], value, defaultValue, onChange, placeholder = 'Søg …', height = 42, maxHeight = 320, style }) {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const [active, setActive] = React.useState(0);
  const [internal, setInternal] = React.useState(defaultValue ?? null);
  const val = value !== undefined ? value : internal;
  const wrapRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const listRef = React.useRef(null);
  const selected = options.find((o) => o.value === val) || null;
  const q = query.trim().toLowerCase();
  const filtered = q ? options.filter((o) => (o.value + ' ' + o.label + ' ' + (o.meta || '')).toLowerCase().includes(q)) : options;

  React.useEffect(() => {
    if (!open) return;
    const away = (e) => { if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', away);
    return () => document.removeEventListener('mousedown', away);
  }, [open]);
  React.useEffect(() => { if (open && inputRef.current) inputRef.current.focus(); }, [open]);
  React.useEffect(() => { setActive(0); }, [q, open]);
  React.useEffect(() => {
    const el = listRef.current && listRef.current.children[active];
    if (el && listRef.current) {
      const t = el.offsetTop, b = t + el.offsetHeight, st = listRef.current.scrollTop, h = listRef.current.clientHeight;
      if (t < st) listRef.current.scrollTop = t; else if (b > st + h) listRef.current.scrollTop = b - h;
    }
  }, [active]);

  const pick = (o) => { if (value === undefined) setInternal(o.value); if (onChange) onChange(o.value, o); setOpen(false); setQuery(''); };
  const onKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive((a) => Math.min(a + 1, filtered.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    else if (e.key === 'Enter') { e.preventDefault(); if (filtered[active]) pick(filtered[active]); }
    else if (e.key === 'Escape') { setOpen(false); setQuery(''); }
  };
  const mark = (text) => {
    if (!q) return text;
    const i = text.toLowerCase().indexOf(q);
    if (i < 0) return text;
    return [text.slice(0, i), <mark key="m" style={{ background: 'none', color: 'var(--brand)', fontWeight: 600 }}>{text.slice(i, i + q.length)}</mark>, text.slice(i + q.length)];
  };
  const box = {
    height, display: 'flex', alignItems: 'center', gap: 9, padding: '0 13px', width: '100%',
    background: open ? 'var(--panel-hi)' : 'var(--panel-2)', border: '1px solid ' + (open ? 'var(--brand)' : 'var(--line)'),
    borderRadius: 10, fontSize: 14, cursor: 'pointer', transition: 'border-color .15s ease, background-color .15s ease',
  };
  const chev = <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--mute)', flex: 'none', marginLeft: 'auto', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .15s ease' }}><path d="m6 9 6 6 6-6" /></svg>;

  return (
    <div ref={wrapRef} style={Object.assign({ position: 'relative' }, style)}>
      {open ? (
        <div style={box}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--mute)', flex: 'none' }}><circle cx="11" cy="11" r="7" /><path d="m21 21-4-4" /></svg>
          <input ref={inputRef} value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={onKey} placeholder={selected ? selected.label : placeholder}
            style={{ flex: 1, minWidth: 0, background: 'none', border: 'none', outline: 'none', font: 'inherit', color: 'var(--ink)', padding: 0 }} />
          {chev}
        </div>
      ) : (
        <div onClick={() => setOpen(true)} style={Object.assign({}, box, { color: selected ? 'var(--ink)' : 'var(--mute)' })}>
          {label ? <span style={{ fontSize: 11, fontWeight: 500, color: 'var(--ink-soft)', flex: 'none' }}>{label}</span> : null}
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{selected ? selected.label : placeholder}</span>
          {chev}
        </div>
      )}
      {open ? (
        <div style={{ position: 'absolute', zIndex: 40, top: '100%', left: 0, right: 0, minWidth: 300, marginTop: 6, background: 'var(--panel-hi)', border: '1px solid var(--line-2)', borderRadius: 12, boxShadow: '0 16px 40px rgba(0,0,0,0.28)', overflow: 'hidden' }}>
          <div ref={listRef} style={{ maxHeight, overflowY: 'auto', padding: 6 }}>
            {filtered.length === 0 ? (
              <div style={{ padding: '18px 14px', fontSize: 13, color: 'var(--mute)' }}>Ingen match for &ldquo;{query}&rdquo;</div>
            ) : filtered.map((o, n) => (
              <div key={o.value} onMouseEnter={() => setActive(n)} onMouseDown={(e) => { e.preventDefault(); pick(o); }}
                style={{ padding: '9px 12px', borderRadius: 8, cursor: 'pointer', background: n === active ? 'var(--panel-2)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, fontSize: 14, fontWeight: 500 }}>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{mark(o.label)}</span>
                  {o.value === val ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginLeft: 'auto' }}><path d="M20 6 9 17l-5-5" /></svg> : null}
                </div>
                {o.meta ? <div style={{ fontSize: 12, color: 'var(--mute)', marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{mark(o.meta)}</div> : null}
              </div>
            ))}
          </div>
          <div style={{ padding: '7px 12px', borderTop: '1px solid var(--line)', fontSize: 11, color: 'var(--mute)', display: 'flex', gap: 12 }}>
            <span>↑↓ navigér</span><span>↵ vælg</span><span>esc luk</span>
            <span style={{ marginLeft: 'auto' }}>{filtered.length} af {options.length}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
