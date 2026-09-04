import * as React from 'react';

/**
 * Button content for an action in flight, for raw <button> elements that are
 * not a <Button> yet: the label stays, a spinner appears in front of it.
 */
export interface BusyLabelProps {
  /** Pass the pending flag; the spinner shows while true. @default false */
  busy?: boolean;
  /** Spinner size in px; match the button's font size. @default 14 */
  size?: number;
  style?: React.CSSProperties;
  /** The label, unchanged while busy. */
  children?: React.ReactNode;
}

export declare function BusyLabel(props: BusyLabelProps): React.JSX.Element;
