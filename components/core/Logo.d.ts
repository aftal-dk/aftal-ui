import * as React from 'react';

/**
 * The Aftal lockup: mark plus wordmark, the mark alone, or a department lockup.
 *
 */
export interface LogoProps {
  /**
   * primary = GLØD mark + black wordmark on light ground.
   * white / black = single-colour lockups. icon* = mark only.
   * byggeri / udvikling / drift = department lockups.
   * @default "primary"
   */
  variant?: 'primary' | 'white' | 'black' | 'icon' | 'icon-white' | 'icon-black' | 'byggeri' | 'udvikling' | 'drift';
  /** Rendered height in px; width follows. @default 40 */
  height?: number;
  /** Override the asset URL (when /assets sits somewhere unusual). */
  src?: string;
  alt?: string;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
