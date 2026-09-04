import * as React from 'react';

/** Byg Garanti + DI Byggeri membership marks. Appears once per page, on Byggeri surfaces. */
export interface TrustBandProps {
  /** @default "Medlem af" */
  label?: string;
  /** Optional sentence to the left of the marks. */
  text?: string;
  style?: React.CSSProperties;
}
export declare function TrustBand(props: TrustBandProps): React.JSX.Element;
