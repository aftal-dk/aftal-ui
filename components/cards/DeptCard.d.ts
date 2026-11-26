import * as React from 'react';

/**
 * Department card - the band that routes people to Byggeri or Drift.
 *
 */
export interface DeptCardProps {
  /** "Byggeri" - the department name on its own, without "Aftal" in front. */
  name: string;
  /** One-line positioning, e.g. "Egne håndværkere, fast byggeledelse". */
  tag: string;
  /** Two lines on what the department does. */
  description: string;
  href?: string;
  style?: React.CSSProperties;
}
export declare function DeptCard(props: DeptCardProps): React.JSX.Element;
