import * as React from 'react';

/**
 * Full-bleed Glød call-to-action band. One per page, used as a rhythm break.
 *
 */
export interface CtaBandProps {
  /** "Klar til at komme i gang?" - a question or a short promise. */
  title: string;
  /** @default "Bliv ringet op" */
  cta?: string;
  /** @default "#kontakt" */
  href?: string;
  style?: React.CSSProperties;
}
export declare function CtaBand(props: CtaBandProps): React.JSX.Element;
