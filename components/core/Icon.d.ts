import * as React from 'react';

/** Aftal's stroke icons: 24x24, stroke-width 2, round caps — the Lucide-style set used across the site. */
export interface IconProps {
  /** @default "arrow" */
  name?: 'arrow' | 'check' | 'chevron' | 'menu' | 'close' | 'moon' | 'sun' | 'cookie' | 'image' | 'phone' | 'mail';
  /** Pixel size of the square. @default 16 */
  size?: number;
  /** Override the stroke weight (check defaults to 2.5, everything else to 2). */
  strokeWidth?: number;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): React.JSX.Element;

export interface PinIconProps { width?: number; height?: number; style?: React.CSSProperties }
export declare function PinIcon(props: PinIconProps): React.JSX.Element;
