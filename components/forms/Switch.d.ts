import * as React from 'react';

/** Binary toggle. In production it appears only in the cookie dialog, one per category. */
export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  /** Always-on category (necessary cookies): dimmed and non-interactive. @default false */
  locked?: boolean;
  label?: string;
  id?: string;
  style?: React.CSSProperties;
}
export declare function Switch(props: SwitchProps): JSX.Element;
