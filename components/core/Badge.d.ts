import * as React from 'react';

/** Tinted GLØD capsule. The system uses it for one thing: marking a service as not live yet. */
export interface BadgeProps {
  /** @default "Kommer snart" */
  children?: React.ReactNode;
  /** sm = 10px inside menus, md = 12px next to a heading. @default "sm" */
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
