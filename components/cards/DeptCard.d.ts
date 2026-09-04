import * as React from 'react';

/**
 * Department card — the three-up band that routes people to Udvikling, Byggeri or Drift.
 *
 */
export interface DeptCardProps {
  /** "Aftal Byggeri" — the department name including the Aftal prefix. */
  name: string;
  /** One-line positioning, e.g. "Egne håndværkere, fast byggeledelse". */
  tag: string;
  /** Two lines on what the department does. */
  description: string;
  href?: string;
  style?: React.CSSProperties;
}
export declare function DeptCard(props: DeptCardProps): React.JSX.Element;
