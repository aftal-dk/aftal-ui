import * as React from 'react';

/** A step in the "Sådan arbejder vi" band. Flat card, no number, no icon. */
export interface StepCardProps {
  /** Imperative and short: "Ring eller skriv", "Vi kommer forbi". */
  title: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function StepCard(props: StepCardProps): React.JSX.Element;
