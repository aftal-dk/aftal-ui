import * as React from 'react';

/**
 * The Aftal' logo: the word Aftal' as a single-colour SVG, or the icon (A with
 * an apostrophe), or the app icon on a Glød or black tile. There is one logo;
 * departments are never written together with it.
 */
export interface LogoProps {
  /**
   * primary = the logo in the theme's text colour (white file in the dark
   * theme, black file in the light one; needs styles.css).
   * white / black = fixed single-colour logo.
   * icon = the icon, following the theme. icon-white / icon-black = fixed icon.
   * app = the icon on a Glød tile. app-black = the icon on a black tile.
   * byggeri / udvikling / drift are retired and render the plain logo.
   * @default "primary"
   */
  variant?: 'primary' | 'white' | 'black' | 'icon' | 'icon-white' | 'icon-black' | 'app' | 'app-black' | 'byggeri' | 'udvikling' | 'drift';
  /** Rendered height in px; width follows. Under 10 px use the icon. @default 40 */
  height?: number;
  /** Override the asset URL (when /assets sits somewhere unusual). */
  src?: string;
  alt?: string;
  /** Size keys (height, width, min/max) apply to the image; the rest to the outer element. */
  style?: React.CSSProperties;
  className?: string;
  id?: string;
}
export declare function Logo(props: LogoProps): React.JSX.Element;
