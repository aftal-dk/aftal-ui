import * as React from 'react';

/**
 * Service row: thumbnail, title, one-line description, a quiet points line and an arrow.
 *
 */
export interface WorkRowProps {
  title: string;
  description: string;
  /** Short keywords joined with " · ". Hidden below 860px. */
  points?: string[];
  image?: string;
  /** Dims the row to 72% and appends the "Kommer snart" badge. @default false */
  soon?: boolean;
  href?: string;
  style?: React.CSSProperties;
}
export declare function WorkRow(props: WorkRowProps): JSX.Element;
