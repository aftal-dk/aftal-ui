import * as React from 'react';

/**
 * The callback form — Aftal's only lead capture. Four fields, one promise, one button.
 *
 */
export interface CallbackFormProps {
  /** @default "Vi ringer dig op." */
  title?: string;
  /** One line on what happens next. */
  lead?: string;
  /** Pre-selected department. @default "Ikke sikker endnu" */
  scope?: 'Udvikling' | 'Byggeri' | 'Drift' | 'Ikke sikker endnu';
  /** Adds the free-text "Kort om opgaven" field (contact page variant). @default false */
  withMessage?: boolean;
  /** @default "Vi vender tilbage inden for 24 timer." */
  note?: string;
  onSubmit?: (data: FormData) => void;
  style?: React.CSSProperties;
}
export declare function CallbackForm(props: CallbackFormProps): JSX.Element;
