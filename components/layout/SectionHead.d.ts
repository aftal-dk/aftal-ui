import * as React from 'react';

/** The standard section opener: h2 plus a single lead paragraph, capped at 720px. */
export interface SectionHeadProps {
  /** Sentence case, ends with a full stop: "Tre afdelinger, ét hold." */
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** @default 720 */
  maxWidth?: number;
  /** Keeps the heading on one line above 1200px. @default false */
  oneline?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function SectionHead(props: SectionHeadProps): React.JSX.Element;
