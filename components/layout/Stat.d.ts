import * as React from 'react';

/** A KPI figure with its label. Numbers are ink; word-values are GLØD and smaller. */
export interface StatProps {
  /** "9", "40+", "450+" — or a word like "Landsdækkende". */
  value: string;
  /** Lowercase noun: "faste folk", "ejendomme i drift". */
  label: string;
  /** Set when the value is a word rather than a number. @default false */
  text?: boolean;
  style?: React.CSSProperties;
}
export declare function Stat(props: StatProps): React.JSX.Element;
