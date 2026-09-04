import * as React from 'react';

/** Photo slot with the house treatment; renders a flat --panel-2 placeholder when no src is given. */
export interface MediaProps {
  src?: string;
  alt?: string;
  /** CSS aspect-ratio. @default "4 / 3" */
  ratio?: string;
  /** @default "var(--radius-lg)" */
  radius?: string;
  /** Quiet caption shown in the empty state instead of the photo glyph. */
  label?: string;
  style?: React.CSSProperties;
}
export declare function Media(props: MediaProps): React.JSX.Element;
