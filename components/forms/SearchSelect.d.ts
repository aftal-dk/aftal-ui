import * as React from 'react';

/**
 * Dropdown with built-in search: closed it looks like a select, open it becomes
 * a search input that filters the option list live. For long lists (ordrer,
 * ejendomme, lejemål) where a plain select is useless.
 */
export interface SearchSelectOption {
  value: string;
  /** Row title, e.g. "#308 · Genmonter køkkenskab på væg". */
  label: string;
  /** Optional second line: ejendom, kunde, status. */
  meta?: string;
}
export interface SearchSelectProps {
  /** Short prefix shown in the closed control: "Ordre", "Ejendom". */
  label?: string;
  options: SearchSelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, option: SearchSelectOption) => void;
  /** Shown when nothing is selected. @default "Søg …" */
  placeholder?: string;
  /** Control height in px. @default 42 */
  height?: number;
  /** Max panel list height in px. @default 320 */
  maxHeight?: number;
  style?: React.CSSProperties;
}
export declare function SearchSelect(props: SearchSelectProps): JSX.Element;
