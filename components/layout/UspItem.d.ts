import * as React from 'react';

/** Check-marked promise line. The only bullet style in the system. */
export interface UspItemProps {
  children?: React.ReactNode;
  /** Icon size in px; 20 in USP lists, 20 in service point grids. @default 20 */
  size?: number;
  style?: React.CSSProperties;
}
export declare function UspItem(props: UspItemProps): JSX.Element;
