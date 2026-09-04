import * as React from 'react';

/**
 * The system's only spinner: a three-quarter arc in `currentColor`. Use it for
 * an action in flight (inside the control that started it) or a small inline
 * wait. Content areas use `Skeleton` instead.
 */
export interface SpinnerProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> {
  /** Pixel size, matches the surrounding text or icon. @default 16 */
  size?: number;
  /** Screen-reader text; shown visibly with `showLabel`. Empty string hides the spinner from assistive tech. @default "Henter…" */
  label?: string;
  /** Render the label next to the arc. @default false */
  showLabel?: boolean;
  /** Milliseconds before the spinner becomes visible, so fast responses never flicker. @default 200 */
  delay?: number;
  style?: React.CSSProperties;
}

export declare function Spinner(props: SpinnerProps): JSX.Element;
