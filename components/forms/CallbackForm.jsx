import React from 'react';
import { Field } from './Field.jsx';
import { Button } from '../core/Button.jsx';
import { Icon } from '../core/Icon.jsx';

/** "Vi ringer dig op." — the single lead form used across the site. */
export function CallbackForm({ title = 'Vi ringer dig op.', lead, scope = 'Ikke sikker endnu', withMessage = false, note = 'Vi vender tilbage inden for 24 timer.', onSubmit, style }) {
  const [sent, setSent] = React.useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(new FormData(e.currentTarget));
    setSent(true);
  };
  const card = Object.assign({
    background: 'var(--tint)', border: '1px solid var(--line)', borderRadius: 'var(--radius-3xl)',
    padding: '28px 28px 24px', display: 'flex', flexDirection: 'column', gap: 18, width: '100%', maxWidth: 560,
  }, style);
  if (sent) {
    return (
      <div style={card}>
        <div style={{ textAlign: 'center', padding: '28px 8px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }} role="status" aria-live="polite">
          <span style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--brand)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="check" size={22} /></span>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 24, lineHeight: 1.15, letterSpacing: '-0.018em', color: 'var(--ink)', margin: 0 }}>Tak for din besked.</h3>
          <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ink-soft)', margin: 0 }}>Vi vender tilbage hurtigst muligt - oftest samme dag.</p>
        </div>
      </div>
    );
  }
  return (
    <div style={card}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingBottom: 18, borderBottom: '1px solid var(--line)' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 24, lineHeight: 1.15, letterSpacing: '-0.018em', color: 'var(--ink)', margin: 0 }}>{title}</h3>
        {lead ? <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ink-soft)', margin: 0 }}>{lead}</p> : null}
      </div>
      <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <Field label="Navn" name="name" placeholder="Dit navn" required />
          <Field label="Telefon" name="phone" type="tel" placeholder="23 97 99 46" required />
        </div>
        <Field label="Email" name="email" type="email" placeholder="din@mail.dk" required />
        <Field label="Hvad drejer det sig om?" name="scope" type="select" defaultValue={scope}
          options={['Udvikling', 'Byggeri', 'Drift', 'Ikke sikker endnu']} />
        {withMessage ? <Field label="Kort om opgaven" name="message" type="textarea" placeholder="Et par linjer om hvad du har brug for" /> : null}
        <Button type="submit" size="lg">Ring mig op <Icon name="arrow" /></Button>
        {note ? <p style={{ fontSize: 13, color: 'var(--mute)', margin: '14px 0 0', textAlign: 'center' }}>{note}</p> : null}
      </form>
    </div>
  );
}
