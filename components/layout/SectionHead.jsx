import React from 'react';

/** Section heading plus optional lead. Aftal headings end in a full stop. */
export function SectionHead({ title, lead, maxWidth = 720, oneline = false, style, children }) {
  return (
    <div style={Object.assign({ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 'clamp(36px, 5vw, 64px)', maxWidth }, style)}>
      <h2 className={oneline ? 'h2 oneline' : 'h2'} style={{ margin: 0 }}>{title}</h2>
      {lead ? <p className="body-lg">{lead}</p> : null}
      {children}
    </div>
  );
}
