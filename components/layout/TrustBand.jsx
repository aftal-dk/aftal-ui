import React from 'react';

const BASE = () => (typeof window !== 'undefined' && window.AFTAL_ASSET_BASE) || 'assets';

/** Membership proof: Byg Garanti and DI Byggeri, with one sentence of context. */
export function TrustBand({ label = 'Medlem af', text, style }) {
  return (
    <div style={Object.assign({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px 48px', flexWrap: 'wrap' }, style)}>
      {text ? <p className="body-lg" style={{ maxWidth: 640 }}>{text}</p> : null}
      <div style={{ display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' }}>
        {label ? <span style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{label}</span> : null}
        <img className="trust-logo" src={BASE() + '/images/byg-garanti.png'} alt="Byg Garanti - en del af DI Byggeri" width={121} height={32} />
        <img className="trust-logo trust-logo--di" src={BASE() + '/images/di-byggeri.png'} alt="DI Byggeri" width={43} height={40} />
      </div>
    </div>
  );
}
