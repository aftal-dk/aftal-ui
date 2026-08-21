import * as React from 'react';

/**
 * Labelled form control. One component covers input, select and textarea so
 * every field in an Aftal form has the same label, height and focus behaviour.
 *
 */
export interface FieldProps {
  /** Danish, sentence case, no colon: "Navn", "Hvad drejer det sig om?". */
  label?: string;
  /** @default "text" */
  type?: 'text' | 'tel' | 'email' | 'select' | 'textarea';
  name?: string;
  id?: string;
  /** Only visible while the field is focused and empty. A real example, never a repeat of the label: "din@mail.dk". */
  placeholder?: string;
  /** Options for type="select". */
  options?: string[];
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
  style?: React.CSSProperties;
}
export declare function Field(props: FieldProps): JSX.Element;
