import * as React from 'react';

/**
 * A 2px GLØD bar along the top edge of a panel that is refreshing behind
 * content that is already on screen. Content is never covered by a spinner.
 */
export interface LoadingBarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Render the bar. Pass the refetch flag directly. @default true */
  active?: boolean;
  /** Screen-reader label. @default "Henter…" */
  label?: string;
  /** Milliseconds before it becomes visible. @default 200 */
  delay?: number;
  style?: React.CSSProperties;
}

export declare function LoadingBar(props: LoadingBarProps): JSX.Element | null;
