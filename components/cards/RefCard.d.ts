import * as React from 'react';

/** Reference card for a finished project. The invitation variant replaces the photo with a GLØD ":-)". */
export interface RefCardProps {
  title: string;
  /** "Byggeri · Aalborg, 2026" */
  meta: string;
  image?: string;
  /** Renders the playful ":-)" invitation card used as the last slot. @default false */
  smiley?: boolean;
  href?: string;
  style?: React.CSSProperties;
}
export declare function RefCard(props: RefCardProps): JSX.Element;
