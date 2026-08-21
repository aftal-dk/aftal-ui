import * as React from 'react';

/**
 * Aftal's only button. Primary is GLØD orange on any ground, ghost is a
 * hairline outline, onbrand is the white button used inside a GLØD band.
 *
 */
export interface ButtonProps {
  /** Visual role. @default "primary" */
  variant?: 'primary' | 'ghost' | 'onbrand';
  /** 48px default, 54px for hero and form submits. @default "md" */
  size?: 'md' | 'lg';
  /** Renders an <a> instead of a <button>. */
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
  /** Label, usually followed by <Icon name="arrow" />. */
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;
