import * as React from 'react';

/** Two-up category card: photo, title, one-line intro and the services it covers. */
export interface CategoryCardProps {
  title: string;
  description: string;
  /** Service labels, joined with " · " as one quiet line. */
  services?: string[];
  /** Defaults to "Se <title in lowercase>". */
  cta?: string;
  image?: string;
  href?: string;
  style?: React.CSSProperties;
}
export declare function CategoryCard(props: CategoryCardProps): JSX.Element;
