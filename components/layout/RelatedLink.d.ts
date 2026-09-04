import * as React from 'react';

/** Pill-shaped link used in "Andre ydelser" rows. Hairline outline, never filled. */
export interface RelatedLinkProps {
  children?: React.ReactNode;
  href?: string;
  style?: React.CSSProperties;
}
export declare function RelatedLink(props: RelatedLinkProps): React.JSX.Element;
