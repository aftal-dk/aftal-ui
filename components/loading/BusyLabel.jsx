import React from 'react';
import { Spinner } from './Spinner.jsx';

/**
 * The content of a button whose action is in flight, for buttons that are not
 * a <Button> yet (legacy apps with raw <button> elements). The label stays,
 * the spinner goes in front of it - exactly what `Button loading` renders.
 */
export function BusyLabel({ busy = false, size = 14, style, children }) {
  return (
    <span style={Object.assign({ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 }, style)}>
      {busy ? <Spinner size={size} label="" delay={0} /> : null}
      {children}
    </span>
  );
}
