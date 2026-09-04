import * as React from 'react';

/**
 * A flat placeholder in the shape of the content on its way. 9% tint of the
 * text colour, no shimmer. The default for any content area that is empty
 * because data has not arrived yet.
 */
export interface SkeletonProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** CSS width. @default "100%" */
  width?: number | string;
  /** CSS height. @default 14 */
  height?: number | string;
  /** Border radius; 6 for text lines, match the card radius for blocks. @default 6 */
  radius?: number | string;
  /** Milliseconds before it becomes visible. @default 200 */
  delay?: number;
  style?: React.CSSProperties;
}

export declare function Skeleton(props: SkeletonProps): JSX.Element;

/**
 * A column of text-like rows with varying widths, announced as loading to
 * screen readers. Use it for lists and tables.
 */
export interface SkeletonListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default 5 */
  rows?: number;
  /** @default 14 */
  rowHeight?: number | string;
  /** Vertical gap between rows. @default 12 */
  gap?: number | string;
  /** Screen-reader label. @default "Henter…" */
  label?: string;
  /** @default 200 */
  delay?: number;
  style?: React.CSSProperties;
}

export declare function SkeletonList(props: SkeletonListProps): JSX.Element;
